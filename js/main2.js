
// -----------------------------------------nav about>
let menu = document.getElementById("menu");
let action = document.getElementById("action");
menu.addEventListener("click", () => {
  menu.classList.toggle("is-active");
  action.classList.toggle("is-active");
});

// ================================== validate >
// ------------------- select inputs>
let errorIs=false
let input_1=document.getElementById("input_1");
let input_2=document.getElementById("input_2");
let input_3=document.getElementById("input_3");
let input_4=document.getElementById("input_4");
let submit=document.getElementById("submit")
// console.log(input_1, input_2,input_3,input_4,submit);

// ----------------------- select paragraphs>
let p1=document.getElementById("error1");
let p2=document.getElementById("error2");
let p3=document.getElementById("error3");
let p4=document.getElementById("error4");
// console.log(p1,p2,p3,p4)

// ---------------------------- add events>

// ---------name>
input_1.addEventListener("input",names)
function names(){
  if(input_1.value == 0){
    input_1.classList.add("errors")
    p1.style.display="block"
    errorIs=true
  }else{
    input_1.classList.remove("errors")
    p1.style.display="none"
    errorIs=false
  }
}
// ----------subject>
input_3.addEventListener("input",subject)
function subject(){
  if(input_3.value == ""){
    input_3.classList.add("errors")
    p3.style.display="block"
    errorIs=true
  }else{
    input_3.classList.remove("errors")
    p3.style.display="none"
    errorIs=false
  }
}
// ----------email>
input_2.addEventListener("input",email)
function email(){
  if(input_2.value == "" || (input_2.value.includes("@")==false)){
    input_2.classList.add("errors")
    p2.style.display="block"
    errorIs=true
  }else{
    input_2.classList.remove("errors")
    p2.style.display="none"
    errorIs=false
  }
}
// ---------- text area>
input_4.addEventListener("input",text)
function text(){
  if(input_4.value==""){
    input_4.classList.add("errors")
    p4.style.display="block"
    errorIs=true
  }else{
    input_4.classList.remove("errors")
    p4.style.display="none"
    errorIs=false
  }
}
// -------- submit>
submit.addEventListener("click",(e)=>{
  names()
  email()
  subject()
  text()
  if(errorIs==true){
    e.preventDefault()
  }
})
//============================= active =======================>

// let mainList=document.getElementsByClassName("active_nav")
// let removeActive = () => {
//   mainList.forEach((element) => {
//     if (element.className.includes("red")) {
//       element.classList.remove("red");
//     }
//   });
// };
// let addActive = () => {
//   if (location.href.includes("index")) {
//     removeActive();
//     mainList[0].classList.add("red");
//   } else if (location.href.includes("about")) {
//     removeActive();
//     mainList[1].classList.add("red");
//   } else if (location.href.includes("contact")) {
//     removeActive();
//     mainList[2].classList.add("red");
// }
// };
// console.log(location.href)