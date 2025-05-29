// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

// const SmallStory = () => {
//   const navigate = useNavigate();
  
//   const storyLines = [
//     "Once upon a time, there was a rabbit.",
//     "The rabbit was very proud of his speed.",
//     "One day, he challenged the slow turtle.",
//     "The turtle accepted the challenge calmly.",
//     "The race began early next morning.",
//     "The rabbit ran fast and got far ahead.",
//     "Confident, the rabbit took a nap under a tree.",
//     "Meanwhile, the turtle kept walking slowly.",
//     "The rabbit overslept and woke up late.",
//     "The turtle was very close to the finish line.",
//     "The rabbit ran quickly, but it was too late.",
//     "The turtle crossed the line and won the race.",
//     "Slow and steady wins the race!",
//   ];

//   const storyImages = [
//     "/images/rabbit.png",
//     "/images/rabbit_proud.png",
//     "/images/challenge.png",
//     "/images/turtle_calm.png",
//     "/images/start_race.png",
//     "/images/rabbit_running.png",
//     "/images/rabbit_sleeping.png",
//     "/images/turtle_calm.png",
//     "/images/rabbit_wakes.png",
//     "/images/turtle_near_finish.png",
//     "/images/rabbit_running_fast.png",
//     "/images/slow_and_steady.png",
//     "/images/slow_and_steady.png",
//   ];

//   const [currentLine, setCurrentLine] = useState(0);
//   const [highlightedWordIndex, setHighlightedWordIndex] = useState(null);

//   const handlePlay = () => {
//     const words = storyLines[currentLine].split(' ');
//     let index = 0;

//     const speakWord = () => {
//       if (index < words.length) {
//         setHighlightedWordIndex(index);
//         const utterance = new SpeechSynthesisUtterance(words[index]);
//         utterance.rate = 0.8;
//         utterance.onend = () => {
//           index++;
//           speakWord();
//         };
//         speechSynthesis.speak(utterance);
//       } else {
//         setHighlightedWordIndex(null);
//       }
//     };

//     speakWord();
//   };

//   const handleNext = () => {
//     if (currentLine < storyLines.length - 1) {
//       setCurrentLine(currentLine + 1);
//       setHighlightedWordIndex(null);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentLine > 0) {
//       setCurrentLine(currentLine - 1);
//       setHighlightedWordIndex(null);
//     }
//   };

//   const handleExit = () => {
//     navigate('/listenandlearn');  // or wherever you want to navigate
//   };

//   const progressPercentage = ((currentLine + 1) / storyLines.length) * 100;

//   return (
//     <div className="max-w-[1720px] h-[740px] w-full m-0 py-0 px-4 relative group">

//       {/* Navbar */}
//       <div className="flex justify-between items-center py-4">
//         <h1 className="text-3xl font-bold">Small Story: Rabbit and Turtle</h1>
//         <button
//           onClick={handleExit}
//           className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Exit
//         </button>
//       </div>

//       {/* Progress Bar */}
//       <div className="w-full bg-gray-300 h-2 rounded">
//         <div
//           className="bg-green-500 h-2 rounded"
//           style={{ width: `${progressPercentage}%` }}
//         ></div>
//       </div>

//       {/* Main Content */}
//       <div className="flex items-center justify-between mt-8">
        
//         {/* Left Side - Story */}
//         <div className="flex-1 p-8">
//           <p className="text-2xl leading-relaxed">
//             {storyLines[currentLine].split(' ').map((word, index) => (
//               <span
//                 key={index}
//                 style={{
//                   backgroundColor: highlightedWordIndex === index ? 'yellow' : 'transparent',
//                   marginRight: '5px',
//                   padding: '2px',
//                   borderRadius: '4px',
//                 }}
//               >
//                 {word}
//               </span>
//             ))}
//           </p>

//           {/* Controls */}
//           <div className="flex mt-8 items-center">
//             <button
//               onClick={handlePrevious}
//               disabled={currentLine === 0}
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
//             >
//               <BsChevronCompactLeft size={24} />
//             </button>

//             <button
//               onClick={handlePlay}
//               className="mx-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded"
//             >
//               Play
//             </button>

//             <button
//               onClick={handleNext}
//               disabled={currentLine === storyLines.length - 1}
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
//             >
//               <BsChevronCompactRight size={24} />
//             </button>
//           </div>
//         </div>

