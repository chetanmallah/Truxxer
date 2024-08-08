import React, { useRef } from 'react'
import back_icon from './assets/images/back-icon.png'
import next_icon from './assets/images/next-icon.png'
import user_1 from './assets/images/Chetan_Image.jpg'
import user_2 from './assets/images/user-2.png'
import user_3 from './assets/images/user-3.png'
import user_4 from './assets/images/user-4.png'
import './Testimonials.css'


const Testimonials = () => {

    const slider = useRef();
let tx = 0;

    const slideForward = () => {
       if(tx > -50) {
 tx -= 25;
}
slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = () => {
        if(tx < 0) {
        tx += 25
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
        

  return (
    <div className='testimonials'>
      <img src={next_icon} alt=""  className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt=""  className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
        <li>
            <div className="slide">
                <div className="user-info">
                    <img src={user_1} alt="" />
                    <div>
                        <h3>Chetan </h3>
                        <span>Mumbai, india</span>
                    </div>
                </div>
                <p>Booking a truck through this service has been a game-changer for our logistics. The process was seamless, the customer support was exceptional, and the truck arrived on time. Our business operations have significantly improved thanks to their reliable service.</p>
            </div>
        </li>
        <li>
            <div className="slide">
                <div className="user-info">
                    <img src={user_2} alt="" />
                    <div>
                        <h3>Chandan Mallah</h3>
                        <span>Banglore, india</span>
                    </div>
                </div>
                <p>I was impressed with the efficiency and professionalism of this truck booking service. The easy-to-use platform and prompt communication made the entire experience smooth and hassle-free. Highly recommend for anyone in need of reliable transportation for their loads.</p>
                </div>
        </li>
        <li>
            <div className="slide">
                <div className="user-info">
                    <img src={user_3} alt="" />
                    <div>
                        <h3>Priya Singh</h3>
                        <span>Bihar, india</span>
                    </div>
                </div>
                <p>Choosing this truck booking service was a great decision for our company's needs. The trucks are well-maintained, the booking process is straightforward, and the service is dependable. It’s comforting to know we can count on them for timely and efficient deliveries.</p>
            </div>
        </li>
        <li>
            <div className="slide">
                <div className="user-info">
                    <img src={user_4} alt="" />
                    <div>
                        <h3>Arpit</h3>
                        <span>Jharkhan, india</span>
                    </div>
                </div>
                <p>This service has exceeded our expectations in every way. From the intuitive booking system to the top-notch customer service, everything has been handled with care and professionalism. It's been a pleasure working with them for our transport needs.</p>
            </div>
        </li>
        
      </ul>
</div>
    </div>
  )
}

export default Testimonials
