import React, { useState } from 'react';
import card from "../Images/card_img.png"
import { useNavigate } from "react-router-dom";
import "./pay.css"
const Payment = () => {
  const [toastActive, setToastActive] = useState(false);
  const [progressActive, setProgressActive] = useState(false);
  const navigate= useNavigate()
  const handleButtonClick = () => {
    setToastActive(true);
    setProgressActive(true);

    setTimeout(() => {
      setToastActive(false);
    }, 5000);

    setTimeout(() => {
      setProgressActive(false);
    }, 5300);
  };

  const handleCloseClick = () => {
    setToastActive(false);

    setTimeout(() => {
      setProgressActive(false);
    }, 300);
  };

  return (
    
    <div id='empty'>
        <div id='confermation'>
            <h2>A step twoards healthy lifestyle</h2>
        </div>


        <div>
      {toastActive && (
        <div className="toastP activeP">
          <div className="toast-contentP">
            <i className="fas fa-solid fa-check check"></i>

            <div className="messageP">
              <span className="textP text-1">Success</span>
              <span className="textP text-2">Thank you! See You Soon</span>
            </div>
          </div>
          <i className="fa-solid fa-xmark close" onClick={handleCloseClick}></i>

          <div className="progressP"></div>

          <div>
            <button id="homeP" onClick={()=>navigate("/")}>
             HOMEPAGE
            </button>
          </div>
        </div>
      )}

      <div className="containerP">
        <div className="rowP">
          <div className="colP">
            <h3 className="titleP">billing address</h3>

            <div className="inputBoxP">
              <span>full name :</span>
              <input type="text" placeholder="Enter name" />
            </div>
            <div className="inputBoxP">
              <span>email :</span>
              <input type="email" placeholder="Enter email" />
            </div>
            <div className="inputBoxP">
              <span>address :</span>
              <input type="text" placeholder="room - street - locality" />
            </div>
            <div className="inputBoxP">
              <span>city :</span>
              <input type="text" placeholder="Enter city" />
            </div>

            <div className="flexP">
              <div className="inputBoxP">
                <span>state :</span>
                <input type="text" placeholder="india" />
              </div>
              <div className="inputBoxP">
                <span>zip code :</span>
                <input type="text" placeholder="123 456" />
              </div>
            </div>
          </div>

          <div className="colP">
            <h3 className="titleP">payment</h3>

            <div className="inputBoxP">
              <span>cards accepted :</span>
              <img src={card} alt="" />
            </div>
            <div className="inputBoxP">
              <span>name on card :</span>
              <input type="text" placeholder="Enter name" />
            </div>
            <div className="inputBoxP">
              <span>credit card number :</span>
              <input type="number" placeholder="1111-2222-3333-4444" />
            </div>
            <div className="inputBoxP">
              <span>exp month :</span>
              <input type="text" placeholder="january" />
            </div>

            <div className="flexP">
              <div className="inputBoxP">
                <span>exp year :</span>
                <input type="number" placeholder="2023" />
              </div>
              <div className="inputBoxP">
                <span>CVV :</span>
                <input type="text" placeholder="1234" />
              </div>
            </div>
          </div>
          <button
            type="submit"
            value="proceed to checkout"
            className="submit-btnP"
            onClick={handleButtonClick}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>

      
    </div>
    </div>



   
  );
};

export default Payment;
