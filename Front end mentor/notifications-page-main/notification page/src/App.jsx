import { useState } from 'react';
import { Notification } from './Notification';
import './App.css';

function App() {
  const markWebberMessage = <p className='message'><span className='username'>Mark Webber </span><span className='Grayish-blue-text'> reacted to your recent post </span><span className='Dark-grayish-blue'> My first tournament today!</span><span className='red-dot'></span></p>;
  const angelaGrayMessage = <p className='message'><span className='username'>Angela Gray </span><span className='Grayish-blue-text'> followed you </span><span className='red-dot'></span></p>;
  const jacobThompsonMessage = <p className='message'><span className='username'>Jacob Thompson </span><span className='Grayish-blue-text'> has joined your group </span><span className='blue-text'> Chess Club</span><span className='red-dot'></span></p>;

  return (
    <section className='notifications-conatiner'>
        <section className='notifications-info'>
          <section className='notifications-count'>
            <h1 id='title'>Notifications</h1>
            <span id='count'>3</span>
          </section>
          <p className='Grayish-blue-text'>Mark all as read</p>
        </section>
        <section className='notifications'>
          <Notification imgUrl={'../assets/images/avatar-mark-webber.webp'} message={markWebberMessage} time={'1m ago'} isNew={true}/> 
          <Notification imgUrl={'../assets/images/avatar-angela-gray.webp'} message={angelaGrayMessage} time={'5m ago'} isNew={true}/>
          <Notification imgUrl={'../assets/images/avatar-jacob-thompson.webp'} message={jacobThompsonMessage} time={'1 day ago'} isNew={true}/>
        </section>
    </section>
  );
}

export default App
