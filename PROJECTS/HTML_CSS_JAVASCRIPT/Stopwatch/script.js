/**
 * Initializes the stopwatch functionality.
 * @function
 */
document.addEventListener("DOMContentLoaded", function() {
    // variable for buttons

    let startButton = document.getElementsByClassName("start")[0];
    let stopButton = document.getElementsByClassName("stop")[0];
    let resetButton = document.getElementsByClassName("reset")[0];

    // variable for time

    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    
    /**
     * Updates the stopwatch display.
     * @function
     */
    function stopwatch() {
        seconds++;
        if (seconds / 60 === 1) {
            seconds = 0;
            minutes++;
            if (minutes / 60 === 1) {
                minutes = 0;
                hours++;
            }
        }

        document.getElementsByClassName("display")[0].innerText = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
    }

    // start button

    /**
     * Starts the stopwatch.
     * @function
     */
    startButton.addEventListener("click", function() {
        interval = setInterval(stopwatch, 1000);
        startButton.disabled = true;
    }
    );

    // stop button

    /**
     * Stops the stopwatch.
     * @function
     */
    stopButton.addEventListener("click", function() {
        clearInterval(interval);
        startButton.disabled = false;
    }
    );

    // reset button

    /**
     * Resets the stopwatch.
     * @function
     */
    resetButton.addEventListener("click", function() {
        clearInterval(interval);
        startButton.disabled = false;
        seconds = 0;
        minutes = 0;
        hours = 0;
        document.getElementsByClassName("display")[0].innerText = "00:00:00";
    }
    );
    
});