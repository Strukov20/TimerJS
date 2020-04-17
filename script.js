window.addEventListener('DOMContentLoaded', function(){

    'use strict';

    // TIMER

    let deadLine = '2020-04-18';

    function getTimeRemaining(endtime){
        let total = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((total/1000) % 60),
        minutes = Math.floor((total/1000/60) % 60),
        hours = Math.floor((total/(1000*60*60)));

        return {total, hours, minutes, seconds};
    }

    function setClock(endTime){
        let hours = document.querySelector('.hours'),
            minutes = document.querySelector('.minutes'),
            seconds = document.querySelector('.seconds'),
            timerInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endTime);
            function addZero(num){
                if (num <= 9) {
                    return '0' + num;
                } else {
                    return num;
                }
            }

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);
            
            if (t.total <= 0){
                clearInterval(timerInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }
    setClock(deadLine);

});