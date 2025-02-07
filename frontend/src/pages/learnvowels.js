// import React, { useState, useRef, useEffect } from 'react';
// import { BsChevronCompactLeft, BsChevronCompactRight, BsVolumeUp } from 'react-icons/bs';
// import { RxDotFilled } from 'react-icons/rx';
// import { useNavigate } from 'react-router-dom';

// function LearnVowels() {
//   // Slide data with all the images and audio sources
//   const slides = {
//     frontpage: {
//       image: process.env.PUBLIC_URL + '/images/3.png',
      
//     },
    
//     A: {
//       image: process.env.PUBLIC_URL + '/images/4.png',
//       audio: process.env.PUBLIC_URL + '/sounds/A.wav', // Updated sound file path
//     },
//     AA: {
//       image: process.env.PUBLIC_URL + '/images/5.png',
//       audio: process.env.PUBLIC_URL + '/sounds/A.wav', // Updated sound file path
//     },
   
//     E: {
//       image: process.env.PUBLIC_URL + '/images/6.png',
//       audio: process.env.PUBLIC_URL + '/sounds/E.wav', // Updated sound file path
//     },
//     EE: {
//       image: process.env.PUBLIC_URL + '/images/7.png',
//       audio: process.env.PUBLIC_URL + '/sounds/E.wav', // Updated sound file path
//     },
    
//     I: {
//       image: process.env.PUBLIC_URL + '/images/8.png',
//       audio: process.env.PUBLIC_URL + '/sounds/I.wav', // Updated sound file path
//     },
//     II: {
//       image: process.env.PUBLIC_URL + '/images/9.png',
//       audio: process.env.PUBLIC_URL + '/sounds/I.wav', // Updated sound file path
//     },
    
//     O: {
//       image: process.env.PUBLIC_URL + '/images/10.png',
//       audio: process.env.PUBLIC_URL + '/sounds/O.wav', // Updated sound file path
//     },
//     OO: {
//       image: process.env.PUBLIC_URL + '/images/11.png',
//       audio: process.env.PUBLIC_URL + '/sounds/O.wav', // Updated sound file path
//     },
    
//     U: {
//       image: process.env.PUBLIC_URL + '/images/12.png',
//       audio: process.env.PUBLIC_URL + '/sounds/U.wav', // Updated sound file path
//     },
//     UU: {
//       image: process.env.PUBLIC_URL + '/images/13.png',
//       audio: process.env.PUBLIC_URL + '/sounds/U.wav', // Updated sound file path
//     },
    
//   };

  
//   // Convert slides object into an array of slide objects
//   const slideArray = Object.keys(slides).map((key) => ({
//     url: slides[key].image,
//     audioSrc: slides[key].audio,
//   }));

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const audioRefs = useRef([]);

//   const navigate = useNavigate();

//   // Go to the previous slide
//   const prevSlide = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//       pauseAudio(currentIndex);
//     }
//   };

//   // Go to the next slide
//   const nextSlide = () => {
//     if (currentIndex < slideArray.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//       pauseAudio(currentIndex);
//     }
//   };

//   // Go to a specific slide
//   const goToSlide = (slideIndex) => {
//     pauseAudio(currentIndex);
//     setCurrentIndex(slideIndex);
//   };

//   // Pause the audio on the current slide
//   const pauseAudio = (index) => {
//     if (audioRefs.current && audioRefs.current[index]) {
//       audioRefs.current[index].pause();
//     }
//   };

//   // Toggle audio playback for the current slide
//   const handleAudioToggle = (slideIndex) => {
//     const audioElement = audioRefs.current[slideIndex];
//     if (audioElement) {
//       if (audioElement.paused) {
//         audioElement.play();
//       } else {
//         audioElement.pause();
//       }
//     }
//   };

//   // Handle keypresses for slide navigation
//   const handleKeyPress = (event) => {
//     if (event.key === 'ArrowLeft') {
//       prevSlide();
//     } else if (event.key === 'ArrowRight') {
//       nextSlide();
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('keydown', handleKeyPress);
//     return () => {
//       window.removeEventListener('keydown', handleKeyPress);
//     };
//   }, [currentIndex]);

//   // Handle exit button click
//   const handleExit = () => {
//     navigate('/listenandlearn');
//   };

//   // Progress bar percentage calculation
//   const progressPercentage = ((currentIndex + 1) / slideArray.length) * 100;

//   return (
//     <div className='max-w-[1720px] h-[740px] w-full m-0 py-0 px-4 relative group'>
//       <div
//         style={{ backgroundImage: `url(${slideArray[currentIndex].url})` }}
//         className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
//       >
//         {/* Only show audio button if the current slide has audio */}
//         {slideArray[currentIndex].audioSrc && (
//           <div className='absolute top-5 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer' onClick={() => handleAudioToggle(currentIndex)}>
//             <BsVolumeUp size={30} />
//           </div>
//         )}
//       </div>

