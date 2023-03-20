import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HamburgerMenu from './HamburgerMenu';
import Home from './Home';
import About from './About';
import Contact from './Contact';

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