
import './App.css'
import {  Routes, Route } from 'react-router';
import Menu from './pages/Menu';
import HomePage from './pages/HomePage';
import DriftPage from './pages/DriftPage';
import TimeAttackPage from './pages/TimeAttackPage';
import ForzaPage from './pages/ForzaPage';
import ErrorPage from './pages/ErrorPage';




export default function App() {
  return (
    <>
        <Menu />
        <div className="page">
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/drift" element={<DriftPage/>} />
          <Route path="/timeattack" element={<TimeAttackPage/>} />
          <Route path="/forza" element={<ForzaPage/>} />
          <Route path="*" element={<ErrorPage/>} />
      </Routes>
        </div>
      </>
  );
}