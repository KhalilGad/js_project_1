let rest = document.getElementById("rest");
let counter = document.getElementById("counter");
let add = document.querySelectorAll(".redT");
let dec = document.querySelectorAll(".dec");
let index = 0;
let count = 0;
//--------------------------- rest>
rest.addEventListener("click", () => {
  counter.innerHTML = 0;
  count = 0;
});
//------------------------------add>
add.forEach((el) => {
  el.addEventListener("click", () => {
    count++;
    counter.innerHTML = count;
  });
});
//-----------------------------decresc >
dec.forEach((el) => {
  el.addEventListener("click", () => {
    if (counter.innerHTML > 0) {
      count--;
      counter.innerHTML = count;
    } else {
      counter.innerHTML = 0;
    }
  });
});
//-----------------------------------slider>

let img = document.getElementById("img");
let left = document.getElementById("left");
let right = document.getElementById("rigth");

let imgs = ["./img/phone.jpg", "./img/watch.jpg", "./img/clothes.jpg"];
right.addEventListener("click", () => {
  if (index == 2) {
    index = 0;
  } else {
    index++;
  }
 img.src = imgs[index];
});
left.addEventListener("click", () => {
    if (index == 0) {
    index = 2;
    } else {
    index--;
    }
    img.src = imgs[index];
});
function slider() {
    if (index == 2) {
    index = 0;
    } else {
    index++;
    }
    img.src = imgs[index];
}
setInterval(slider, 3000);
//------------------------------------ flitter >
let category = document.querySelectorAll(".category span");
let images = document.querySelectorAll(".box_img");
category.forEach((item) => {
  item.addEventListener("click", (e) => {
    category.forEach((span) => {
      span.classList.remove("red");
      e.target.classList.add("red");
    });
  });
  item.addEventListener("click", imges);
});
function imges() {
  images.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((elment) => {
    elment.style.display = "block";
  });
}

//------------------------------------ nav>

let menu = document.getElementById("menu");
let action = document.getElementById("action");
menu.addEventListener("click", () => {
  menu.classList.toggle("is-active");
  action.classList.toggle("is-active");
});




