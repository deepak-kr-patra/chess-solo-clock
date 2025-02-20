import { create } from 'zustand'

const useTimeValues = create((set) => ({
    inputTime: 60 * 60 * 1000,
    setInputTime: (inputTime) => set({ inputTime }),
    inputIncrement: 30 * 1000,
    setInputIncrement: (inputIncrement) => set({ inputIncrement }),
}));

export default useTimeValues;