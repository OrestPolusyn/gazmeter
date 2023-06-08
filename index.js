(function () {
const $3f70a458a055d5cc$var$navigation = document.querySelector(".header");
const $3f70a458a055d5cc$var$page = document.querySelector(".page");
$3f70a458a055d5cc$var$navigation.addEventListener("click", $3f70a458a055d5cc$var$onBurgerBtnClick);
function $3f70a458a055d5cc$var$onBurgerBtnClick(e) {
    if (!e.target.parentNode.matches(".burger") && !e.target.matches(".burger")) return;
    this.classList.remove("closed");
    $3f70a458a055d5cc$var$page.classList.add("open");
    if (this.matches(".opened")) {
        this.classList.add("closed");
        $3f70a458a055d5cc$var$page.classList.remove("open");
        setTimeout(()=>{
            this.classList.remove("opened");
        }, 500);
    }
    this.classList.add("opened");
}


const $3d3818e93bb7e73b$var$dialog = document.querySelector("dialog");
const $3d3818e93bb7e73b$var$closeDialogBtns = [
    ...document.querySelectorAll(".modal__close")
];
$3d3818e93bb7e73b$var$closeDialogBtns.forEach((close)=>{
    $3d3818e93bb7e73b$var$dialog?.close();
});
document.querySelector(".form")?.addEventListener("submit", (e)=>{
    e.preventDefault();
    $3d3818e93bb7e73b$var$dialog.showModal();
});





})();
