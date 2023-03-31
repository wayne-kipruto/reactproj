import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';


const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">Header
      <div className='gpt3__header_content'>
        <h1 className='gradient__text'>Let's build Something amazing with GPT-3 OpenAI</h1>
        <div className='gpt3__header_content_input'>
          <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          <input type="email" placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header_content_people'>
          <img src={people} alt='people'/>
          <p>1600 people have requested access to visit in the last 24 hours</p>

        </div>
      </div>
      <div className="gpt3__header_image">
        <img src={ai} alt='AI'/>
      </div>
    </div>
  )
}

export default Header