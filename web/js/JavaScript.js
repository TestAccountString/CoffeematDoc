var modal = document.getElementsByClassName('myModal')[0];
var navBar = document.getElementsByClassName("navBar")[0];
var img = document.getElementsByClassName('myImg')[0];
var modalImg = document.getElementsByClassName("img01")[0];
var caption = document.getElementsByClassName("caption")[0];
var captionText = "Erstes Klassendiagramm";
console.log(img);
img.onclick = function() {
    navBar.style.zIndex = "0";
    modal.style.display = "block";
    modalImg.src = this.src;
    caption.innerHTML = captionText;
};

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
};