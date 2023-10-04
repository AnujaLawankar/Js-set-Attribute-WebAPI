var mainid = document.getElementById("main");

var site11 = document.querySelector(".site1");

var site12 = document.querySelector(".site2");


var site13 = document.querySelector(".site3");

var h4all = document.querySelectorAll("h4");

var h1value = document.querySelector("h1");

site11.children[0].textContent = "Site1";

site12.children[0].textContent = "Site2";
site13.children[0].textContent = "Site3";



site11.children[1].setAttribute("href", "https://google.com");


site11.children[1].children[0].setAttribute("src", "assets/images/image_1.jpg");

site11.children[1].children[0].setAttribute("alt", "man working");

site11.children[1].children[0].setAttribute("style", "padding:10px");



site12.children[1].setAttribute("href", "https://linkedin.com");
site12.children[1].children[0].setAttribute("src", "assets/images/image_2.jpg");

site12.children[1].children[0].setAttribute("alt", "group study");

site12.children[1].children[0].setAttribute("style", "padding:10px");


site13.children[1].setAttribute("href", "https://facebook.com");

site13.children[1].children[0].setAttribute("src", "assets/images/image_3.jpg");

site13.children[1].children[0].setAttribute("alt", "women study");

site13.children[1].children[0].setAttribute("style", "padding:10px");



h4all.forEach(function (h4Element) {

    h4Element.style.fontSize = "30px";
    h4Element.style.color = "blue";
    h4Element.style.fontWeight = "bolder";
    h4Element.style.paddingLeft = "10px";
    h4Element.style.margin = "0";

});


