var youtube = document.getElementById("youtube");		
var source = "images/thumbnail.webp";
var image = new Image();

image.src = source;
image.addEventListener("load", function() {
	youtube.appendChild(image);
});
		
youtube.addEventListener( "click", function() {
  var iframe = document.createElement( "iframe" );
	iframe.setAttribute("frameborder", "0");
	iframe.setAttribute("allowfullscreen", "");
	iframe.setAttribute("src", "https://www.youtube.com/embed/RQCn8hg-6zg?autoplay=1");
  this.innerHTML = "";
	this.appendChild(iframe);
});