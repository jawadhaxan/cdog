import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      {/* <h2>The First Nuclear Token is Live!</h2> */}
      {/* <p style = {{marginLeft:'50%', marginTop:'-40%'}}>The First Nuclear Token is Live!</p> */}
      {/* <div className='hero-btns'>
        
        <Button
        style = {{marginLeft:'100%'}}
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Pancake Swap 
          <i className='far fa-play-circle' />
        </Button>
      </div> */}
    </div>
    
  );
}

export default HeroSection;