//         {/* Right Side - Image */}
//         <div className="flex-1 p-8 text-center">
//           <img
//             src={storyImages[currentLine]}
//             alt="Story illustration"
//             className="rounded-lg shadow-lg w-full h-auto"
//           />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default SmallStory




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const SmallStory = () => {
  const navigate = useNavigate();
  
  const storyLines = [
    "Once upon a time, there was a rabbit.",
    "The rabbit was very proud of his speed.",
    "One day, he challenged the slow turtle.",
    "The turtle accepted the challenge calmly.",
    "The race began early next morning.",
    "The rabbit ran fast and got far ahead.",
    "Confident, the rabbit took a nap under a tree.",
    "Meanwhile, the turtle kept walking slowly.",
    "The rabbit overslept and woke up late.",
    "The turtle was very close to the finish line.",
    "The rabbit ran quickly, but it was too late.",
    "The turtle crossed the line and won the race.",
    "Slow and steady wins the race!",
  ];

  const storyImages = [
    "/images/rabbit.png",
    "/images/rabbit_proud.png",
    "/images/challenge.png",
    "/images/turtle_calm.png",
    "/images/start_race.png",
    "/images/rabbit_running.png",
    "/images/rabbit_sleeping.png",
    "/images/turtle_calm.png",
    "/images/rabbit_wakes.png",
    "/images/turtle_near_finish.png",
    "/images/rabbit_running_fast.png",
    "/images/slow_and_steady.png",
    "/images/slow_and_steady.png",
  ];

  const [currentLine, setCurrentLine] = useState(0);
  const [highlightedWordIndex, setHighlightedWordIndex] = useState(null);

  const handlePlay = () => {
    const words = storyLines[currentLine].split(' ');
    let index = 0;

    const speakWord = () => {
      if (index < words.length) {
        setHighlightedWordIndex(index);
        const utterance = new SpeechSynthesisUtterance(words[index]);
        utterance.rate = 0.8;
        utterance.onend = () => {
          index++;
          speakWord();
        };
        speechSynthesis.speak(utterance);
      } else {
        setHighlightedWordIndex(null);
      }
    };

    speakWord();
  };

  const handleNext = () => {
    if (currentLine < storyLines.length - 1) {
      setCurrentLine(currentLine + 1);
      setHighlightedWordIndex(null);
    }
  };

  const handlePrevious = () => {
    if (currentLine > 0) {
      setCurrentLine(currentLine - 1);
      setHighlightedWordIndex(null);
    }
  };

  const handleExit = () => {
    navigate('/listenandlearn');
  };

  const progressPercentage = ((currentLine + 1) / storyLines.length) * 100;

  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      padding: '20px',
      background: 'linear-gradient(to bottom right, #e0f7fa, #b2ebf2, #80deea, #4dd0e1)',
      display: 'flex',
      flexDirection: 'column'
    }}>
      
      {/* Navbar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#0277bd' }}>
          Small Story: Rabbit and Turtle
        </h1>
        <button
          onClick={handleExit}
          style={{
            backgroundColor: '#ef5350',
            color: 'white',
            fontWeight: 'bold',
            padding: '10px 20px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Exit
        </button>
      </div>

      {/* Progress Bar */}
      <div style={{
        width: '100%',
        backgroundColor: '#cfd8dc',
        height: '10px',
        borderRadius: '5px',
        overflow: 'hidden',
        marginBottom: '30px'
      }}>
        <div
          style={{
            width: `${progressPercentage}%`,
            backgroundColor: '#26c6da',
            height: '100%',
            transition: 'width 0.5s ease'
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
        
        {/* Left Side - Story */}
        <div style={{
          flex: '1',
          padding: '20px',
          minWidth: '300px'
        }}>
          <p style={{
            fontSize: '24px',
            lineHeight: '1.6',
            color: '#01579b'
          }}>
            {storyLines[currentLine].split(' ').map((word, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: highlightedWordIndex === index ? 'yellow' : 'transparent',
                  marginRight: '6px',
                  padding: '3px 5px',
                  borderRadius: '4px',
                  transition: 'background-color 0.3s ease'
                }}
              >
                {word}
              </span>
            ))}
          </p>

          {/* Controls */}
          <div style={{
            display: 'flex',
            marginTop: '30px',
            alignItems: 'center'
          }}>
            <button
              onClick={handlePrevious}
              disabled={currentLine === 0}
              style={{
                backgroundColor: '#42a5f5',
                color: 'white',
                fontWeight: 'bold',
                padding: '10px 15px',
                borderRadius: '8px',
                border: 'none',
                cursor: currentLine === 0 ? 'not-allowed' : 'pointer',
                opacity: currentLine === 0 ? 0.5 : 1
              }}
            >
              <BsChevronCompactLeft size={24} />
            </button>

            <button
              onClick={handlePlay}
              style={{
                margin: '0 20px',
                backgroundColor: '#26c6da',
                color: 'white',
                fontWeight: 'bold',
                padding: '10px 20px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Play
            </button>

            <button
              onClick={handleNext}
              disabled={currentLine === storyLines.length - 1}
              style={{
                backgroundColor: '#42a5f5',
                color: 'white',
                fontWeight: 'bold',
                padding: '10px 15px',
                borderRadius: '8px',
                border: 'none',
                cursor: currentLine === storyLines.length - 1 ? 'not-allowed' : 'pointer',
                opacity: currentLine === storyLines.length - 1 ? 0.5 : 1
              }}
            >
              <BsChevronCompactRight size={24} />
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div style={{
          flex: '1',
          padding: '20px',
          textAlign: 'center',
          minWidth: '300px'
        }}>
          <img
            src={storyImages[currentLine]}
            alt="Story illustration"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              maxWidth: '500px'
            }}
          />
        </div>

      </div>
    </div>
  );
};

export default SmallStory;
