import React from 'react';
import './App.css';
import './styles/sb-admin-2.min.css'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { Login } from './Pages/Account';
import { Admin } from './Pages/Admin/Admin';
import { PrivateRoute } from './components';

function App() {
  return (
    <div className='App' id="wrapper">
      <Router>
        <Routes>
        <Route path="/" element={<PrivateRoute><Login /></PrivateRoute>} />
        <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
