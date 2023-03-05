import Countdown, {zeroPad} from 'react-countdown';
import { useRef, useState } from 'react';
import useSound from 'use-sound';

import alarmSfx from '../assets/sounds/alarm.wav'

const Testee = () => {
  const [play] = useSound(alarmSfx);
  play()
  return (
  <p>Finalized</p>
  );
};

const renderer = ({ days, hours, minutes, seconds, completed}) => {
  if (completed) {
    return <Testee />
  } else {
    return (
    <div className='countdown--content'>

      <div className='countdown--timers'>
        <span className='countdown-numbers'>{zeroPad(days)}</span>
        <p>Days</p>
      </div>

      <div className='countdown--timers'>
        <span className='countdown-numbers'>{zeroPad(hours)}</span>
        <p>Hours</p>
      </div>

      <div className='countdown--timers'>
        <span className='countdown-numbers'>{zeroPad(minutes)}</span>
        <p>Minutes</p>
      </div>

      <div className='countdown--timers'>
        <span className='countdown-numbers'>{zeroPad(seconds)}</span>
        <p>Seconds</p>
      </div>
    </div>
    );
  };
};

const CountdownComp = () => {

  const [inputtedTime, setInputtedTime] = useState(0);
  const [validInputtedTime, setValidTime] = useState(0)
  const clockRef = useRef();
  const handleStart = () => clockRef.current.start();
  const handlePause = () => clockRef.current.pause();
  const handleStop = () => clockRef.current.stop();

  const convertToNumber = (input) => {
    const time = input.split(":");
    let hours = time[0];
    let minutes = time[1];
    let seconds = time[2];

    let numberHours = parseInt(hours)
    let numberMinutes = parseInt(minutes)
    let numberSeconds = parseInt(seconds)

    let totalInSeconds = (numberHours * 3600) + (numberMinutes * 60) + numberSeconds
    let totalInMilisconds = totalInSeconds * 1000

    return totalInMilisconds
  }


  return (
    <>
      <div className='countdown'>
        <input 
          type="time"
          step="1"
          value={inputtedTime}
          onChange={(e) => {setInputtedTime(e.target.value)}}
          ></input>

        <button type="button" onClick={() => {setValidTime(convertToNumber(inputtedTime))}}>Go</button>
          <p>{inputtedTime}</p>
          <p>{typeof(inputtedTime)}</p>
          <p>{validInputtedTime}</p>

        <Countdown
          date={Date.now() + validInputtedTime}
          renderer={renderer}
          autoStart={false}
          ref={clockRef}
          controlled={false}
        />
        <div className='countdown__buttons'>
          <button type="button" onClick={() => {handleStart()}}>start</button>
          <button type="button" onClick={() => {handlePause()}}>pause</button>
          <button type="button" onClick={() => {handleStop()}}>stop</button>
        </div>
      </div>
    </>
  );
};

export default CountdownComp;