//       {currentIndex > 0 && (
//         <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer' onClick={prevSlide}>
//           <BsChevronCompactLeft size={30} />
//         </div>
//       )}

//       {currentIndex < slideArray.length - 1 && (
//         <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer' onClick={nextSlide}>
//           <BsChevronCompactRight size={30} />
//         </div>
//       )}

//       {/* Progress Bar */}
//       <div className="progress-container">
//         <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
//       </div>
//       <p>{Math.round(progressPercentage)}% completed</p>

//       {/* Navigation Dots */}
//       <div className='flex top-0 justify-center py-2'>
//         {slideArray.map((_, slideIndex) => (
//           <div key={`dot-${slideIndex}`} onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer'>
//             <RxDotFilled />
//           </div>
//         ))}
//       </div>

//       {/* Audio Elements */}
//       {slideArray.map((slide, slideIndex) => (
//         <audio key={`audio-${slideIndex}`} ref={(el) => (audioRefs.current[slideIndex] = el)} src={slide.audioSrc} preload='none' />
//       ))}

//       {/* Exit Button */}
//       <div className='absolute top-7 left-8'>
//         <button
//           onClick={handleExit}
//           className='bg-black/20 text-white px-7 py-3 rounded-full shadow-lg hover:bg-black/30 transition duration-300'
//         >
//           Exit
//         </button>
//       </div>
//     </div>
//   );
// }

// export default LearnVowels;




import React, { useState, useRef, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight, BsVolumeUp } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

function LearnVowels() {
  const [slides, setSlides] = useState([]); // State to hold slide data
  const [loading, setLoading] = useState(true); // State for loading
  const [currentIndex, setCurrentIndex] = useState(0);
  const audioRefs = useRef([]);
  const navigate = useNavigate();

  // Slide data structure
  const slideData = [
    {
      id: 'frontpage',
      image: process.env.PUBLIC_URL + '/images/3.png',
      audio: null,
    },
    {
      id: 'A',
      image: process.env.PUBLIC_URL + '/images/4.png',
      audio: process.env.PUBLIC_URL + '/sounds/A.wav',
    },
    {
      id: 'AA',
      image: process.env.PUBLIC_URL + '/images/5.png',
      audio: process.env.PUBLIC_URL + '/sounds/A.wav',
    },
    {
      id: 'E',
      image: process.env.PUBLIC_URL + '/images/6.png',
      audio: process.env.PUBLIC_URL + '/sounds/E.wav',
    },
    {
      id: 'EE',
      image: process.env.PUBLIC_URL + '/images/7.png',
      audio: process.env.PUBLIC_URL + '/sounds/E.wav',
    },
    {
      id: 'I',
      image: process.env.PUBLIC_URL + '/images/8.png',
      audio: process.env.PUBLIC_URL + '/sounds/I.wav',
    },
    {
      id: 'II',
      image: process.env.PUBLIC_URL + '/images/9.png',
      audio: process.env.PUBLIC_URL + '/sounds/I.wav',
    },
    {
      id: 'O',
      image: process.env.PUBLIC_URL + '/images/10.png',
      audio: process.env.PUBLIC_URL + '/sounds/O.wav',
    },
    {
      id: 'OO',
      image: process.env.PUBLIC_URL + '/images/11.png',
      audio: process.env.PUBLIC_URL + '/sounds/O.wav',
    },
    {
      id: 'U',
      image: process.env.PUBLIC_URL + '/images/12.png',
      audio: process.env.PUBLIC_URL + '/sounds/U.wav',
    },
    {
      id: 'UU',
      image: process.env.PUBLIC_URL + '/images/13.png',
      audio: process.env.PUBLIC_URL + '/sounds/U.wav',
    },
  ];

  useEffect(() => {
    // Setting the slides from slideData
    setSlides(slideData);
    setLoading(false); // Set loading to false as we have the slides now
  }, []);

  // Go to the previous slide
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      pauseAudio(currentIndex);
    }
  };

  // Go to the next slide
  const nextSlide = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
      pauseAudio(currentIndex);
    }
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

  // Handle exit button click
  const handleExit = () => {
    navigate('/listenandlearn');
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading state until data is fetched
  }

  return (
    <div className='max-w-[1720px] h-[740px] w-full m-0 py-0 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }} // Access the image directly
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
      >
        {/* Display slide ID on the slide */}
        <div className="absolute bottom-5 left-5 text-xl text-white bg-black/50 p-2 rounded">
          Slide ID: {slides[currentIndex].slideId} {/* Display the current slide ID */}
        </div>

        {/* Only show audio button if the current slide has audio */}
        {slides[currentIndex].audio && (
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

      {/* Audio Elements */}
      {slides.map((slide, slideIndex) => (
        slide.audio && (
          <audio key={`audio-${slideIndex}`} ref={(el) => (audioRefs.current[slideIndex] = el)} src={slide.audio} preload='none' />
        )
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

export default LearnVowels;
