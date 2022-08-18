 const task = document.querySelector("#task");
const body = document.querySelector("body");
const allDiv = document.querySelector(".allDiv");
let red = document.querySelector(".red");
let yellow = document.querySelector(".yellow");
let blue = document.querySelector(".blue");
let black = document.querySelector(".black");
const redDiv = document.querySelector(".redDiv");
const yellowDiv = document.querySelector(".yellowDiv");
const blueDiv = document.querySelector(".blueDiv");
const blackDiv = document.querySelector(".blackDiv");
const tick = document.querySelector(".tick");
const tickDiv = document.querySelector(".tickDiv");

task.addEventListener("click", function () {
  let mainDiv = document.createElement("div");
  mainDiv.setAttribute("class", "center");

  let textarea = document.createElement("textarea");
  textarea.setAttribute("type", "text");
  textarea.setAttribute("id", "input");
  textarea.setAttribute("placeholder", "Enter your task!");
  textarea.setAttribute("cols", "30");
  textarea.setAttribute("rows", "9");

  let btn = document.createElement("button");
  btn.setAttribute("id", "btn");
  btn.innerText = "Done";

  let innerDiv = document.createElement("div");
  innerDiv.setAttribute("id", "colors");

  let redDiv = document.createElement("div");
  redDiv.setAttribute("class", "red1");

  let yellowDiv = document.createElement("div");
  yellowDiv.setAttribute("class", "yellow1");

  let blueDiv = document.createElement("div");
  blueDiv.setAttribute("class", "blue1");

  let blackDiv = document.createElement("div");
  blackDiv.setAttribute("class", "black1");

  let cross = document.createElement("i");
  cross.setAttribute("class", "fa-solid fa-xmark cross");

  innerDiv.append(redDiv, yellowDiv, blueDiv, blackDiv);
  mainDiv.append(textarea, btn, innerDiv, cross);
  body.append(mainDiv);

  cross.addEventListener("click", function () {
    this.parentElement.remove();
  });


  btn.addEventListener("click", function () {
    if (textarea.value.length > 0) {
      let todoList = document.createElement("div");
      todoList.setAttribute("class", "todoList");

      let div1 = document.createElement("div");
      div1.setAttribute("class", "div1");
      div1.style.borderTop = "15px solid red";

      let input1 = document.createElement("input");
      input1.setAttribute("type", "text");
      input1.setAttribute("id", "input");

      let icons = document.createElement("div");
      icons.setAttribute("class", "icons");

      let leftIcons = document.createElement("div");
      leftIcons.setAttribute("class", "leftIcons");

      let check = document.createElement("i");
      check.setAttribute("class", "fa-solid fa-check check");
      check.style.display = "none";

      let del = document.createElement("i");
      del.setAttribute("class", "fa-solid fa-trash-can del");
      del.style.display = "none";

      let edit = document.createElement("i");
      edit.setAttribute("class", "fa-solid fa-pen edit");
      edit.style.display = "none";

      let coloredDiv = document.createElement("div");
      coloredDiv.setAttribute("class", "coloredDiv");
      coloredDiv.style.display = "none";
      coloredDiv.style.backgroundColor = "red";

      let rightIcons = document.createElement("div");
      rightIcons.setAttribute("class", "rightIcons");

      let lock = document.createElement("i");
      lock.setAttribute("class", "fa-solid fa-lock lock");

      let unlock = document.createElement("i");
      unlock.setAttribute("class", "fa-solid fa-lock-open unlock");

      leftIcons.append(check, del, edit, coloredDiv);
      rightIcons.append(lock);

      icons.append(leftIcons, rightIcons);

      div1.append(input1, icons);

      todoList.append(div1);

      body.append(todoList);
      this.parentElement.remove();
      input1.value = textarea.value;
      input1.setAttribute("readonly", "readonly");

      lock.addEventListener("click", function () {
        this.replaceWith(unlock);
        check.style.display = "inline-block";
        del.style.display = "inline-block";
        edit.style.display = "inline-block";
        coloredDiv.style.display = "inline-block";
      });

      unlock.addEventListener("click", function () {
        this.replaceWith(lock);
        check.style.display = "none";
        del.style.display = "none";
        edit.style.display = "none";
        coloredDiv.style.display = "none";
        input1.setAttribute("readonly", "readonly");
      });

      del.addEventListener("click", function () {
        this.parentElement.parentElement.parentElement.remove();
      });

      edit.addEventListener("click", function () {
        input1.removeAttribute("readonly");
        this.style.color = "pink";
      });

      check.addEventListener("click", function () {
        this.parentElement.parentElement.parentElement.style.display = "none";
      });

      tick.addEventListener("click", function () {
        check.parentElement.parentElement.parentElement.style.display = "inline-block";
      });

      coloredDiv.addEventListener("click", function () {
        if (this.style.backgroundColor === "red") {
          this.style.backgroundColor = "yellow";
          div1.style.borderTop = "15px solid yellow";
        } else if (this.style.backgroundColor === "yellow") {
          this.style.backgroundColor = "blue";
          div1.style.borderTop = "15px solid blue";
        } else if (this.style.backgroundColor === "blue") {
          this.style.backgroundColor = "black";
          div1.style.borderTop = "15px solid black";
        } else {
          this.style.backgroundColor = "red";
          div1.style.borderTop = "15px solid red";
        }
      });

      red.addEventListener("click", function () {
        if (div1.style.borderTop !== "15px solid red") {
          redDiv.append(div1);
        }
      });

      yellow.addEventListener("click", function () {
        if (div1.style.borderTop === "15px solid yellow") {
          yellowDiv.append(div1);
        }
      });

      blue.addEventListener("click", function () {
        if (div1.style.borderTop === "15px solid blue") {
          blueDiv.append(div1);
        }
      });

      black.addEventListener("click", function () {
        if (div1.style.borderTop === "15px solid black") {
          blackDiv.append(div1);
        }
      });
    }
  });
});
