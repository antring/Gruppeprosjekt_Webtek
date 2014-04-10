
var num=0;
img1 = new Image ();
img1.src = "artwork/goat1.jpg";
img2 = new Image ();
img2.src = "artwork/goat2.jpg";
img3 = new Image ();
img3.src = "artwork/goat3.jpg";
img4 = new Image ();
img4.src = "artwork/goat4.png";
img5 = new Image ();
img5.src = "artwork/goat5.jpeg";

window.onload=slideshowUp();

function slideshowUp()
{
num=num+1;
if (num===6)
{num=1;}
document.getElementById("slideshow2").src=eval("img"+num+".src");
}

function slideshowBack()
{
num=num-1;
if (num===0)
{num=5;}
document.getElementById("slideshow2").src=eval("img"+num+".src");
}



