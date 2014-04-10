
var num=0;
img1 = new Image ();
img1.src = "artwork/frozen1.jpg";
img2 = new Image ();
img2.src = "artwork/frozen2.jpg";
img3 = new Image ();
img3.src = "artwork/frozen3.jpg";
img4 = new Image ();
img4.src = "artwork/frozen4.jpg";
window.onload=slideshowUp;

function slideshowUp()
{
num=num+1;
if (num===5)
{num=1;}
document.getElementById("slideshow1").src=eval("img"+num+".src");
}

function slideshowBack()
{
num=num-1;
if (num===0)
{num=4;}
document.getElementById("slideshow1").src=eval("img"+num+".src");
}



