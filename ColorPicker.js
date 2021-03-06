const MATERIAL_DESIGN_COLOR_PALETTE = {
    colorPickerWidth: "150px",
    colorCellWidth:   "15px",
    colorCellHeight:  "15px",
    colorPalette: [
        "#ffebee","#ffcdd2","#ef9a9a","#e57373","#ef5350","#f44336","#e53935","#d32f2f","#c62828","#b71c1c",
        "#fce4ec","#f8bbd0","#f48fb1","#f06292","#ec407a","#e91e63","#d81b60","#c2185b","#ad1457","#880e4f",
        "#f3e5f5","#e1bee7","#ce93d8","#ba68c8","#ab47bc","#9c27b0","#8e24aa","#7b1fa2","#6a1b9a","#4a148c",
        "#ede7f6","#d1c4e9","#b39ddb","#9575cd","#7e57c2","#673ab7","#5e35b1","#512da8","#4527a0","#311b92",
        "#e8eaf6","#c5cae9","#9fa8da","#7986cb","#5c6bc0","#3f51b5","#3949ab","#303f9f","#283593","#1a237e",
        "#e3f2fd","#bbdefb","#90caf9","#64b5f6","#42a5f5","#2196f3","#1e88e5","#1976d2","#1565c0","#0d47a1",
        "#e1f5fe","#b3e5fc","#81d4fa","#4fc3f7","#29b6f6","#03a9f4","#039be5","#0288d1","#0277bd","#01579b",
        "#e0f7fa","#b2ebf2","#80deea","#4dd0e1","#26c6da","#00bcd4","#00acc1","#0097a7","#00838f","#006064",
        "#e0f2f1","#b2dfdb","#80cbc4","#4db6ac","#26a69a","#009688","#00897b","#00796b","#00695c","#004d40",
        "#e8f5e9","#c8e6c9","#a5d6a7","#81c784","#66bb6a","#4caf50","#43a047","#388e3c","#2e7d32","#1b5e20", 
        "#f1f8e9","#dcedc8","#c5e1a5","#aed581","#9ccc65","#8bc34a","#7cb342","#689f38","#558b2f","#33691e",
        "#f9fbe7","#f0f4c3","#e6ee9c","#dce775","#d4e157","#cddc39","#c0ca33","#afb42b","#9e9d24","#827717",
        "#fffde7","#fff9c4","#fff59d","#fff176","#ffee58","#ffeb3b","#fdd835","#fbc02d","#f9a825","#f57f17",
        "#fff8e1","#ffecb3","#ffe082","#ffd54f","#ffca28","#ffc107","#ffb300","#ffa000","#ff8f00","#ff6f00",
        "#fff3e0","#ffe0b2","#ffcc80","#ffb74d","#ffa726","#ff9800","#fb8c00","#f57c00","#ef6c00","#e65100",
        "#fbe9e7","#ffccbc","#ffab91","#ff8a65","#ff7043","#ff5722","#f4511e","#e64a19","#d84315","#bf360c",
        "#efebe9","#d7ccc8","#bcaaa4","#a1887f","#8d6e63","#795548","#6d4c41","#5d4037","#4e342e","#3e2723",
        "#fafafa","#f5f5f5","#eeeeee","#e0e0e0","#bdbdbd","#9e9e9e","#757575","#616161","#424242","#212121",
        "#eceff1","#cfd8dc","#b0bec5","#90a4ae","#78909c","#607d8b","#546e7a","#455a64","#37474f","#263238", 
    ],
};

class ColorPicker {
    constructor(colorPalette, colorPickerContainer, triggerElement, setColorCallback) {
        this.colorPalette = colorPalette;
        this.colorPickerNode = document.createElement("div");
        this.colorPickerNode.style.position = "relative";
        this.colorPickerNode.style.display = "none";
        this.isVisible = false;
 
        this.colorPickerNode.style.width = this.colorPalette.colorPickerWidth;

        this.chosenColor = colorPalette.colorPalette[0];

        this.applyColorBtn = document.createElement("button");
        this.applyColorBtn.style.width = "100%";
        this.applyColorBtn.style.backgroundColor = this.chosenColor;
        this.applyColorBtn.innerHTML = this.chosenColor;
        this.applyColorBtn.addEventListener("click", () => {
            this.hide();
            setColorCallback(this.chosenColor);
        });
        
        this.closeBtn = document.createElement("button");
        this.closeBtn.innerHTML = "x";
        this.closeBtn.style.position = "absolute";
        this.closeBtn.style.top = "-20px";
        this.closeBtn.style.right = "-20px";
        this.closeBtn.addEventListener("click", () => { this.hide(); });
        
        this.colorPickerNode.appendChild(this.closeBtn);

        for(let i = 0; i < this.colorPalette.colorPalette.length; i++) {
            let newColorDiv = document.createElement("div");
            newColorDiv.style.backgroundColor = this.colorPalette.colorPalette[i];
            newColorDiv.style.width = this.colorPalette.colorCellWidth;
            newColorDiv.style.height = this.colorPalette.colorCellHeight;
            newColorDiv.style.display = "inline-block";
            newColorDiv.setAttribute("colpick", this.colorPalette.colorPalette[i]);

            newColorDiv.addEventListener("click", () => {
                this.chosenColor = newColorDiv.getAttribute("colpick");

                this.applyColorBtn.innerHTML = this.chosenColor;
                this.applyColorBtn.style.backgroundColor =  this.chosenColor;
            });

            this.colorPickerNode.appendChild(newColorDiv);
        }

        this.colorPickerNode.appendChild(this.applyColorBtn);
        
        this.insertInto(colorPickerContainer);
        
        triggerElement.addEventListener("click", () => {
            if(this.isVisible) this.hide();
            else this.show();
        });

        
    }

    insertInto(element) {
        element.appendChild(this.colorPickerNode);
    }

    show() {
        this.colorPickerNode.style.display = "block";
        this.isVisible = true;
    }

    hide() {
        this.colorPickerNode.style.display = "none";
        this.isVisible = false;
    }
}