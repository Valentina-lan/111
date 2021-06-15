var element = document.getElementById('random'); 
setInterval(function(){
    element.innerHTML = Math.floor((Math.random()*60)+1);   
}, 5000);



function setTimer(){
    var timer = (((Math.floor(Math.random() * 6))+1)*3000);
    var interval = setInterval(updateCounter, timer);
}

function updateCounter(){
    var counter = document.getElementById("step");                    
    var count = parseInt(counter.innerHTML);
    count++;
    counter.innerHTML = count;
}
setTimer();
var intervalID=setInterval(interval,346);



