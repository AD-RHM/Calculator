
let startingTime = new Date();
let elapsedTime = 0;
let timer = null;
let isRunning = false;

    function startWatch(){
        if(!isRunning){
            startingTime = Date.now() - elapsedTime;
            timer = setInterval(updateTime,10);
            isRunning = true;
        }
    }

    function stopWatch(){
        if(isRunning){
            timer = clearInterval(timer);
            isRunning = false;
        }
    }

    function resetWatch(){
            
            timer = clearInterval(timer);
            isRunning = false;
            document.getElementById("watch").textContent = `00:00:00:00`;
            elapsedTime = 0;
    }
    
    function updateTime(){
        let currentTime = Date.now();
        elapsedTime = currentTime - startingTime;

        let hours = (Math.floor(elapsedTime / (1000 * 60 * 60))).toString().padStart(2,0);
        let minutes = (Math.floor((elapsedTime / (1000 * 60)) % 60)).toString().padStart(2,0);
        let seconds = (Math.floor((elapsedTime / (1000)) % 60)).toString().padStart(2,0);
        let millis = (Math.floor((elapsedTime % 1000) / 10)).toString().padStart(2,0);

        document.getElementById("watch").textContent = `${hours}:${minutes}:${seconds}:${millis}`;
    }
