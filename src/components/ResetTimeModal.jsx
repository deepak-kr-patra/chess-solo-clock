import useTimeValues from "../zustand/useTimeValues";


const ResetTimeModal = ({
    setTime,
    setIncrement,
    intervalId,
    setIntervalId,
    toggleResetTimeModal
}) => {

    const { inputTime, inputIncrement, setIsRunning } = useTimeValues();

    const resetTime = () => {
        setTime(inputTime);
        setIncrement(inputIncrement);
        clearInterval(intervalId);
        setIntervalId(null);
        setIsRunning(false);
        toggleResetTimeModal();
    };

    return (
        <div className='modal-container' id='reset-time-modal-container'>
            <div className="w-[90%] max-w-96 h-1/4 flex flex-col p-4 rounded-2xl bg-[#F4F5F7]">
                <h3 className="font-bold text-lg max-sm:text-[16px]">Reset Time?</h3>
                <div className='flex mt-auto mb-0 justify-end gap-2'>
                    <button
                        className="rounded-lg min-h-10 h-10 px-2 bg-gray-300 cursor-pointer"
                        onClick={() => toggleResetTimeModal()}
                    >
                        Cancel
                    </button>
                    <button
                        className="rounded-lg min-h-10 h-10 px-2 bg-[#276aa1] hover:bg-[#1d4b71] cursor-pointer text-white"
                        onClick={() => resetTime()}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ResetTimeModal