const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");
const videoComments = document.querySelector(".video__comments ul");
const videoCommentArray = videoComments.querySelectorAll("#comment-text");
const deleteBtns = videoComments.querySelectorAll("#delete-comment");

const addComment = (text, id) => {
  const newComment = document.createElement("li");
  newComment.className = "video__comment";
  newComment.dataset.id = id;
  const icon = document.createElement("i");
  icon.className = "fas fa-comment";
  const newDiv = document.createElement("div");
  newDiv.className = "video__comment-text";
  const span = document.createElement("span");
  span.id = "comment-text";
  span.innerText = ` ${text}`;
  const h6 = document.createElement("h6");
  h6.innerText = "❌";
  h6.addEventListener("click", handleClick);
  span.addEventListener("mouseover", handleMouse);
  newDiv.appendChild(span);
  newDiv.appendChild(h6);
  newComment.appendChild(icon);
  newComment.appendChild(newDiv);
  videoComments.prepend(newComment); //가장 뒤에 추가
};

const handleSubmit = async (event) => {
  event.preventDefault();
  const textarea = form.querySelector("textarea");
  const text = textarea.value;
  const videoId = videoContainer.dataset.id;
  if (text === "") {
    return;
  }
  const response = await fetch(`/api/videos/${videoId}/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  if (response.status === 201) {
    textarea.value = "";
    const { newCommentId } = await response.json();
    addComment(text, newCommentId);
  }
};

if (form) {
  form.addEventListener("submit", handleSubmit);
}

const handleClick = async (e) => {
  const parentComment = e.target.parentElement.parentElement;
  const commentId = parentComment.dataset.id;
  const response = await fetch(`/api/videos/${commentId}/comment`, {
    method: "delete",
  });
  if (response.status === 200) {
    videoComments.removeChild(parentComment);
  }
};

const handleMouse = (e) => {
  const commentDiv = e.target.parentElement;
  const delBtn = commentDiv.childNodes[1];
  delBtn.className = "showing";
  setTimeout(() => {
    delBtn.className = "";
  }, 3000);
};

videoCommentArray.forEach((comment) => {
  comment.addEventListener("mouseover", handleMouse);
});

if (deleteBtns) {
  deleteBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener("mouseover", (e) => {
      e.target.className = "showing";
      setTimeout(() => {
        e.target.className = "";
      }, 3000);
    });
    deleteBtn.addEventListener("click", handleClick);
  });
}
