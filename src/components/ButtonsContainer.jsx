import { useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { TbClockEdit } from "react-icons/tb";
import { GrPowerReset } from "react-icons/gr";
import useTimeValues from "../zustand/useTimeValues";
import ResetTimeModal from "./ResetTimeModal";


const ButtonsContainer = ({ time, setTime, setIncrement, toggleSetTimeModal, toggleResetTimeModal }) => {

    const { isRunning, setIsRunning } = useTimeValues();

    const [intervalId, setIntervalId] = useState(null);

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

    return (
        <>
            <div className='h-16 w-full text-white text-2xl flex items-center justify-center'>
                <button
                    className='h-full w-1/3 bg-blue-500 text-white text-2xl flex items-center justify-center cursor-pointer'
                    onClick={isRunning ? stopCountDown : startCountDown}
                >
                    {isRunning ? <FaPause /> : <FaPlay />}
                </button>
                <button
                    className='h-full w-1/3 bg-blue-200 text-white text-2xl flex items-center justify-center cursor-pointer'
                    onClick={toggleResetTimeModal}
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
            <ResetTimeModal
                setTime={setTime}
                setIncrement={setIncrement}
                intervalId={intervalId}
                setIntervalId={setIntervalId}
                toggleResetTimeModal={toggleResetTimeModal}
            />
        </>
    )
}

export default ButtonsContainer