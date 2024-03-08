//Green Rectangle
let greenrectangle = document.querySelector("#greenrectangle");
let rectbutton = document.querySelector("#rectbutton");
rectbutton.addEventListener('click',down);

function down(event){
    let CameraRoll1 = gsap.timeline();
    console.log(greenrectangle);
    CameraRoll1.fromTo(greenrectangle,
    {x: 0,
    backgroundColor: '#AEF359',
    opacity: 1, 
    width: "200px",
    height: "100px"
    },
    {x: 50,            // type left: "50px";      //Extra: cannot type background-color 
     backgroundColor: '#808000',
     opacity: 0.6,
     width: "150px",
     height: "150px",
     duration:1,
     ease: "steps(10)"
    })
}

//Image 
let airplane = document.querySelector("#airplaneimg");
let imgbutton = document.querySelector("#imgbutton");
imgbutton.addEventListener('click', fly);

function fly(e){
    let CameraRoll3 = gsap.timeline();
    console.log(airplane);
    CameraRoll3.fromTo(airplane,
    { x: 100,
      opacity: 0
    },
    {x: 0,
     opacity: 1,
     duration: 1.5,
     ease: "elastic.inOut(1,0.3)"
    })
}

//Blue Circle 
let bluecircle = document.querySelector("#bluecircle");
let ballbutton = document.querySelector("#ballbutton");
ballbutton.addEventListener('click', throwing);

function throwing(e){
    let CameraRoll2 = gsap.timeline();
    console.log(bluecircle);
    CameraRoll2.to(bluecircle,{
    x:1280,
    y:100,
    backgroundColor: '#9FB9E2',
    duration: 2,
    ease:"bounce.in",
    })
    CameraRoll2.to(bluecircle,{
    x:0,
    y:0,
    delay:1,
    backgroundColor: '#0072A0',
    duration: 2,
    ease:"bounce.out",
    })
}

