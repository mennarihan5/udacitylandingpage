
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

// Get the position of the sections in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
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

