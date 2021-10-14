const btnChats = document.getElementById("buttonChats");
const mainSectionContainer = document.getElementById("chat");

btnChats.addEventListener("click", (event) => {
  if (mainSectionContainer.style.display === "none") {
    mainSectionContainer.style.display = "block";
  } else {
    mainSectionContainer.style.display = "none";
  }
});
