document.addEventListener("DOMContentLoaded", function() {
    const increaseBtn = document.getElementById("increasebtn");
    const resetBtn = document.getElementById("resetbtn");
    const decreaseBtn = document.getElementById("decreasebtn");
    const toggleSoundBtn = document.getElementById("toggleSoundBtn");
    const toggleVibrationBtn = document.getElementById("toggleVibrationBtn");
    const counterLabel = document.getElementById("cntlbl");

    let counter = 0;
    let soundEnabled = true;
    let vibrationEnabled = true;

    const clickSound = new Audio('click.mp3');

    function updateCounterLabel() {
        counterLabel.textContent = counter;
    }

    function playSound() {
        if (soundEnabled) {
            clickSound.play();
        }
    }

    function vibrate() {
        if (vibrationEnabled && navigator.vibrate) {
            navigator.vibrate(100);
        }
    }

    function toggleSound() {
        soundEnabled = !soundEnabled;
        toggleSoundBtn.textContent = soundEnabled ? 'Disable Sound' : 'Enable Sound';
    }

    function toggleVibration() {
        vibrationEnabled = !vibrationEnabled;
        toggleVibrationBtn.textContent = vibrationEnabled ? 'Disable Vibration' : 'Enable Vibration';
    }

    increaseBtn.addEventListener("click", function() {
        counter++;
        updateCounterLabel();
        playSound();
        vibrate();
    });

    resetBtn.addEventListener("click", function() {
        counter = 0;
        updateCounterLabel();
        playSound();
        vibrate();
    });

    decreaseBtn.addEventListener("click", function() {
        counter--;
        updateCounterLabel();
        playSound();
        vibrate();
    });

    toggleSoundBtn.addEventListener("click", toggleSound);
    toggleVibrationBtn.addEventListener("click", toggleVibration);
});
