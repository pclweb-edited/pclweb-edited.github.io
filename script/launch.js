function launchGame(){
    let f = "";
    switch (getVersion()){
        case "1":
            f = "./MCVersion/1.8.8.html";
            break;
        case "2":
            f = "./MCVersion/26.3.html";
            break;
        case "3":
            f = "./MCVersion/1.13.2.html";
            break;
        case "4":
            f = "./MCVersion/1.16.5.html";
            break;
        case "5":
            f = "./MCVersion/1.21.11.html";
            break;
    }
    window.location.href = f;
}
function getVersion(){
    return document.getElementById("version-select").value;
}
function clse(){
    let d = document.createElement("div");
    
    // 1. 修复拼写错误
    d.style.backgroundColor = "black";
    
    // 2. 修复高度问题，改用 vw 和 vh（视口宽高），绝对铺满
    d.style.width = "100vw";
    d.style.height = "100vh";
    
    // 3. 加上固定定位，防止它被其他元素挤走
    d.style.position = "fixed";
    d.style.top = "0";
    d.style.left = "0";
    d.style.zIndex = "99999"; // 盖在最上面
    
    // 4. 如果你想在黑屏上写点什么，可以加个内边距和文字颜色
    d.style.color = "white";
    d.style.display = "flex";
    d.style.justifyContent = "center";
    d.style.alignItems = "center";
    d.innerText = "PCL Web 已安全退出";

    document.body.appendChild(d);
}
