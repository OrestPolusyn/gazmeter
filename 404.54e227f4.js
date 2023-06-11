const $2ad3966601d65e3e$var$navigation = document.querySelector(".header");
const $2ad3966601d65e3e$var$page = document.querySelector(".page");
$2ad3966601d65e3e$var$navigation.addEventListener("click", $2ad3966601d65e3e$var$onBurgerBtnClick);
function $2ad3966601d65e3e$var$onBurgerBtnClick(e) {
    if (!e.target.parentNode.matches(".burger") && !e.target.matches(".burger")) return;
    e.addEventListener;
    this.classList.remove("closed");
    $2ad3966601d65e3e$var$page.classList.add("open");
    if (this.matches(".opened")) {
        this.classList.add("closed");
        $2ad3966601d65e3e$var$page.classList.remove("open");
        setTimeout(()=>{
            this.classList.remove("opened");
        }, 500);
    }
    this.classList.add("opened");
}


const $761d3cd8a76325fa$var$dialog = document.querySelector("dialog");
const $761d3cd8a76325fa$var$closeDialogBtns = [
    ...document.querySelectorAll(".modal__close")
];
$761d3cd8a76325fa$var$closeDialogBtns.forEach((close)=>{
    $761d3cd8a76325fa$var$dialog?.close();
});
document.querySelector(".form")?.addEventListener("submit", (e)=>{
    e.preventDefault();
    $761d3cd8a76325fa$var$dialog.showModal();
});








