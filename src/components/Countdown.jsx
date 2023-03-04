import Countdown from 'react-countdown';

const Completionist = () => <span>You are good to go!</span>;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
    return (
    <div className='countdown--content'>

      <div className='countdown--timers'>
        <span>{days}</span>
        <p>Days</p>
      </div>

      <div className='countdown--timers'>
        <span>{hours}</span>
        <p>Hours</p>
      </div>

      <div className='countdown--timers'>
        <span>{minutes}</span>
        <p>Minutes</p>
      </div>

      <div className='countdown--timers'>
        <span>{seconds}</span>
        <p>Seconds</p>
      </div>

    </div>
    )
};

const CountdownComp = () => {

  return (
    <>

      <div className='countdown'>
        <h4>Título do Countdown</h4>
        <Countdown
          date={Date.now() + 5000}
          renderer={renderer}
        />
      </div>



    </>
  )

}

export default CountdownComp;