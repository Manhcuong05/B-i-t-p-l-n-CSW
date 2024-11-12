const ellipsis = document.querySelector(".ellipsis");
const shortText = document.getElementById("short-text");
const fullText = document.getElementById("full-text");

ellipsis.addEventListener("click", (event) => {
fullText.style.display = "block";
shortText.style.display = "none";
event.stopPropagation();
});

document.addEventListener("click", (event) => {
if (!fullText.contains(event.target) && !ellipsis.contains(event.target)) {
fullText.style.display = "none";
shortText.style.display = "block";
}
});