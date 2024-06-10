const modeBtn = document.querySelector("#mode__btn");
const html = document.querySelector("html");

let modeTheme = localStorage.getItem("mode");
if (modeTheme) {
  html.setAttribute("data-theme", "forest");
  modeBtn.checked = false;
} else {
  html.setAttribute("data-theme", "cupcake");
  modeBtn.checked = true;
}

// butonlarni tinglymiz
modeBtn.addEventListener("click", () => {
  console.log("salom");
  if (html.getAttribute("data-theme") === "cupcake") {
    html.setAttribute("data-theme", "forest");
    localStorage.setItem("mode", "forest");
  } else {
    html.setAttribute("data-theme", "cupcake");
    localStorage.setItem("mode", "");
  }
});
