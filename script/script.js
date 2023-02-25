const cube = document.querySelector('.cube');
const ball = document.getElementById('ball');
const side6 = document.getElementById('side6');
const playPauseBtn = document.getElementById('play-pause-btn');
const stopBtn = document.getElementById('stop-btn');


playPauseBtn.addEventListener('click', function(){
    ball.classList.add('ball-bounce');
    cube.classList.add('rotate-cube');
    side6.classList.add('side6-shadow');
    if(ball.style.animationPlayState != 'running'){
        ball.style.animationPlayState = 'running';
        cube.style.animationPlayState = 'running';
        side6.style.animationPlayState = 'running';     
    }
    else{
       ball.style.animationPlayState = 'paused';
       cube.style.animationPlayState = 'paused';
       side6.style.animationPlayState = 'paused';
    }
})

stopBtn.addEventListener('click', function(){
    ball.classList.remove('ball-bounce');
    ball.style.animationPlayState = 'unset';
    cube.classList.remove('rotate-cube');
    cube.style.animationPlayState = 'unset';
    side6.classList.remove('side6-shadow');
    side6.style.animationPlayState = 'unset';
})





let x = 0;

const count = function(){
    /*if(ball.style.transform === 'translateY(25px)'){
    console.log('ok')
   }
   else{
    console.log('nee')
   }*/

   x = x + 1;
}

count();
console.log(x);
count();
console.log(x)
Key

/*function count(){

        //console.log(x);
       if(ball.hasAttribute('.ball-bounce') != true){
        console.log('ok')
       }
       else{
        console.log('nee')
       }
    
}
count()*/