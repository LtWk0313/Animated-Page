let hamburger= document.querySelector('#hammy');
console.log(hamburger);
hamburger.addEventListener("click",hamburgerAction);
let instruction= document.querySelector('#instruction');
console.log(instruction);
instruction.addEventListener("click",textAction);

function hamburgerAction(e){
    console.log(e.target);
    if(e.target.getAttribute("src")=="Lab01/Hamburger_Menu/menu_bw_static.gif"){
        console.log("change to animated");
        instruction.innerText = "Click Here to Reset";
        e.target.setAttribute("src","Lab01/GIF_3_Once.gif");
    }
    else {
        console.log("change to still button");
        e.target.setAttribute("src","Lab01/Hamburger_Menu/menu_bw_static.gif");
    }
}

function textAction(e){
    console.log(e.target);
    instruction.innerText = "Click Menu to Animate";
    hamburger.setAttribute("src","Lab01/Hamburger_Menu/menu_bw_static.gif");   
}