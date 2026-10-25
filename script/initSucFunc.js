function initSuc(color){
    localStorage.setItem("init","1");
    localStorage.setItem("theme",color);
    window.location.href = "../index.html";
}