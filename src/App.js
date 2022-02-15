import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './component/Home';
import Toggle from './component/Toggle';
import Modal from './component/Modal';
import AddTags from './component/AddTags';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element ={<Home/>} />
            <Route path="/Toggle" element={<Toggle/>} />
            <Route path="/Modal" element={<Modal/>} />
            <Route path="/AddTags" element={<AddTags/>} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
