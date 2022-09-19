import React from 'react'; 

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from './testStrategin/main/main';

function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
