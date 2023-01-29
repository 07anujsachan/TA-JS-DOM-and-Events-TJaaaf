let ul = document.querySelector("ul");
ul.className = "container";
let div = document.querySelector(".tags");
let activeHouse = "";
let allPeople = got.houses.reduce((acc, cv) => {
  acc = acc.concat(cv.people);
  return acc;
}, []);
let allTags = got.houses.map((house) => house.name);
let search = document.querySelector(".search");

function createUi(data = []) {
  ul.innerHTML = "";
  console.log(data);
  data.forEach((people) => {
    let li = document.createElement("li");
    li.className = "house";
    let div = document.createElement("div");
    div.className = "div flex ";
    let img = document.createElement("img");
    img.className = "image";
    img.src = people.image;
    let h2 = document.createElement("h2");
    h2.className = " h2";
    h2.innerText = people.name;
    let para = document.createElement("p");
    para.className = "para";
    para.innerText = people.description;
    let btn = document.createElement("button");
    btn.className = "button";
    btn.innerText = "Learn More!";
    div.append(img, h2);
    li.append(div, para, btn);
    ul.append(li);
  });
}

function createTags(tags = []) {
  div.innerHTML = "";
  tags.forEach((tag) => {
    let li = document.createElement("li");
    li.className = "tags-btn";
    li.innerText = tag;
    li.addEventListener("click", () => {
      activeHouse = tag;
      let peopleOfHouse = got.houses.find((house) => house.name === tag);
      console.log(peopleOfHouse.people);
      createUi(peopleOfHouse.people);
      createTags(allTags);
    });
    div.append(li);
  });
}

function handelSearch(event) {
  let searchText = event.target.value;
  let filterPeople = allPeople.filter((p) =>
    p.name.toLowerCase().includes(searchText.toLowerCase())
  );
  createUi(filterPeople);
}

search.addEventListener("input", handelSearch);
createUi(allPeople);
createTags(allTags);
