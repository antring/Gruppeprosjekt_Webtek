
var num=0;
img1 = new Image ();
img1.src = "artwork/vikings_img1.jpg";
img2 = new Image ();
img2.src = "artwork/vikings_img4.jpg";
img3 = new Image ();
img3.src = "artwork/vikings_img5.jpg";
img4 = new Image ();
img4.src = "artwork/vikings_img6.jpg";
img5 = new Image ();
img5.src = "artwork/vikings_img7.jpg";

window.onload=slideshowUp;

function slideshowUp()
{
num=num+1;
if (num===6)
{num=1;}
document.getElementById("slideshow1").src=eval("img"+num+".src");
}

function slideshowBack()
{
num=num-1;
if (num===0)
{num=5;}
document.getElementById("slideshow1").src=eval("img"+num+".src");
}



