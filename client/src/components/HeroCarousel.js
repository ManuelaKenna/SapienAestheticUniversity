import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function HeroCarousel() {
  return (
  <div>  
 <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1504221507732-5246c045949b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Become a skin care expert.</h3>
          <p>We offer multiple classes on various topics.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1507919981044-3b672b208db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Explore our list of classes.</h3>
          <p>You won't regret it.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1513624954087-ca7109c0f710?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Make an account to get started.</h3>
          <p>
            Don't miss out on this exciting opportunity. 
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
  );
}

export default HeroCarousel;