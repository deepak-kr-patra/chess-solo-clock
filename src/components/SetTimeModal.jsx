import { useState } from 'react';
import useTimeValues from '../zustand/useTimeValues';


const SetTimeModal = ({ setTime, setIncrement, toggleSetTimeModal }) => {

    const { setInputTime, setInputIncrement } = useTimeValues();

    const [timeMinutes, setTimeMinutes] = useState(0);
    const [timeSeconds, setTimeSeconds] = useState(0);
    const [incrementMinutes, setIncrementMinutes] = useState(0);
    const [incrementSeconds, setIncrementSeconds] = useState(0);

    const saveTime = () => {
        const newTime = (timeMinutes * 60 * 1000) + (timeSeconds * 1000);
        setTime(newTime);
        setInputTime(newTime);

        const newIncrement = (incrementMinutes * 60 * 1000) + (incrementSeconds * 1000);
        setIncrement(newIncrement);
        setInputIncrement(newIncrement);

        toggleSetTimeModal();
    };

    return (
        <div className='modal-container' id='set-time-modal-container'>
            <div className="w-[90%] h-1/2 flex flex-col p-4 rounded-2xl bg-[#F4F5F7]">
                <h3 className="font-bold text-lg max-sm:text-[16px]">Set Time</h3>
                <div className='mt-4 w-full flex flex-col justify-center items-center gap-4'>
                    <div className='w-full flex justify-between items-center'>
                        <h2 className='w-1/2'>Time</h2>
                        <div className='w-1/2 flex justify-end items-center gap-2'>
                            <input
                                type="number"
                                className="rounded-lg h-10 px-2 max-sm:w-12 w-18 bg-gray-200"
                                value={timeMinutes}
                                onChange={(e) => setTimeMinutes(e.target.value)}
                            />
                            :
                            <input
                                type="number"
                                className="rounded-lg h-10 px-2 max-sm:w-12 w-18 bg-gray-200"
                                value={timeSeconds}
                                onChange={(e) => setTimeSeconds(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className='w-full border-1 border-gray-600'></div>

                    <div className='w-full flex justify-between items-center'>
                        <h2 className='w-1/2'>Increment</h2>
                        <div className='w-1/2 flex justify-end items-center gap-2'>
                            <input
                                type="number"
                                className="rounded-lg h-10 px-2 max-sm:w-12 w-18 bg-gray-200"
                                value={incrementMinutes}
                                onChange={(e) => setIncrementMinutes(e.target.value)}
                            />
                            :
                            <input
                                type="number"
                                className="rounded-lg h-10 px-2 max-sm:w-12 w-18 bg-gray-200"
                                value={incrementSeconds}
                                onChange={(e) => setIncrementSeconds(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className='flex mt-auto mb-0 justify-end gap-2'>
                    <button
                        className="rounded-lg min-h-10 h-10 px-2 bg-gray-300 cursor-pointer"
                        onClick={() => toggleSetTimeModal()}
                    >
                        Cancel
                    </button>
                    <button
                        className="rounded-lg min-h-10 h-10 px-2 bg-[#14791b] hover:bg-[#125815] cursor-pointer text-white"
                        onClick={() => saveTime()}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SetTimeModal