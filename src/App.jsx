import './App.css'
import { useState } from 'react';
import ButtonsContainer from './components/ButtonsContainer';
import SetTimeModal from './components/SetTimeModal';
import formatTime from './utils/formatTime';
import clickSound from '/click-sound.wav';


function App() {

  const [time, setTime] = useState(60 * 60 * 1000);
  const [increment, setIncrement] = useState(30 * 1000);
  const sound = new Audio(clickSound);

  const toggleSetTimeModal = () => {
    const setTimeModal = document.getElementById('set-time-modal-container');

    setTimeModal.classList.contains('show-modal-container') ? setTimeModal.classList.remove('show-modal-container') : setTimeModal.classList.add('show-modal-container');
  };

  const addIncrementTime = () => {
    if (time <= 0) {
      return;
    }
    setTime((prev) => prev + increment);
    sound.play();
  };

  return (
    <>
      <div className='h-screen w-screen flex flex-col items-center justify-start'>
        <ButtonsContainer
          time={time}
          setTime={setTime}
          setIncrement={setIncrement}
          toggleSetTimeModal={toggleSetTimeModal}
        />
        <h2
          className='h-auto w-full grow text-white text-5xl flex items-center justify-center cursor-pointer'
          onClick={() => addIncrementTime()}
        >
          {formatTime(time)}
        </h2>
      </div>

      <SetTimeModal
        setTime={setTime}
        setIncrement={setIncrement}
        toggleSetTimeModal={toggleSetTimeModal}
      />
    </>
  )
}

export default App