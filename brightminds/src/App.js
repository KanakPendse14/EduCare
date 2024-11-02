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
import AlphabetMatchPair from './pages/alphabetmatchpair';
import LearnVowels from './pages/learnvowels';
import LearnConsonants from './pages/learnconsonants';
import LearnShapes from './pages/learnshapes';
import LearnColours from './pages/learncolours';
import LearnEven from './pages/learneven';
import LearnOdd from './pages/learnodd';
import AddLearn from './pages/add_learn';
import SubLearn from './pages/sub_learn';
import Assessment from './pages/assessment';
import TestAdd from './pages/TestAdd';
import TestSubtract from './pages/TestSubtract';
import ShapeIdentifyingTest from './pages/ShapeIdentifyingTest';
import ColorIdentifyingTest from './pages/ColorIdentifyingTest';
import Profile from './pages/profilepage';
import testresultspage from './pages/testresultpage'
import TestResultPage from './pages/testresultpage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/listenandlearn" element={<ListenandLearnPage />} />
        <Route path="/vowels" element={<LearnVowelsPage/>} />
        <Route path="/threeletterwords" element={<LearnThreeLetterWordsPage />} />
        <Route path='/Everydaysentences' element={<DailyNecessorySentencesPage />} />
        <Route path="/numbertest" element={<NumberTest />} /> {/* Add route for NumberTest */}
        <Route path="/engtest" element={<EngTest />} /> {/* Add route for EngTest */}
        <Route path="/learneng" element={<LearnEng />} />
        <Route path="/learnmaths" element={<LearnMaths />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/results" element={<Dashboard />} />
        <Route path="/alphabetmatchpair" element={<AlphabetMatchPair />} />
        <Route path="/learnvowels" element={<LearnVowels/>} />
        <Route path="/learnconsonants" element={<LearnConsonants/>} />
        <Route path="/learnshapes" element={<LearnShapes/>} />
        <Route path="/learncolours" element={<LearnColours/>} />
        <Route path="/learneven" element={<LearnEven/>} />
        <Route path="/learnodd" element={<LearnOdd/>} />
        <Route path="/learnadd" element={<AddLearn/>} />
        <Route path="/learnsub" element ={<SubLearn/>} />
        <Route path="/assessment" element ={<Assessment/>} />
        <Route path="/addtest" element={<TestAdd/>} />
        <Route path="/subtest" element={<TestSubtract/>} />
        <Route path="/shapetest" element={<ShapeIdentifyingTest/>} />
        <Route path="/colourtest" element={<ColorIdentifyingTest/>} />
        <Route path='/profle' element={<Profile/>} />
        <Route path='/testresultpage' element={<TestResultPage/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
