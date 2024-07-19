import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const Pomodora = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const audio = new Audio("../sound/alarm2.mp3")

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            if (!isBreak) {
              
              setMinutes(5);
              setIsBreak(true);
            } else {
              setMinutes(1);
              setIsBreak(false);
            }
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);
  
  useEffect(() => {
    
  audio.play()
  
  }, [isBreak])
  
  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setMinutes(25);
    setSeconds(0);
    setIsActive(false);
    setIsBreak(false);
  };
  
  
  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-center mb-8">
        <div className="text-6xl font-bold">
          {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
        <div className="flex space-x-4 mt-4">
          <button
            onClick={toggle}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded"
          >
            {isActive ? 'Pause' : 'Start'}
          </button>
          <button
            onClick={reset}
            className="px-4 py-2 bg-red-500 hover:bg-red-700 rounded"
          >
            Reset
          </button>
        </div>
      </div>
      <div className="text-2xl">
        {isBreak ? "Break Time!" : "Work Time!"}
      </div>
    </div>
    </>
  );
};

export default Pomodora;
