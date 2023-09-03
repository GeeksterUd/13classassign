const boxContainer = document.getElementById('box');
boxContainer.addEventListener('mouseover', function(event){    
    let widthRange = document.documentElement.clientWidth - 100;
    let heightRange = document.documentElement.clientHeight - 80;
    let top = Math.floor((Math.random() * heightRange) + 1);
    let left = Math.floor((Math.random() * widthRange) + 1);
    boxContainer.style.top = top + "px";
    boxContainer.style.left = left + "px";
});