
score = 0;
cross = true;

document.onkeydown = function (e) {
    console.log("key is: ", e.key);
    if (e.key == "ArrowUp") {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino');


        }, 700);
    }
    if (e.key == "ArrowLeft") {

        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX - 112 + 'px';

    }
    if (e.key == "ArrowRight") {

        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + 'px';

    }

}



setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');
    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(ox - dx);
    offsetY = Math.abs(dy - oy);


    if (offsetX < 93 && offsetY == 117) {
        gameOver.innerHTML="Game Over Reload To Restart";
        obstacle.classList.remove('obstacleAni');
        dino.style.visibility = 'hidden';
        


    }
    else if (offsetX < 70 && cross) {
        score += 1;
        updateScore(score);
        cross = false;

        setInterval(() => {
            cross = true;


        }, 1000);
        // setTimeout(() => {
        //     aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
        //     newDur = aniDur - 0.1;
        //     if(newDur<1.8){
        //         newDur=1.8;
    
        //         }
        //     obstacle.style.animationDuration = newDur + 's';
           
        //     console.log(newDur);
        //     console.log(obstacle.style.animationDuration);



        // }, 500);

    }


}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your score is: " + score;
}


