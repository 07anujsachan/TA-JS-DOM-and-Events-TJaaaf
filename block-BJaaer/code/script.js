let form = document.querySelector("form");
let root = document.querySelector(".body");

function handelSubmit(event) {
  event.preventDefault();
  let div = document.createElement("div");
  div.className = "div container2";
  let name = document.createElement("h1");
  name.classList.add = " username";
  name.innerText = ` Hello ${form.elements.text.value}`;
  let email = document.createElement("h2");
  email.className = " userinfo";
  email.innerText = `Email: ${form.elements.email.value}`;
  let gender = document.createElement("h2");
  gender.className = " userinfo";
  gender.innerText = `gender: ${form.elements.gender.value}`;
  let color = document.createElement("h2");
  color.className = " userinfo";
  color.innerText = `Color: ${form.elements.color.value}`;
  let range = document.createElement("h2");
  range.className = " userinfo";
  range.innerText = `Rating: ${form.elements.range.value}`;
  let drone = document.createElement("h2");
  drone.className = " userinfo";
  drone.innerText = `Book Genre: ${form.elements.drone.value}`;
  let terms = document.createElement("h2");
  terms.className = " userinfo";
  terms.innerText = `👉 You agree to Terms and Conditions`;
  let btn = document.createElement('button')
  btn.className = 'btn'
  btn.innerText ='close'
  btn.addEventListener("click", () => {
    div.style.visibility = "hidden";
  });

  div.append(btn, name, email, gender, color, range, drone, terms);
  root.append(div);
}

form.addEventListener("submit", handelSubmit);
