import React from 'react';
import AppNavbar from './components/AppNavbar';
// import logo from './logo.svg';
// import './App.css';
// import Header from './components/Header';
import Footer from './components/Footer';
import ClassPage from './pages/ClassPage';
import InstructorPage from './pages/InstructorPage';
import StudentPage from './pages/StudentPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <AppNavbar />
        <Routes>
          <Route 
            path='/' 
            element={<ClassPage/>} 
          />
          <Route 
            path='/' 
            element={<Footer/>} 
          />
          <Route 
            path='/instructor' 
            element={<InstructorPage/>} 
          />
            <Route 
            path='/student' 
            element={<StudentPage />} 
          />
          <Route 
            path='*'
            element={<h1 className='display-2'>Wrong page!</h1>}
          />
        </Routes>
      </>
    </Router>

  );
}

export default App;