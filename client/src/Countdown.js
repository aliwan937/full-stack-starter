import {useState} from "react";
function Countdown({seconds}) {
    const [secondsRemaining, setSecondsRemaining] = useState(0);
    function onStart() {
        const startTime = new Date();
        setSecondsRemaining(seconds);
        const interval = setInterval(function(){
        const now = new Date();
        const timeElapsed = now.getTime() - startTime.getTime(); // in MILLISECONDS
        const timeRemaining = Math.round(seconds - timeElapsed / 1000);
        if(timeRemaining <= 0){
            clearInterval(interval); // stop the interval timer
            setSecondsRemaining(0);

        }else{
            setSecondsRemaining(timeRemaining)
        }
        },1000 );
    }
    return(
        <div>
            <p>Countdown {seconds} seconds</p>
            {secondsRemaining === 0 && (
                <button type="button" onClick={onStart}>Start!</button>
            )}
            {secondsRemaining > 0 &&(
                <div>{secondsRemaining} seconds remaining!</div>
            )}
        </div>
    );
}
export default Countdown;