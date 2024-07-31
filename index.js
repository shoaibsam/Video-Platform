var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
var pTag = document.querySelector("#subscriber");
var btnEl = document.querySelector("#btn");
let commentLikesImgEl = document.querySelector("#commentLikesImg");
let commentLikesEl = document.querySelector("#commentLikes");

menuIcon.onclick = function () {
  sidebar.classList.toggle("small-sidebar");
  container.classList.toggle("large-container");
};

btnEl.addEventListener("click", () => {
  var currentSubscriber = parseInt(pTag.textContent);
  var newSubscriber = currentSubscriber + 1;
  pTag.textContent = newSubscriber + "K Subscribers";
});

commentLikesImgEl.addEventListener("click", () => {
  let currentLikes = parseInt(commentLikesEl.textContent);
  let newLikes = currentLikes + 1;
  commentLikesEl.textContent = newLikes;
});
