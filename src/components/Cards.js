import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <center> 
        <h1 style = {{ color:'goldenrod', fontFamily:'cursive', fontSize:60 }}>About The Project</h1>
        <h2 style = {{maxWidth:'50%',textAlign:"justify" , justifyContent:"center", color:'goldenrod',  }}>
        Welcome to the snoop doge community, we are pleased to welcome you to our community and look forward to having you join us on the start of this new journey. The team at snoop doge aim to provide a whale and rug-pull safe friendly environment for our community to invest in and purchase NFTS with peace of mind. Once the pre sale sells out, we will launch on pancake swap or as soon as the timer runs out!
        </h2>
      </center>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/test.png'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              // label='Adventure'
              // path='/services'
            />
            <CardItem
              src='images/test2.png'
              text='Travel through the Islands of Bali in a Private Cruise'
              // label='Luxury'
              // path='/services'
            />
            <CardItem
              src='images/test3.png'
              text='Travel through the Islands of Bali in a Private Cruise'
              // label='Luxury'
              // path='/services'
            />
          </ul>
          {/* <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='
               Come for the crypto, stay for the community! The “SnoopDoge Family” is the most fun and unique in the crypto space. Join folks from all over the world committed to making money while having a laugh!'
              label='Community First'
              path='/'
            />
            <CardItem
              src='images/img-2.jpg'
              text=' Every transaction (buy and sell) rewards holders 5% according to their stake!'
              label='Earn $SNOOPDOGE by Holding $SNOOPDOGE'
              path='/'
            />

            <CardItem
              src='images/img-2.jpg'
              text='Automatically generate liquidity towards PancakeSwap pool from every transaction (5%).  '
              label=' Auto-Liquidity Pool'
              path='/'
            />
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;
