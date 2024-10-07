// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import ListenandLearnPage from './pages/ListenandLearnPage';
import LearnVowelsPage from './pages/LearnVowelsPage';
import LearnThreeLetterWordsPage from './pages/LearnThreeLetterswordPage';
import DailyNecessorySentencesPage from './pages/DailyNecessorySentencesPage';


function App() {
  return (
    <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/listenandlearn" element={<ListenandLearnPage />} />
                <Route path="/vowels" element={<LearnVowelsPage />} />
                <Route path="/threeletterwords" element={<LearnThreeLetterWordsPage />} />
                <Route path='/Everydaysentences' element={<DailyNecessorySentencesPage/>}/>
            </Routes>
        </Router>

  );
}

export default App;
