/***********************************************
* Cross browser Marquee II- © Dynamic Drive (www.dynamicdrive.com)
* This notice MUST stay intact for legal use
* Visit http://www.dynamicdrive.com/ for this script and 100s more.
***********************************************/
 
var delayb4scroll=1 //Specify initial delay before marquee starts to scroll on page (2000=2 seconds)
var marqueespeed=1 //Specify marquee scroll speed (larger is faster 1-10)
var pauseit=1 //Pause marquee onMousever (0=no. 1=yes)?
 
////NO NEED TO EDIT BELOW THIS LINE////////////
 
var copyspeed=marqueespeed
var pausespeed=(pauseit==0)? copyspeed: 0
var actualheight=''
 
function scrollmarquee(){
if (parseInt(cross_marquee.style.top)>(actualheight*(-1)+8))
cross_marquee.style.top=parseInt(cross_marquee.style.top)-copyspeed+"px"
else
cross_marquee.style.top=parseInt(marqueeheight)+8+"px"
}

function scrollmarquee2(){
if (parseInt(cross_marquee2.style.top)>(actualheight*(-1)+8))
cross_marquee2.style.top=parseInt(cross_marquee2.style.top)-copyspeed+"px"
else
cross_marquee2.style.top=parseInt(marqueeheight)+8+"px"
}

 
	function initializemarquee(){
		cross_marquee=document.getElementById("vmarquee")
		cross_marquee.style.top=0
		marqueeheight=document.getElementById("marqueecontainer").offsetHeight
		actualheight=cross_marquee.offsetHeight
		if (window.opera || navigator.userAgent.indexOf("Netscape/7")!=-1){ //if Opera or Netscape 7x, add scrollbars to scroll and exit
		cross_marquee.style.height=marqueeheight+"px"
		cross_marquee.style.overflow="scroll"
		return
		}
		
		setTimeout('lefttime=setInterval("scrollmarquee()",40)', delayb4scroll)
	}


  function initializemarquee2(){
	cross_marquee2=document.getElementById("vmarquee2")
	cross_marquee2.style.top=0
	marqueeheight=document.getElementById("marqueecontainer2").offsetHeight
	actualheight=cross_marquee2.offsetHeight
	if (window.opera || navigator.userAgent.indexOf("Netscape/7")!=-1){ 
	 cross_marquee2.style.height=marqueeheight+"px"
	 cross_marquee2.style.overflow="scroll"
	 return
	}
	
	setTimeout('lefttime=setInterval("scrollmarquee2()",30)', delayb4scroll)
  } 
  
  
  
if (window.addEventListener){
window.addEventListener("load", initializemarquee, false);
window.addEventListener("load", initializemarquee2, false);
} else if (window.attachEvent){
 window.attachEvent("onload", initializemarquee);
 window.attachEvent("onload", initializemarquee2);
} else if (document.getElementById){
 window.onload=initializemarquee;
 window.onload=initializemarquee2;
}
