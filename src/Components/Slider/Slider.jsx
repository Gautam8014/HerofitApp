import React, { useEffect } from 'react';
import './slider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Slider = () => {
  useEffect(() => {
    const wrapper = document.querySelector(".wrapper");
    const carousel = document.querySelector(".carousel");
    const firstCardWidth = carousel.querySelector(".card").offsetWidth;
    const arrowBtns = document.querySelectorAll(".wrapper i");
    const carouselChildrens = [...carousel.children];
    
    let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;
    
    
    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
    
   
    carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    });
    
    
    carouselChildrens.slice(0, cardPerView).forEach(card => {
        carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });
    
   
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
    
    
    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
        });
    });
    
    const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");
        
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    }
    
    const dragging = (e) => {
        if(!isDragging) return; 
        
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    }
    
    const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
    }
    
    const infiniteScroll = () => {
       
        if(carousel.scrollLeft === 0) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
            carousel.classList.remove("no-transition");
        }
       
        else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.offsetWidth;
            carousel.classList.remove("no-transition");
        }
    
        
        clearTimeout(timeoutId);
        if(!wrapper.matches(":hover")) autoPlay();
    }
    
    const autoPlay = () => {
        if(window.innerWidth < 800 || !isAutoPlay) return; 
       
        timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
    }
    autoPlay();
    
    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);
    wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);
  }, []);

  return (

    <div id='dad'>
        <div id='headings'>
            <p style={{color:"lightgreen"}}>Testimonials</p>
            <h1>They Are Happy Clients After Joining Us </h1>
        </div>
    <div className="wrapper">
      <i id="left2" >←</i>
      <ul className="carousel">
        <li className="card">
            <div id='user'>
            <div className="img"><img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80" alt="img" draggable="false" /></div>
            <div id='user1'>
            <h2>Blanche Pearson</h2>
          <span>Sales Manager</span>
            </div>
          
            </div>
            <div id='text'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, veritatis.</p>
            </div>
          
        </li>
        <li className="card">
        <div id='user'>
            <div className="img"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="img" draggable="false" /></div>
            <div id='user1'>
            <h2>Blanche Pearson</h2>
          <span>Sales Manager</span>
            </div>
          
            </div>
            <div id='text'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, veritatis.</p>
            </div>
        </li>
        <li className="card">
        <div id='user'>
            <div className="img"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="img" draggable="false" /></div>
            <div id='user1'>
            <h2>Blanche Pearson</h2>
          <span>Sales Manager</span>
            </div>
          
            </div>
            <div id='text'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, veritatis.</p>
            </div>
        </li>
        <li className="card">
        <div id='user'>
            <div className="img"><img src="https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="img" draggable="false" /></div>
            <div id='user1'>
            <h2>Blanche Pearson</h2>
          <span>Sales Manager</span>
            </div>
          
            </div>
            <div id='text'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, veritatis.</p>
            </div>
        </li>
        <li className="card">
        <div id='user'>
            <div className="img"><img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80" alt="img" draggable="false" /></div>
            <div id='user1'>
            <h2>Blanche Pearson</h2>
          <span>Sales Manager</span>
            </div>
          
            </div>
            <div id='text'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, veritatis.</p>
            </div>
        </li>
        <li className="card">
        <div id='user'>
            <div className="img"><img src="https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80" alt="img" draggable="false" /></div>
            <div id='user1'>
            <h2>Blanche Pearson</h2>
          <span>Sales Manager</span>
            </div>
          
            </div>
            <div id='text'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, veritatis.</p>
            </div>
        </li>
      </ul>
      <i id="right" >→</i>
    </div>
    </div>
  );
};

export default Slider;
