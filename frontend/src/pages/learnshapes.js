import React, { useState, useRef, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight, BsVolumeUp } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';

function LearnShapes() {
  // Slide data with all the images and audio sources
  const slides = {
    frontpage: {
      image: process.env.PUBLIC_URL + '/images/shapes1.png',
      
    },
   
    A: {
      image: process.env.PUBLIC_URL + '/images/shapes2.png',
      audio: process.env.PUBLIC_URL + '/sounds/A.wav', // Updated sound file path
    },
    AA: {
      image: process.env.PUBLIC_URL + '/images/shapes3.png',
      audio: process.env.PUBLIC_URL + '/sounds/A.wav', // Updated sound file path
    },
    B: {
      image: process.env.PUBLIC_URL + '/shapes4.png',
      audio: process.env.PUBLIC_URL + '/sounds/B.wav', // Updated sound file path
    },
    BB: {
      image: process.env.PUBLIC_URL + '/images/shapes5.png',
      audio: process.env.PUBLIC_URL + '/sounds/B.wav', // Updated sound file path
    },
    C: {
      image: process.env.PUBLIC_URL + '/images/shapes6.png',
      audio: process.env.PUBLIC_URL + '/sounds/C.wav', // Updated sound file path
    },
    CC: {
      image: process.env.PUBLIC_URL + '/images/shapes7.png',
      audio: process.env.PUBLIC_URL + '/sounds/C.wav', // Updated sound file path
    },
    D: {
      image: process.env.PUBLIC_URL + '/images/shapes8.png',
      audio: process.env.PUBLIC_URL + '/sounds/D.wav', // Updated sound file path
    },
    DD: {
      image: process.env.PUBLIC_URL + '/images/shapes9.png',
      audio: process.env.PUBLIC_URL + '/sounds/D.wav', // Updated sound file path
    },
    E: {
      image: process.env.PUBLIC_URL + '/images/shapes10.png',
      audio: process.env.PUBLIC_URL + '/sounds/E.wav', // Updated sound file path
    },
    EE: {
      image: process.env.PUBLIC_URL + '/images/shapes11.png',
      audio: process.env.PUBLIC_URL + '/sounds/E.wav', // Updated sound file path
    },
    F: {
      image: process.env.PUBLIC_URL + '/images/shapes12.png',
      audio: process.env.PUBLIC_URL + '/sounds/F.wav', // Updated sound file path
    },
    FF: {
      image: process.env.PUBLIC_URL + '/images/shapes13.png',
      audio: process.env.PUBLIC_URL + '/sounds/F.wav', // Updated sound file path
    },
    G: {
      image: process.env.PUBLIC_URL + '/images/shapes14.png',
      audio: process.env.PUBLIC_URL + '/sounds/G.wav', // Updated sound file path
    },
    GG: {
      image: process.env.PUBLIC_URL + '/images/shapes15.png',
      audio: process.env.PUBLIC_URL + '/sounds/G.wav', // Updated sound file path
    },
    H: {
      image: process.env.PUBLIC_URL + '/images/shapes16.png',
      audio: process.env.PUBLIC_URL + '/sounds/H.wav', // Updated sound file path
    },
    HH: {
      image: process.env.PUBLIC_URL + '/images/shapes17.png',
      audio: process.env.PUBLIC_URL + '/sounds/H.wav', // Updated sound file path
    },
    I: {
      image: process.env.PUBLIC_URL + '/images/shapes18.png',
      audio: process.env.PUBLIC_URL + '/sounds/I.wav', // Updated sound file path
    },
    II: {
      image: process.env.PUBLIC_URL + '/images/shapes19.png',
      audio: process.env.PUBLIC_URL + '/sounds/I.wav', // Updated sound file path
    },
    J: {
      image: process.env.PUBLIC_URL + '/images/shapes20.png',
      audio: process.env.PUBLIC_URL + '/sounds/J.wav', // Updated sound file path
    },
    
  };

  
  // Convert slides object into an array of slide objects
  const slideArray = Object.keys(slides).map((key) => ({
    url: slides[key].image,
    audioSrc: slides[key].audio,
  }));

  const [currentIndex, setCurrentIndex] = useState(0);
  const audioRefs = useRef([]);

  const navigate = useNavigate();

  // Go to the previous slide
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      pauseAudio(currentIndex);
    }
  };

  // Go to the next slide
  const nextSlide = () => {
    if (currentIndex < slideArray.length - 1) {
      setCurrentIndex(currentIndex + 1);
      pauseAudio(currentIndex);
    }
  };

  // Go to a specific slide
  const goToSlide = (slideIndex) => {
    pauseAudio(currentIndex);
    setCurrentIndex(slideIndex);
  };

  // Pause the audio on the current slide
  const pauseAudio = (index) => {
    if (audioRefs.current && audioRefs.current[index]) {
      audioRefs.current[index].pause();
    }
  };

  // Toggle audio playback for the current slide
  const handleAudioToggle = (slideIndex) => {
    const audioElement = audioRefs.current[slideIndex];
    if (audioElement) {
      if (audioElement.paused) {
        audioElement.play();
      } else {
        audioElement.pause();
      }
    }
  };

  // Handle keypresses for slide navigation
  const handleKeyPress = (event) => {
    if (event.key === 'ArrowLeft') {
      prevSlide();
    } else if (event.key === 'ArrowRight') {
      nextSlide();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentIndex]);

  // Handle exit button click
  const handleExit = () => {
    navigate('/listenandlearn');
  };

  // Progress bar percentage calculation
  const progressPercentage = ((currentIndex + 1) / slideArray.length) * 100;

  return (
    <div className='max-w-[1720px] h-[740px] w-full m-0 py-0 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slideArray[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
      >
        {/* Only show audio button if the current slide has audio */}
        {slideArray[currentIndex].audioSrc && (
          <div className='absolute top-5 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer' onClick={() => handleAudioToggle(currentIndex)}>
            <BsVolumeUp size={30} />
          </div>
        )}
      </div>

      {currentIndex > 0 && (
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer' onClick={prevSlide}>
          <BsChevronCompactLeft size={30} />
        </div>
      )}

      {currentIndex < slideArray.length - 1 && (
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer' onClick={nextSlide}>
          <BsChevronCompactRight size={30} />
        </div>
      )}

      {/* Progress Bar */}
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
      </div>
      <p>{Math.round(progressPercentage)}% completed</p>

      {/* Navigation Dots */}
      <div className='flex top-0 justify-center py-2'>
        {slideArray.map((_, slideIndex) => (
          <div key={`dot-${slideIndex}`} onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer'>
            <RxDotFilled />
          </div>
        ))}
      </div>

      {/* Audio Elements */}
      {slideArray.map((slide, slideIndex) => (
        <audio key={`audio-${slideIndex}`} ref={(el) => (audioRefs.current[slideIndex] = el)} src={slide.audioSrc} preload='none' />
      ))}

      {/* Exit Button */}
      <div className='absolute top-7 left-8'>
        <button
          onClick={handleExit}
          className='bg-black/20 text-white px-7 py-3 rounded-full shadow-lg hover:bg-black/30 transition duration-300'
        >
          Exit
        </button>
      </div>
    </div>
  );
}

export default LearnShapes;