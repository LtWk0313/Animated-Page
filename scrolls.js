/* Scaffolding Basic Code*/
gsap.registerPlugin(ScrollToPlugin);
let navOffset = document.querySelector("nav").offsetHeight+10;
console.log(navOffset);

gsap.to(window,
    {scrollTo:{y:0}, duration:.1, ease:"power2.inOut"}
);

//* create a list of sections for later use
let mySections = document.querySelectorAll("main>section");
console.log(mySections);

//*make the first nav element active, when I land on the page
let activeSection = document.querySelector("nav a:nth-child(1)");
console.log(activeSection);
activeSection.classList.add("active");

window.addEventListener("scroll",scrollAction);

function scrollAction(e){
    mySections.forEach(sect => 
        //* find section top, section bottom, and y position
        { let secTopPos = sect.offsetTop-navOffset-60; //*moving the Page down the nav by 70px
          let secBottomPos = secTopPos+sect.offsetHeight; //*how tall the section is
          let windowPos = window.scrollY;

        //* find out what section id you are looking at
          let secId = sect.getAttribute("id");
        //* find out what 
          let navEl = document.querySelector(`nav a[href='#${secId}']`);
          console.log(navEl);

        //*check what section is currenly visible in the viewport
        if (windowPos >= secTopPos && windowPos<secBottomPos){
            console.log(secId,"is active");
            navEl.classList.add("active"); 
            fadeinsections(sect);
        }
        else {
            navEl.classList.remove("active");
        }
      
        })
}

let navElements = document.querySelectorAll("nav a[href^='#']");
navElements.forEach(el => 
  el.addEventListener("click", navClickAction)
  );

function navClickAction(e){
    e.preventDefault();
    let hrefAttr = e.target.getAttribute("href");
    console.log(document.querySelector(hrefAttr).offsetTop);
    let scrollToVal =document.querySelector(hrefAttr).offsetTop -navOffset;
    gsap.to(window, 
        {scrollTo:{y: scrollToVal}, duration: 1, ease:"circ.out"}
    );
}

/*Fade-In Animation to all*/
let header= document.querySelector("#navbar");
let intro=document.querySelector("#intro");

fadein();

function fadein(e){
    let CameraRoll1 = gsap.timeline({delay:2});
    console.log(header);
    console.log(intro);
    CameraRoll1.to(header,{
    opacity: 1,    
    duration: 2,
    delay:0.75, 
    ease: "rough({template:none.out, strength:1, points:20, taper:none, randomize:true, clamp:false})"
    })
    .to(intro,{
    opacity: 1,    
    duration: 2, 
    delay:0.75,
    ease: "rough({template:none.out, strength:1, points:20, taper:none, randomize:true, clamp:false})"       
    })
}

let div=document.querySelectorAll("main>section");

function fadeinsections(section){
  let CameraRoll2 = gsap.timeline();
  console.log(section);
  CameraRoll2.to(section,{
    opacity: 1,    
    duration: 2, 
    delay: 0.75,
    ease: "rough({template:none.out, strength:1, points:20, taper:none, randomize:true, clamp:false})"
    })
}