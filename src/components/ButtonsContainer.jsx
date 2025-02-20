import { useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { TbClockEdit } from "react-icons/tb";
import { GrPowerReset } from "react-icons/gr";
import useTimeValues from "../zustand/useTimeValues";


const ButtonsContainer = ({ time, setTime, setIncrement, toggleSetTimeModal }) => {

    const { inputTime, inputIncrement } = useTimeValues();

    const [intervalId, setIntervalId] = useState(null);
    const [isRunning, setIsRunning] = useState(false);

    const startCountDown = () => {
        setIsRunning(true);

        const id = setInterval(() => {
            setTime((prev) => prev - 10);

            if (time <= 0) {
                setTime(0);
                clearInterval(id);
                setIntervalId(null);
                setIsRunning(false);
                console.log("Countdown complete!");
                return;
            }
        }, 10);
        setIntervalId(id);
    };

    const stopCountDown = () => {
        clearInterval(intervalId);
        setIntervalId(null);
        setIsRunning(false);
    };

    const resetTime = () => {
        setTime(inputTime);
        setIncrement(inputIncrement);
        clearInterval(intervalId);
        setIntervalId(null);
        setIsRunning(false);
    };

    return (
        <div className='h-16 w-full text-white text-2xl flex items-center justify-center'>
            <button
                className='h-full w-1/3 bg-blue-500 text-white text-2xl flex items-center justify-center cursor-pointer'
                onClick={isRunning ? stopCountDown : startCountDown}
            >
                {isRunning ? <FaPause /> : <FaPlay />}
            </button>
            <button
                className='h-full w-1/3 bg-blue-200 text-white text-2xl flex items-center justify-center cursor-pointer'
                onClick={resetTime}
            >
                <GrPowerReset />
            </button>
            <button
                className='h-full w-1/3 bg-blue-300 text-white text-2xl flex items-center justify-center cursor-pointer'
                onClick={() => toggleSetTimeModal()}
            >
                <TbClockEdit />
            </button>
        </div>
    )
}

export default ButtonsContainer