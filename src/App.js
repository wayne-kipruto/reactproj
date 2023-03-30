import React from 'react';
import './App.css';

import { Header, Footer, Whatgpt3, Blog, Features, Possibility } from './Containers';
import { Brand, Cta, Navbar } from './Components';


const App = () => {
  return (
    <div className="App">

      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatgpt3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App