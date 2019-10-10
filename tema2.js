


//Bildene blir erstattet med funksjonen et klikk på knappene.
//document.getElementById ("id til bildene i HTML-filen") sin source (src) blir byttet
//ut med det som står etter likhetstegnet. 

//Knapp GHH

   
GHH.onclick = function () {
   document.getElementById("f0").src = "./img/Graham Historic House.jpg";
   document.getElementById("f1").src = "./img/GHH-1.jpg";
   document.getElementById("f2").src = "./img/GHH-2.jpg";
   document.getElementById("f3").src = "./img/GHH-3.jpg";
   document.getElementById("imageTitle").innerText = "Graham Historic House";
   
};


//Knapp HH

	
HH.onclick = function () {
	document.getElementById("f0").src = "./img/The Hammond House.jpg";
	document.getElementById("f1").src = "./img/HH.jpg";
	document.getElementById("f2").src = "./img/HH-2.jpg";
	document.getElementById("f3").src = "./img/HH-3.jpg";
	document.getElementById("imageTitle").innerText = "The Hammond House";
	
	
};

//Knapp W


W.onclick = function () {
	document.getElementById("f0").src = "./img/Westchester.jpg";
	document.getElementById("f1").src = "./img/W-1.jpg";
	document.getElementById("f2").src = "./img/W-2.jpg";
	document.getElementById("f3").src = "./img/W-3.jpg";
	document.getElementById("imageTitle").innerText = "Westchester";
	
	
};



// Knapp AWH
AWH.onclick = function () {
	document.getElementById("f0").src = "./img/Adelaide Wilcox House.jpg";
	document.getElementById("f1").src = "./img/AW-1.jpg";
	document.getElementById("f2").src = "./img/AW-2.jpg";
	document.getElementById("f3").src = "./img/AW-3.jpg";	
	document.getElementById("imageTitle").innerText = "Adelaide Wilcox House";
};
// Knapp B
B.onclick = function (){
	document.getElementById("f0").src = "./img/Broomhill-Manor.jpg";
	document.getElementById("f1").src = "./img/B-1.jpg";
	document.getElementById("f2").src = "./img/B-2.jpg";
	document.getElementById("f3").src = "./img/B-3.jpg";
	document.getElementById("imageTitle").innerText = "Broomhill-Manor";
}
// Knapp G
G.onclick = function (){
	document.getElementById("f0").src = "./img/Galveston.jpg";
	document.getElementById("f1").src = "./img/G-1.jpg";
	document.getElementById("f2").src = "./img/G-2.jpg";
	document.getElementById("f3").src = "./img/G-3.jpg";
	document.getElementById("imageTitle").innerText = "Galveston";
	
}
 
 // Slideshow castles
 // i står for index. Bilde er lik array []. 
 //interval er tiden som går før neste bilde kommer.
 //clearInterval nullstiller intervall når et intervall er over. 
 
let i = 0; 
let bilder = [];
let time = 2000;
let interval = 0;

bilder[0] = "url(./img/castle1.jpg)";
bilder[1] = "url(./img/castle2.jpg)";
bilder[2] = "url(./img/castle3.jpg)";
bilder[3] = "url(./img/castle4.jpg)";



function slideshow() {
	document.getElementById("slideshow").style.backgroundImage = bilder [i];
	
	if (i < bilder.length - 1) {
		i++;		
	}
	else { i = 0;
	}
	clearInterval(interval);
	interval = setInterval("slideshow()", time);	
	
}



 
 
//---overlay triks-
function move(evt){
    if (evt.clientX > innerWidth/3.7){
        house.style.left = evt.clientX + "px";
    }  
}

document.addEventListener("mousemove", move);