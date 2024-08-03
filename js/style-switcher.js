/*======= Toggle Style ======*/
const styleSwitcherToggel = document.querySelector(".style-switcher-toggle");
// console.log(styleSwitcherToggel);
styleSwitcherToggel.addEventListener("click",()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
})

// hide style switcher on scroll 
window.addEventListener("scroll",()=>{
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open")
    }
})
/*======= Color Theme ======*/
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled", "true");

        }
    })

}