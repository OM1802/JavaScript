<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button id="clickhere">Click here</button>
    <script>
        function attachEventLIstener(){
    let count=0;
    document.getElementById("clickhere").addEventListener("click",function xyz(){
    console.log("BUTTON IS CLICKED!",++count);
})

}
attachEventLIstener();
    </script>
</body>
</html>
