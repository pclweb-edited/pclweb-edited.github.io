if (localStorage.getItem("init")==null){
    window.location.href = "./pages/Init_1.html";
}

function resetInit(){
    localStorage.removeItem("init");
    window.location.href = "./pages/Init_1.html";
}

window.addEventListener('DOMContentLoaded', () => {
    const theme = localStorage.getItem("theme") || "blue";
    document.body.classList.add("theme-" + theme);
});
