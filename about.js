function cdsToggle() {
  let dots = document.getElementById("cds-dots");
  let moreText = document.getElementById("cds-more");
  let btnText = document.getElementById("cdsBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
function agmToggle() {
  let dots = document.getElementById("agm-dots");
  let moreText = document.getElementById("agm-more");
  let btnText = document.getElementById("agmBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}