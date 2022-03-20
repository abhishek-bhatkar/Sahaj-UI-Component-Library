const nav = document.querySelector("#scrollbar-navigation");
const navToggle = document.querySelector(".scrollbar-toggle");
const alertDismissDiv = document.querySelector("#alert-dimiss");
const alertDismissBtn = document.querySelector("#alert-dimiss-btn");

navToggle.addEventListener("click", () => {

    const navVisibility = nav.getAttribute("data-visible");

    if(navVisibility === "true") {
        nav.setAttribute("data-visible", "false");
        navToggle.setAttribute("aria-expanded", "false");
    }
    else {
        nav.setAttribute("data-visible", "true");
        navToggle.setAttribute("aria-expanded", "true");
    }

})

alertDismissBtn.addEventListener("click", () => {
    alertDismissDiv.classList.add("alert-none");
})