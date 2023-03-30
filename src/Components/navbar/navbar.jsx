import React from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLin} from 'react-icons/ri'; 
import logo from '../../assets/logo.svg';

const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar_links">
        <div className="gpt3__navbar_links_logo">
          <img src={logo} alt="logo"/>
          </div>
          <div className="gpt3__navbar_links_container">
            <p><a href="#home">Home</a></p>
            <p><a href="wgpt3">What is GPT?</a></p>
            <p><a href="#possibility">Possibility</a></p>
            <p><a href="#features">Features</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
      </div>
    </div>
  )
}

export default Navbar