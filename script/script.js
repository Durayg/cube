            const cube = document.querySelector('.wrapper');
			const ball = document.querySelector('.ball');
			const side6 = document.querySelector('.side6');
			const playPauseBtn = document.getElementById('play-pause-btn');
			const stopBtn = document.getElementById('stop-btn');


			playPauseBtn.addEventListener('click', function(){
				ball.classList.add('ball-bounce');
				cube.classList.add('rotate-wrapper');
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
				cube.classList.remove('rotate-wrapper');
				cube.style.animationPlayState = 'unset';
				side6.classList.remove('side6-shadow');
				side6.style.animationPlayState = 'unset';
			})
