
//select ul
const navBar = document.getElementById("navbar__list");
//select sections class and change to an array
const sections = document.querySelectorAll('section');
const sectionsArr = Array.from(sections);
//loop over each section
//append li items & link to corresponding section
sectionsArr.forEach((section, i) => {
  const link = document.createElement("a");
  link.href = `#${section.id}`;
  const text = document.createTextNode(`Section ${i + 1}`);
  link.appendChild(text);
  const li = document.createElement("li");
  li.appendChild(link);
  navBar.appendChild(li);
});

//check if section is in view port
function isInViewPort(element){
const rect = element.getBoundingClientRect();
const elementTop = rect.top, elementBottom = rect.bottom;
const windowHeight = $(window).height();
if(window.isInViewport) {
    elementTop -= window.isInViewport.offsetTop;
    elementBottom -= window.isInViewport.offsetTop;
    windowHeight = window.isInViewport.height;
}
const inView = (elementTop >= 0 && elementBottom <= windowHeight);
}

//add active class to sections in viewport
 function setActiveClass(){
    for (let i=0; i < sections.length; i++){
        if (isInViewport(sections[i])){
            sections[i].classList.add("your-active-class");
        }else{
            sections[i].classList.remove("your-active-class");
        }
    }
}

//smooth scrolling to sections
const links = document.querySelectorAll(".page__header ul a");
for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

//active state function call
window.onscroll = ()=>{
  setActiveClass();
}

