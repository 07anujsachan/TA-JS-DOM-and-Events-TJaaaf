function main() {
  let inputText = document.querySelector("#text");
  let root = document.querySelector("ul");

  let allTodos = JSON.parse(localStorage.getItem("todos")) || [];

  function handelInput(event) {
    let value = event.target.value;
    if (event.keyCode === 13 && value !== "") {
      let todo = {
        name: value,
        isDone: false,
      };
      allTodos.push(todo);
      event.target.value = "";
      handelSubmit();
      createButton();
    }
    setLocalStorage();
  }
  function handelDelete(event) {
    let id = event.target.dataset.id;
    allTodos.splice(id, 1);
    handelSubmit();
    setLocalStorage();
    createButton();
  }
  function handelToggle(event) {
    let id = event.target.dataset.id;
    allTodos[id].isDone = !allTodos[id].isDone;
    setLocalStorage();
    handelSubmit();
    createButton();
  }
  function handelSubmit() {
    root.innerHTML = "";
    allTodos.forEach((todo, index) => {
      let li = document.createElement("li");
      let div = document.createElement("div");
      div.className = "flex div";
      let input = document.createElement("input");
      input.type = "checkbox";
      input.addEventListener("click", handelToggle);
      input.setAttribute("data-id", index);
      input.checked = todo.isDone;

      let p = document.createElement("p");
      p.innerText = todo.name;
      let span = document.createElement("span");
      span.innerText = "X";
      span.setAttribute("data-id", index);
      span.addEventListener("click", handelDelete);
      div.append(input, p);
      li.append(div, span);
      root.append(li);
    });
  }

  function createButton() {
    let div = document.createElement("div");
    let btn1 = document.createElement("button");
    btn1.innerText = "All";
    let btn2 = document.createElement("button");
    btn2.innerText = "Active";
    btn2.addEventListener("click", () => {
      allTodos.filter((todo) => {
        console.log((todo.isDone = false));
        return (todo.isDone = false);
       
      });
      handelSubmit();
    });
    let btn3 = document.createElement("button");
    btn3.innerText = "Completed";
    let btn4 = document.createElement("button");
    btn4.innerText = "Clear Completed";
    div.append(btn1, btn2, btn3, btn4);
    root.append(div);
  }

  inputText.addEventListener("keyup", handelInput);

  function setLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(allTodos));
  }
}
main();
