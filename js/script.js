const btn = document.getElementById("menu-btn");

const nav = document.getElementById("menu");
const icon_open = document.getElementById("icon-open");
const icon_close = document.getElementById("icon-close");

btn.addEventListener("click", () => {
    //opens and closes icon-bars
    icon_open.classList.toggle("hidden");
    icon_open.classList.toggle("flex");

    icon_close.classList.toggle("flex");
    icon_close.classList.toggle("hidden");

    //opens and closes menu items
    nav.classList.toggle("flex");
    nav.classList.toggle("hidden");
})

