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
  commentBox.value = "";
});

// practice-5 (delete secret message)
document
  .getElementById("confirm-input")
  .addEventListener("keyup", function (event) {
    const inputConfirmText = event.target.value;
    const deleteBtn = document.getElementById("delete-btn");
    const secretMessage = document.getElementById("secret-message");

    if (inputConfirmText === "CONFIRM") {
      deleteBtn.removeAttribute("disabled");
    } else {
      deleteBtn.setAttribute("disabled", true);
    }
    deleteBtn.addEventListener("click", function () {
      secretMessage.style.visibility = "hidden";
    });
  });

// practice-6 (todo- list)

// using for loop:
// const lists = document.getElementsByClassName("task");
// for(const list of lists){
//   list.addEventListener('click',
//     function(event){
//       event.target.parentNode.removeChild(event.target)
//     }
//   )
// }

document
  .getElementById("task-container")
  .addEventListener("click", function (event) {
    event.target.parentNode.removeChild(event.target);
  });

document.getElementById("add-btn").addEventListener("click", function () {
  const taskContainer = document.getElementById("task-container");
  const newLi = document.createElement("li");
  newLi.innerText = `task-${taskContainer.children.length + 1}`;

  newLi.classList.add("task");

  taskContainer.appendChild(newLi);
});

// practice-7(toggle-btn):
// default text
document.getElementById("light-text").style.display = "none";

// dark mode toggle
document.getElementById("dark-btn").addEventListener("click", function () {
  document.getElementById("dark-text").style.display = "block";
  document.getElementById("light-text").style.display = "none";
});

// light mode toggle
document.getElementById("light-btn").addEventListener("click", function () {
  document.getElementById("dark-text").style.display = "none";
  document.getElementById("light-text").style.display = "block";
});
