import './Notification.css';

export function Notification({imgUrl, message, time, text, isNew}) {
    return (
        <section className={!isNew ? 'notification-container' : 'notification-container new-notification'}>
            <section className='img-container'>
                <img className='user-pic' src={imgUrl} alt='user-pic'/>
            </section>
            <section className='notification-content'>
                {message}
                <span className='Grayish-blue-text time'>{time}</span>
                
            </section>
        </section>
    )
}