// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import ListenandLearnPage from './pages/ListenandLearnPage';


function App() {
  return (
    <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/listenandlearn" element={<ListenandLearnPage />} />
            </Routes>
        </Router>

  );
}

export default App;
