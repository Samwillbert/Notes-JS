let title = document.getElementById("title");
let content = document.getElementById("content");
let add = document.getElementById("add");

let row = document.getElementById("row");

const addText = () => {
  if (title.value === "" && content.value === "") {
    alert("You must write something...");
  } else {
    let col = document.createElement("div");
    col.className = "col1";

    row.appendChild(col);

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    col.appendChild(cardBody);

    console.log(cardBody);

    let cardTitle = document.createElement("h5");
    cardTitle.className = "cardTitle";
    cardTitle.innerText = title.value;

    cardBody.appendChild(cardTitle);

    let cardText = document.createElement("p");
    cardText.className = "cardText";
    cardText.innerText = content.value;
    cardBody.appendChild(cardText);

    let btn = document.createElement("button");
    btn.innerText = "delete";
    cardBody.appendChild(btn);

    btn.addEventListener("click", () => {
      cardBody.parentElement.remove();
    });
  }

  title.value = "";
  content.value = "";
};
