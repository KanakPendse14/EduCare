import React, { useState, useRef, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight, BsVolumeUp } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';

function LearnEnglish() {
  // Slide data with all the images and audio sources
  const slides = {
    frontpage: {
      image: process.env.PUBLIC_URL + '/images/1.png',
      
    },
    NP: {
      image: process.env.PUBLIC_URL + '/images/2.png',
      
    },
    A: {
      image: process.env.PUBLIC_URL + '/images/4.png',
      audio: process.env.PUBLIC_URL + '/sounds/A.wav', // Updated sound file path
    },
    AA: {
      image: process.env.PUBLIC_URL + '/images/5.png',
      audio: process.env.PUBLIC_URL + '/sounds/A.wav', // Updated sound file path
    },
    B: {
      image: process.env.PUBLIC_URL + '/images/15.png',
      audio: process.env.PUBLIC_URL + '/sounds/B.wav', // Updated sound file path
    },
    BB: {
      image: process.env.PUBLIC_URL + '/images/16.png',
      audio: process.env.PUBLIC_URL + '/sounds/B.wav', // Updated sound file path
    },
    C: {
      image: process.env.PUBLIC_URL + '/images/17.png',
      audio: process.env.PUBLIC_URL + '/sounds/C.wav', // Updated sound file path
    },
    CC: {
      image: process.env.PUBLIC_URL + '/images/18.png',
      audio: process.env.PUBLIC_URL + '/sounds/C.wav', // Updated sound file path
    },
    D: {
      image: process.env.PUBLIC_URL + '/images/19.png',
      audio: process.env.PUBLIC_URL + '/sounds/D.wav', // Updated sound file path
    },
    DD: {
      image: process.env.PUBLIC_URL + '/images/20.png',
      audio: process.env.PUBLIC_URL + '/sounds/D.wav', // Updated sound file path
    },
    E: {
      image: process.env.PUBLIC_URL + '/images/6.png',
      audio: process.env.PUBLIC_URL + '/sounds/E.wav', // Updated sound file path
    },
    EE: {
      image: process.env.PUBLIC_URL + '/images/7.png',
      audio: process.env.PUBLIC_URL + '/sounds/E.wav', // Updated sound file path
    },
    F: {
      image: process.env.PUBLIC_URL + '/images/21.png',
      audio: process.env.PUBLIC_URL + '/sounds/F.wav', // Updated sound file path
    },
    FF: {
      image: process.env.PUBLIC_URL + '/images/22.png',
      audio: process.env.PUBLIC_URL + '/sounds/F.wav', // Updated sound file path
    },
    G: {
      image: process.env.PUBLIC_URL + '/images/23.png',
      audio: process.env.PUBLIC_URL + '/sounds/G.wav', // Updated sound file path
    },
    GG: {
      image: process.env.PUBLIC_URL + '/images/24.png',
      audio: process.env.PUBLIC_URL + '/sounds/G.wav', // Updated sound file path
    },
    H: {
      image: process.env.PUBLIC_URL + '/images/25.png',
      audio: process.env.PUBLIC_URL + '/sounds/H.wav', // Updated sound file path
    },
    HH: {
      image: process.env.PUBLIC_URL + '/images/26.png',
      audio: process.env.PUBLIC_URL + '/sounds/H.wav', // Updated sound file path
    },
    I: {
      image: process.env.PUBLIC_URL + '/images/8.png',
      audio: process.env.PUBLIC_URL + '/sounds/I.wav', // Updated sound file path
    },
    II: {
      image: process.env.PUBLIC_URL + '/images/9.png',
      audio: process.env.PUBLIC_URL + '/sounds/I.wav', // Updated sound file path
    },
    J: {
      image: process.env.PUBLIC_URL + '/images/27.png',
      audio: process.env.PUBLIC_URL + '/sounds/J.wav', // Updated sound file path
    },
    JJ: {
      image: process.env.PUBLIC_URL + '/images/28.png',
      audio: process.env.PUBLIC_URL + '/sounds/J.wav', // Updated sound file path
    },
    K: {
      image: process.env.PUBLIC_URL + '/images/29.png',
      audio: process.env.PUBLIC_URL + '/sounds/K.wav', // Updated sound file path
    },
    KK: {
      image: process.env.PUBLIC_URL + '/images/30.png',
      audio: process.env.PUBLIC_URL + '/sounds/K.wav', // Updated sound file path
    },
    L: {
      image: process.env.PUBLIC_URL + '/images/31.png',
      audio: process.env.PUBLIC_URL + '/sounds/L.wav', // Updated sound file path
    },
    LL: {
      image: process.env.PUBLIC_URL + '/images/32.png',
      audio: process.env.PUBLIC_URL + '/sounds/L.wav', // Updated sound file path
    },
    M: {
      image: process.env.PUBLIC_URL + '/images/33.png',
      audio: process.env.PUBLIC_URL + '/sounds/M.wav', // Updated sound file path
    },
    MM: {
      image: process.env.PUBLIC_URL + '/images/34.png',
      audio: process.env.PUBLIC_URL + '/sounds/M.wav', // Updated sound file path
    },
    N: {
      image: process.env.PUBLIC_URL + '/images/35.png',
      audio: process.env.PUBLIC_URL + '/sounds/N.wav', // Updated sound file path
    },
    NN: {
      image: process.env.PUBLIC_URL + '/images/36.png',
      audio: process.env.PUBLIC_URL + '/sounds/N.wav', // Updated sound file path
    },
    O: {
      image: process.env.PUBLIC_URL + '/images/10.png',
      audio: process.env.PUBLIC_URL + '/sounds/O.wav', // Updated sound file path
    },
    OO: {
      image: process.env.PUBLIC_URL + '/images/11.png',
      audio: process.env.PUBLIC_URL + '/sounds/O.wav', // Updated sound file path
    },
    P: {
      image: process.env.PUBLIC_URL + '/images/37.png',
      audio: process.env.PUBLIC_URL + '/sounds/P.wav', // Updated sound file path
    },
    PP: {
      image: process.env.PUBLIC_URL + '/images/38.png',
      audio: process.env.PUBLIC_URL + '/sounds/P.wav', // Updated sound file path
    },
    Q: {
      image: process.env.PUBLIC_URL + '/images/39.png',
      audio: process.env.PUBLIC_URL + '/sounds/Q.wav', // Updated sound file path
    },
    QQ: {
      image: process.env.PUBLIC_URL + '/images/40.png',
      audio: process.env.PUBLIC_URL + '/sounds/Q.wav', // Updated sound file path
    },
    R: {
      image: process.env.PUBLIC_URL + '/images/41.png',
      audio: process.env.PUBLIC_URL + '/sounds/R.wav', // Updated sound file path
    },
    RR: {
      image: process.env.PUBLIC_URL + '/images/42.png',
      audio: process.env.PUBLIC_URL + '/sounds/R.wav', // Updated sound file path
    },
    S: {
      image: process.env.PUBLIC_URL + '/images/43.png',
      audio: process.env.PUBLIC_URL + '/sounds/S.wav', // Updated sound file path
    },
    SS: {
      image: process.env.PUBLIC_URL + '/images/44.png',
      audio: process.env.PUBLIC_URL + '/sounds/S.wav', // Updated sound file path
    },
    T: {
      image: process.env.PUBLIC_URL + '/images/45.png',
      audio: process.env.PUBLIC_URL + '/sounds/T.wav', // Updated sound file path
    },
    TT: {
      image: process.env.PUBLIC_URL + '/images/46.png',
      audio: process.env.PUBLIC_URL + '/sounds/T.wav', // Updated sound file path
    },
    U: {
      image: process.env.PUBLIC_URL + '/images/12.png',
      audio: process.env.PUBLIC_URL + '/sounds/U.wav', // Updated sound file path
    },
    UU: {
      image: process.env.PUBLIC_URL + '/images/13.png',
      audio: process.env.PUBLIC_URL + '/sounds/U.wav', // Updated sound file path
    },
    V: {
      image: process.env.PUBLIC_URL + '/images/47.png',
      audio: process.env.PUBLIC_URL + '/sounds/V.wav', // Updated sound file path
    },
    VV: {
      image: process.env.PUBLIC_URL + '/images/48.png',
      audio: process.env.PUBLIC_URL + '/sounds/V.wav', // Updated sound file path
    },
    W: {
      image: process.env.PUBLIC_URL + '/images/49.png',
      audio: process.env.PUBLIC_URL + '/sounds/W.wav', // Updated sound file path
    },
    WW: {
      image: process.env.PUBLIC_URL + '/images/50.png',
      audio: process.env.PUBLIC_URL + '/sounds/W.wav', // Updated sound file path
    },
    X: {
      image: process.env.PUBLIC_URL + '/images/51.png',
      audio: process.env.PUBLIC_URL + '/sounds/X.wav', // Updated sound file path
    },
    XX: {
      image: process.env.PUBLIC_URL + '/images/52.png',
      audio: process.env.PUBLIC_URL + '/sounds/X.wav', // Updated sound file path
    },
    Y: {
      image: process.env.PUBLIC_URL + '/images/53.png',
      audio: process.env.PUBLIC_URL + '/sounds/Y.wav', // Updated sound file path
    },
    YY: {
      image: process.env.PUBLIC_URL + '/images/54.png',
      audio: process.env.PUBLIC_URL + '/sounds/Y.wav', // Updated sound file path
    },
    
    z: {
      image: process.env.PUBLIC_URL + '/images/55.png',
      audio: process.env.PUBLIC_URL + '/sounds/Z.wav', // Updated sound file path
    },
    zz: {
      image: process.env.PUBLIC_URL + '/images/56.png',
      audio: process.env.PUBLIC_URL + '/sounds/Z.wav', // Updated sound file
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

export default LearnEnglish;