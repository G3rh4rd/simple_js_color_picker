const COLOR_PALETTE = [ "#ffebee","#ffcdd2","#ef9a9a","#e57373","#ef5350","#f44336","#e53935","#d32f2f","#c62828","#b71c1c",
                       "#fce4ec","#f8bbd0","#f48fb1","#f06292","#ec407a","#e91e63","#d81b60","#c2185b","#ad1457","#880e4f", "#f3e5f5","#e1bee7","#ce93d8","#ba68c8","#ab47bc","#9c27b0","#8e24aa","#7b1fa2","#6a1b9a","#4a148c", "#ede7f6","#d1c4e9","#b39ddb","#9575cd","#7e57c2","#673ab7","#5e35b1","#512da8","#4527a0","#311b92", "#e8eaf6","#c5cae9","#9fa8da","#7986cb","#5c6bc0","#3f51b5","#3949ab","#303f9f","#283593","#1a237e",
                       "#e3f2fd","#bbdefb","#90caf9","#64b5f6","#42a5f5","#2196f3","#1e88e5","#1976d2","#1565c0","#0d47a1",

];

class ColorPicker {
    constructor(colorPalette, colPalWidth, colCellSize) {
        this.colorPalette = colorPalette;
        this.colorPickerNode = document.createElement("div");
        this.colorPickerNode.style.display = "none";
        this.isVisible = false;

        if(Number.isInteger(colPalWidth)) this.colorPickerNode.style.width = colPalWidth + "px"; 
        else this.colorPickerNode.style.width = colPalWidth;

        if(Number.isInteger(colCellSize)) colCellSize += "px";

        this.chosenColor = colorPalette[0];

        this.applyColorBtn = document.createElement("button");
        this.applyColorBtn.style.width = "100%";
        this.applyColorBtn.style.backgroundColor = this.chosenColor;
        this.applyColorBtn.innerHTML = this.chosenColor;
        this.applyColorBtn.addEventListener("click", () => {this.hide()});

        this.lastChosenColDiv = null;
        for(let i = 0; i < this.colorPalette.length; i++) {
            let newColorDiv = document.createElement("div");
            newColorDiv.style.backgroundColor = this.colorPalette[i];
            newColorDiv.style.width = colCellSize;
            newColorDiv.style.height = colCellSize;
            newColorDiv.style.display = "inline-block";
            newColorDiv.setAttribute("colpick", this.colorPalette[i]);

            newColorDiv.addEventListener("click", () => {
                this.chosenColor = newColorDiv.getAttribute("colpick");
                if(this.lastChosenColDiv != null) this.lastChosenColDiv.style.border = "";
                newColorDiv.style.border = "1px solid blue";

                this.applyColorBtn.innerHTML = this.chosenColor;
                this.applyColorBtn.style.backgroundColor =  this.chosenColor;
                this.lastChosenColDiv = newColorDiv;
            });

            this.colorPickerNode.appendChild(newColorDiv);
        }


        this.colorPickerNode.appendChild(this.applyColorBtn);

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