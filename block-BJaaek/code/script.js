function randomColourGenerator() {
  var letters = "0123456789ABCDEF";
  var color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  console.log(color);
  return color 
}


let firstBox = document.querySelector('.first')

let secondBox = document.querySelector('.second')


firstBox.addEventListener('click' , ()=>{
    firstBox.style.backgroundColor = randomColourGenerator()
})

secondBox.addEventListener('mousemove' , ()=>{
    secondBox.style.backgroundColor = randomColourGenerator()
})

