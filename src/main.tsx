import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import FindJobPage from './pages/FindJobPage.tsx';
import EmployersPage from './pages/EmployersPage.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<FindJobPage />} />
        <Route path='/employers' element={<EmployersPage />}/>
      </Routes>
    </Router>
  
)
