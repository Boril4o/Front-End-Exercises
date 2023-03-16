import { useState } from 'react';
import { Notification } from './Notification';
import './App.css';
import './Responsive.css';

function App() {
  const markWebberMessage = <p className='message'><span className='username'>Mark Webber </span><span className='Grayish-blue-text'> reacted to your recent post </span><span className='Dark-grayish-blue Hover'> My first tournament today!</span><span className='red-dot'></span></p>;
  const angelaGrayMessage = <p className='message'><span className='username'>Angela Gray </span><span className='Grayish-blue-text'> followed you </span><span className='red-dot'></span></p>;
  const jacobThompsonMessage = <p className='message'><span className='username'>Jacob Thompson </span><span className='Grayish-blue-text'> has joined your group </span><span className='blue-text Hover'> Chess Club</span><span className='red-dot'></span></p>;
  const rizkyMessage = <p className='message'><span className='username'> Rizky Hasanuddin </span><span className='Grayish-blue-text'> sent you a private message</span></p>;
  const rizkyText = "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.";
  const kimberlyMessage = <p className='message'><span className='username'> Kimberly Smith </span><span className='Grayish-blue-text'> commented on your picture</span></p>;
  const nathanMessage = <p className='message'><span className='username'> Nathan Peterson </span><span className='Grayish-blue-text'> reacted to your recent post</span><span className='Dark-grayish-blue Hover'> 5 end-game strategies to increase your win rate</span></p>;
  const annaMessage = <p className='message'><span className='username'> Anna Kim </span><span className='Grayish-blue-text'> left the group</span><span className='blue-text Hover'> Chess Club</span></p>;

  return (
    <section className='notifications-conatiner'>
        <section className='notifications-info'>
          <section className='notifications-count'>
            <h1 id='title'>Notifications</h1>
            <span id='count'>3</span>
          </section>
          <p className='Grayish-blue-text Hover'>Mark all as read</p>
        </section>
        <section className='notifications'>
          <Notification imgUrl={'../assets/images/avatar-mark-webber.webp'} message={markWebberMessage} time={'1m ago'} isNew={true}/> 
          <Notification imgUrl={'../assets/images/avatar-angela-gray.webp'} message={angelaGrayMessage} time={'5m ago'} isNew={true}/>
          <Notification imgUrl={'../assets/images/avatar-jacob-thompson.webp'} message={jacobThompsonMessage} time={'1 day ago'} isNew={true}/>
          <Notification imgUrl={'../assets/images/avatar-rizky-hasanuddin.webp'} message={rizkyMessage} time={'5 days ago'} isNew={false} text={rizkyText}/>
          <Notification imgUrl={'../assets/images/avatar-kimberly-smith.webp'} message={kimberlyMessage} time={'1 week ago'} isNew={false} />
          <Notification imgUrl={'../assets/images/avatar-nathan-peterson.webp'} message={nathanMessage} time={'2 weeks ago'} isNew={false}/>
          <Notification imgUrl={'../assets/images/avatar-anna-kim.webp'} message={annaMessage} time={'2 weeks ago'} isNew={false} />
        </section>
    </section>
  );
}

export default App
