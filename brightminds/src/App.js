// // import logo from './logo.svg';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Login from './components/login';
// import ListenandLearnPage from './pages/ListenandLearnPage';
// import LearnVowelsPage from './pages/LearnVowelsPage';
// import LearnThreeLetterWordsPage from './pages/LearnThreeLetterswordPage';
// import DailyNecessorySentencesPage from './pages/DailyNecessorySentencesPage';


// function App() {
//   return (
//     <Router>
//             <Routes>
//                 <Route path="/" element={<Login />} />
//                 <Route path="/listenandlearn" element={<ListenandLearnPage />} />
//                 <Route path="/vowels" element={<LearnVowelsPage />} />
//                 <Route path="/threeletterwords" element={<LearnThreeLetterWordsPage />} />
//                 <Route path='/Everydaysentences' element={<DailyNecessorySentencesPage/>}/>
//             </Routes>
//         </Router>

//   );
// }

// export default App;



// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import ListenandLearnPage from './pages/ListenandLearnPage';
import LearnVowelsPage from './pages/LearnVowelsPage';
import LearnThreeLetterWordsPage from './pages/LearnThreeLetterswordPage';
import DailyNecessorySentencesPage from './pages/DailyNecessorySentencesPage';
import NumberTest from './pages/number_test'; // Import the NumberTest component
import EngTest from './pages/eng_test'; // Import the EngTest component
import LearnEng from './pages/learnEng';
import LearnMaths from './pages/learnMaths';
import HomePage from './pages/home';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/listenandlearn" element={<ListenandLearnPage />} />
        <Route path="/vowels" element={<LearnVowelsPage />} />
        <Route path="/threeletterwords" element={<LearnThreeLetterWordsPage />} />
        <Route path='/Everydaysentences' element={<DailyNecessorySentencesPage />} />
        <Route path="/numbertest" element={<NumberTest />} /> {/* Add route for NumberTest */}
        <Route path="/engtest" element={<EngTest />} /> {/* Add route for EngTest */}
        <Route path="/learneng" element={<LearnEng />} />
        <Route path="/learnmaths" element={<LearnMaths />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/results" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
