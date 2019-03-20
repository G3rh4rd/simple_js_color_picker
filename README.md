# simple_js_color_picker
Simple Javascript color-picker written in plain js

How to use:

```
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
                                          (x) => {document.body.style.backgroundColor = x}
                                         );
            
        </script>
    </body>
</html>
```
