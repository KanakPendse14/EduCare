import React, { useState, useRef, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight, BsVolumeUp } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';

function LearnColours() {
  // Slide data with all the images and audio sources
  const slides = {
    frontpage: {
      image: process.env.PUBLIC_URL + '/images/colour1.png',
      
    },
    NP: {
      image: process.env.PUBLIC_URL + '/images/colour2.png',
      audio: process.env.PUBLIC_URL + '/sounds/red.mp3',
      
    },
    A: {
      image: process.env.PUBLIC_URL + '/images/colour3.png',
      
    },
    AA: {
      image: process.env.PUBLIC_URL + '/images/colour4.png',
      
    },
    B: {
      image: process.env.PUBLIC_URL + '/images/colour5.png',
      audio: process.env.PUBLIC_URL + '/sounds/orange.mp3', // Updated sound file path
    },
    BB: {
      image: process.env.PUBLIC_URL + '/images/colour6.png',
      
    },
    C: {
      image: process.env.PUBLIC_URL + '/images/colour7.png',
      
    },
    CC: {
      image: process.env.PUBLIC_URL + '/images/colour8.png',
      audio: process.env.PUBLIC_URL + '/sounds/yellow.mp3', // Updated sound file path
    },
    D: {
      image: process.env.PUBLIC_URL + '/images/colour9.png',
    },

    DD: {
      image: process.env.PUBLIC_URL + '/images/colour10.png',
    },

    E: {
      image: process.env.PUBLIC_URL + '/images/colour11.png',
      audio: process.env.PUBLIC_URL + '/sounds/green.mp3', // Updated sound file path
    },
    EE: {
      image: process.env.PUBLIC_URL + '/images/colour12.png',
    },
    F: {
      image: process.env.PUBLIC_URL + '/images/colour13.png',
    },
    FF: {
      image: process.env.PUBLIC_URL + '/images/colour14.png',
      audio: process.env.PUBLIC_URL + '/sounds/blue.mp3', // Updated sound file path
    },
    G: {
      image: process.env.PUBLIC_URL + '/images/colour15.png',
    },
    GG: {
      image: process.env.PUBLIC_URL + '/images/colour16.png',
    },
    H: {
      image: process.env.PUBLIC_URL + '/images/colour17.png',
      audio: process.env.PUBLIC_URL + '/sounds/purple.mp3', // Updated sound file path
    },
    HH: {
      image: process.env.PUBLIC_URL + '/images/colour18.png',
    },
    I: {
      image: process.env.PUBLIC_URL + '/images/colour19.png',
    },
    II: {
      image: process.env.PUBLIC_URL + '/images/colour20.png',
      audio: process.env.PUBLIC_URL + '/sounds/pink.mp3', // Updated sound file path
    },
    J: {
      image: process.env.PUBLIC_URL + '/images/colour21.png',
    },
    JJ: {
      image: process.env.PUBLIC_URL + '/images/colour22.png',
    },
    K: {
      image: process.env.PUBLIC_URL + '/images/colour23.png',
      audio: process.env.PUBLIC_URL + '/sounds/grey.mp3', // Updated sound file path
    },
    KK: {
      image: process.env.PUBLIC_URL + '/images/colour24.png',
    },
    L: {
      image: process.env.PUBLIC_URL + '/images/colour25.png',
    },
    LL: {
      image: process.env.PUBLIC_URL + '/images/colour26.png',
      audio: process.env.PUBLIC_URL + '/sounds/brown.mp3', // Updated sound file path
    },
    M: {
      image: process.env.PUBLIC_URL + '/images/colour27.png',
    },
    MM: {
      image: process.env.PUBLIC_URL + '/images/colour28.png',
    },
    N: {
      image: process.env.PUBLIC_URL + '/images/colour29.png',
      audio: process.env.PUBLIC_URL + '/sounds/black.mp3', // Updated sound file path
    },
    NN: {
      image: process.env.PUBLIC_URL + '/images/colour30.png',
    },
    O: {
      image: process.env.PUBLIC_URL + '/images/colour31.png',
    }
    
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

export default LearnColours;