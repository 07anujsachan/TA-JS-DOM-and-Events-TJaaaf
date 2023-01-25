let form = document.querySelector("form");
let userName = document.querySelector(".username");
let fullname = document.querySelector(".name");
let email = document.querySelector(".email");
let number = document.querySelector(".number");
let password = document.querySelector(".password");

function handelSubmit(event) {
  event.preventDefault();

  let userNameElm = form.elements.Username.value;
  if (userNameElm.length < 4) {
    let p = document.createElement("p");
    p.innerText = "Username can not be less than 4 characters";
    p.style.color = "red";
    p.style.textAlign = "center";
    userName.append(p);
  }
  let nameElm = form.elements.name.value;
  if ((nameElm.type = number)) {
    let p = document.createElement("p");
    p.innerText = "You can't use number in the name field";
    p.style.color = "red";
    p.style.textAlign = "center";
    fullname.append(p);
  }
  let emailElm = form.elements.email.value;
  if (!emailElm.includes("@") || emailElm.length < 6) {
    let p = document.createElement("p");
    p.innerText = "Not a valid email";
    p.style.color = "red";
    p.style.textAlign = "center";
    email.append(p);
  }
  let numberElm = form.elements.number.value;
  if (numberElm.type !== number ||  numberElm.length < 6) {
    let p = document.createElement("p");
    p.innerText = "Phone number can only contain numbers";
    p.style.color = "red";
    p.style.textAlign = "center";
    number.append(p);
  } else{
   alert('User Added Successfully!')
  }
  
}

form.addEventListener("submit", handelSubmit);
