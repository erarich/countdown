import Countdown, {zeroPad} from 'react-countdown';
import { useRef } from 'react';
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

  const clockRef = useRef();
  const handleStart = () => clockRef.current.start();
  const handlePause = () => clockRef.current.pause();
  const handleStop = () => clockRef.current.stop();

  return (
    <>
      <div className='countdown'>
        <Countdown
          date={Date.now() + 5000}
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