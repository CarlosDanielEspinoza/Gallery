const displayBG = document.querySelector("#sect1");
const displayImg = document.querySelector("#displayImg");
const boxImages = document.querySelector("#images");
const btnX = document.querySelector("#btnX");


let images = ['images/walking.jpg','images/ocean.jpg','images/fuji.jpg','images/cat.jpg','images/fries.jpg','images/hamburger.jpg','images/hamburgerChicken.jpg','images/hotdog.jpg','images/ice.jpg','images/limeWater.jpg','images/nachos.jpg','images/nuggets.jpg','images/orangeJuice.jpg','images/wings.jpg'];

function displayImage(event){
    let source = event.target.getAttribute('src');
    
    displayImg.setAttribute('src',source);
    displayBG.style.visibility = 'visible';

    gsap.to('#sect1',{
        duration: 0.5,
        opacity: 1,
    });
}

for(var i=0 ; i < images.length ; i++){
    let newImg = document.createElement('img');
    newImg.setAttribute('src',images[i]);
    boxImages.appendChild(newImg);
    newImg.addEventListener('click',displayImage);
}

btnX.addEventListener('click', function(){
    displayBG.style.visibility = 'hidden';
    displayBG.style.opacity = 0;
});