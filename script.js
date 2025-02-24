// Events: practice-1
document.getElementById("btn").addEventListener("click", function () {
  const titleText = document.getElementById("title");
  titleText.innerText = "Wow! you just clicked Me.";
});

//practice-2
function redColor() {
  document.body.style.backgroundColor = "red";
}

// practice-3
document.getElementById("update-btn").addEventListener("click", function () {
  const inputField = document.getElementById("input-name");
  const inputText = inputField.value;
  const name = document.getElementById("name-field");
  name.innerText = inputText;
});

//practice-4 (comment-box)
document.getElementById("comment-btn").addEventListener("click", function () {
  // get comment box input
  const commentBox = document.getElementById("comment-input-text");

  // get  comment box input text
  const newComment = commentBox.value;

  // this is comment box parent element
  const commentContainer = document.getElementById("comment-container");

  // create a new p tag and set the text inside that p tag
  const commentelement = document.createElement("p");
  commentelement.innerText = newComment;

  // add class name inside that p tag
  commentelement.classList.add("comment");

  // put that p tag and text inside that parent node
  commentContainer.appendChild(commentelement);

  // empty comment box input field
  commentBox.value = ""
});
