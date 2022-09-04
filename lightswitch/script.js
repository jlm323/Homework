let buttonEl = document.querySelector("button");
let htmlEl = document.querySelector("html");
let h1El = document.querySelector("h1");
let theBulb = document.getElementById("lightBulb");
let ghost = document.getElementById("ghost");
let buttonColors = document.querySelector("on");

buttonEl.addEventListener('click', function(event) {
    
   
    if (theBulb.src.match("https://toppng.com/uploads/preview/light-bulb-on-off-png-11553940208oq66nq8jew.png")) {

			theBulb.src = "https://toppng.com/uploads/preview/light-bulb-png-transparent-light-bulb-115628766421gdl0skp2k.png";
		    htmlEl.style.backgroundColor = 'white';
            h1El.style.color = 'black';
            buttonEl.innerText = 'SWITCH OFF';
            ghost.style.visibility = 'hidden';


    } else if (theBulb.src.match("https://toppng.com/uploads/preview/light-bulb-png-transparent-light-bulb-115628766421gdl0skp2k.png")) {

            theBulb.src = "https://toppng.com/uploads/preview/light-bulb-on-off-png-11553940208oq66nq8jew.png";
            htmlEl.style.backgroundColor = 'black';
            h1El.style.color = 'white';
            buttonEl.innerText = 'SWITCH ON';
            ghost.style.visibility = 'visible';
    };
    
})