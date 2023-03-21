import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HamburgerMenu from './hamburgerMenu/.';
import Home from './home/.';
import About from './about/.';
import Contact from './contact/.';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HamburgerMenu />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);