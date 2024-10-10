import React, { useState, useRef, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight, BsVolumeUp } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function LearnEng() {  // Function name updated to LearnEng

  const slides = [
    {
      url: 'https://i.im.ge/2024/10/03/kU1ynT.English.png',
      audioSrc: '', // Replace with audio path
    },
    {
      url: 'https://i.im.ge/2024/10/03/kUDJEf.2.png',
      audioSrc: 'https://evolution.voxeo.com/library/audio/prompts/alphabet/A.wav',
    },
    {
      url: 'https://i.im.ge/2024/10/03/kUDBdr.3.png',
      audioSrc: 'https://evolution.voxeo.com/library/audio/prompts/alphabet/A.wav',
    },
    {
      url: 'https://i.im.ge/2024/10/03/kUIcRc.English-1.png',
      audioSrc: 'https://evolution.voxeo.com/library/audio/prompts/alphabet/A.wav',
    },
    {
      url: 'https://i.im.ge/2024/10/07/kieZDK.6.png',
      audioSrc: 'https://evolution.voxeo.com/library/audio/prompts/alphabet/B.wav',
    },
    {
      url: 'https://i.im.ge/2024/10/07/kieKE9.7.png',
      audioSrc: 'https://evolution.voxeo.com/library/audio/prompts/alphabet/B.wav',
    },
    {
      url: 'https://i.im.ge/2024/10/07/kieVJX.8.png',
      audioSrc: 'https://evolution.voxeo.com/library/audio/prompts/alphabet/B.wav',
    },
    {
      url: 'https://i.im.ge/2024/10/07/kiekS8.9.png',
      audioSrc: 'https://evolution.voxeo.com/library/audio/prompts/alphabet/C.wav',
    },
    {
      url: 'https://i.im.ge/2024/10/07/kiecrS.10.png',
      audioSrc: 'https://evolution.voxeo.com/library/audio/prompts/alphabet/C.wav',
    },
    {
      url: 'https://i.im.ge/2024/10/07/kiexSa.11.png',
      audioSrc: 'https://evolution.voxeo.com/library/audio/prompts/alphabet/C.wav',
    },
    {
      url: 'https://i.im.ge/2024/10/07/kieACG.12.png',
      audioSrc: 'https://evolution.voxeo.com/library/audio/prompts/alphabet/D.wav',
    },
    {
      url: 'https://i.im.ge/2024/10/07/kie36J.13.png',
      audioSrc: 'https://evolution.voxeo.com/library/audio/prompts/alphabet/D.wav',
    },
    {
      url: 'https://i.im.ge/2024/10/07/kieCvx.14.png',
      audioSrc: 'https://evolution.voxeo.com/library/audio/prompts/alphabet/D.wav',
    },
    {
      url: 'https://i.im.ge/2024/10/07/kieg0z.15.png',
      audioSrc: 'https://evolution.voxeo.com/library/audio/prompts/alphabet/E.wav',
    },
    {
      url: 'https://i.im.ge/2024/10/07/kie8g6.16.png',
      audioSrc: 'https://evolution.voxeo.com/library/audio/prompts/alphabet/E.wav',
    },
    {
      url: 'https://i.im.ge/2024/10/07/kieWMF.17.png',
      audioSrc: 'https://evolution.voxeo.com/library/audio/prompts/alphabet/E.wav',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const audioRefs = useRef([]); // Array of refs for each audio element

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      pauseAudio(currentIndex);
    }
  };

  const nextSlide = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
      pauseAudio(currentIndex);
    }
  };

  const goToSlide = (slideIndex) => {
    pauseAudio(currentIndex);
    setCurrentIndex(slideIndex);
  };

  const pauseAudio = (index) => {
    if (audioRefs.current[index]) {
      audioRefs.current[index].pause();
    }
  };

  const handleAudioToggle = (slideIndex) => {
    const audioElement = audioRefs.current[slideIndex];
    if (audioElement.paused) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  };

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

  const handleExit = () => {
    console.log("Exit button clicked");
  };

  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
      >
        {currentIndex !== 0 && (
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

      {currentIndex < slides.length - 1 && (
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer' onClick={nextSlide}>
          <BsChevronCompactRight size={30} />
        </div>
      )}

      <div className='flex top-0 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer'>
            <RxDotFilled />
          </div>
        ))}
      </div>

      {slides.map((slide, slideIndex) => (
        <audio key={slideIndex} ref={(el) => (audioRefs.current[slideIndex] = el)} src={slide.audioSrc} preload='none' />
      ))}

      <div className='absolute top-20 left-10'>
        <button
          onClick={handleExit}
          className='bg-black/20 text-white px-10 py-3 rounded-full shadow-lg hover:bg-black/30 transition duration-300'
        >
          Exit
        </button>
      </div>
    </div>
  );
}

export default LearnEng;
