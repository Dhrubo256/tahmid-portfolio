let bar = document.getElementById("bar")
let aside = document.getElementById("aside")
let icon = document.getElementById("icon")
let about = document.getElementById("about")
let service = document.getElementById("service")
let skill = document.getElementById("skill")
let nav = document.getElementById("navbar")

bar.addEventListener("click", () => {
    aside.classList.toggle("aside")
})
icon.addEventListener("click", () => {
    about.classList.toggle("about")
})
icon.addEventListener("click", () => {
    service.classList.toggle("service")
})
icon.addEventListener("click", () => {
    skill.classList.toggle("skill")
})
icon.addEventListener("click", () => {
    navbar.classList.toggle("navbar")
})
icon.addEventListener("click", () => {
    aside.classList.toggle("aside2")
})
