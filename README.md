# simple js color picker
Simple Javascript color-picker written in plain js

How to use:

```html
<html>
    <head>        
    </head>
    <body>
        <div id="color_picker"></div>
        <button id="triggerBbtn">pick color</button>
        <script src="ColorPicker.js"></script>
        <script>
            
            let colPick = new ColorPicker(MATERIAL_DESIGN_COLOR_PALETTE,
                                          document.getElementById("color_picker"),
                                          document.getElementById("triggerBbtn"),
                                          (pickedColor) => {document.body.style.backgroundColor = pickedColor}
                                         );
            
        </script>
    </body>
</html>
```
