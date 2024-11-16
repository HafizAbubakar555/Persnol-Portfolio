function myFunction(x) {
    x.classList.toggle("change");
  }



const navBtn = document.querySelector("#nav-btn");
const mainNav = document.querySelector("#navbar");
let width = true;
navBtn.addEventListener("click", () => {
  if (width === true) {
    mainNav.style.width = "350px";
    navBtn.style.position="fixed";
    navBtn.style.left="320px";

    width = false;
  } else {
    width = true;
    mainNav.style.width = "0px";
    navBtn.style.position="absolute";
    navBtn.style.left="90%";
  }
});



let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll(".link");


window.onscroll = ()=>{
  sections.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if(top >= offset && top < offset+height){
      navlinks.forEach(links =>{
      })
    }
  })
}
