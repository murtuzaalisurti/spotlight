document.querySelector(".img_contain").addEventListener("mouseover", () => {
    document.querySelector(".container").classList.add("spotlight");
})
document.querySelector(".img_contain").addEventListener("mouseleave", () => {
    document.querySelector(".container").classList.remove("spotlight");
})