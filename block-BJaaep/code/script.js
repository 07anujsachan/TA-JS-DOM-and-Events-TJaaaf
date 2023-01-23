let without = document.querySelectorAll(".box");

let withEvent = document.querySelector(".boxes2");

//with event delegation

function flipWithEventDelegation(event) {
  console.log(event);
  let number = event.target.dataset.text;
  event.target.innerText = number;
  console.log(number);
  event.target.style.transform = "rotateY(0deg)";
  setTimeout(() => {
    console.log(event, "hello");
    event.target.style.transform = "rotateX(00deg)";
    event.target.innerText = "";
  }, 5000);
}
withEvent.addEventListener("click", flipWithEventDelegation);

//     without event delegation

function flipWithoutEventDelegation(event) {
  console.log(event);
  let number = event.target.dataset.text;
  event.target.innerText = number;
  console.log(number);
  event.target.style.transform = "rotateY(0deg)";
  setTimeout(() => {
    console.log(event, "hello");
    event.target.style.transform = "rotateX(00deg)";
    event.target.innerText = "";
  }, 5000);
  
}

without.forEach((box) => {
  box.addEventListener("click", flipWithoutEventDelegation);
});
