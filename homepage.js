const heartIcon = document.querySelector(".heart-icon");
const numberOfLikesText = document.querySelector(".number-of-likes");
let numberOfLikes = 0;

heartIcon.addEventListener("click", showFilledIcon);

function showFilledIcon() {
  heartIcon.src = "heart-icon-filled.svg";
  numberOfLikes = numberOfLikes + 1;
  numberOfLikesText.innerText = numberOfLikes + " likes";
}
