import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './assets/login.jsx'; // Componente con mayúscula

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} /> {/* 'Login' con mayúscula */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
