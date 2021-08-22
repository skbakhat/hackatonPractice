
// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import react from 'react'

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Carousel } from "react-bootstrap";

import SliderImg1 from '../../assets/SliderImg1.jpg'
import SliderImg2 from '../../assets/SliderImg2.jpg'
import SliderImg3 from '../../assets/SliderImg3.jpg'
// import blacked from "../../assets/blacked.jpg"

import './Slider.css'
import CusNavbar from '../navbar/CusNavbar';

function Slider(){

    return(

  <>

<Carousel>

  <Carousel.Item>
  
    <img
    
      className="d-block w-100 IMG"
      src={SliderImg1}
      alt="First slide"
    />
    <Carousel.Caption className="TextAligning">
    <CusNavbar />
      <h3>Welcome to restaurant</h3>
      <p>Yummy Restaurantlorem Ipsum banner standard'sLook Menu</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 IMG"
      src={SliderImg3}
      alt="Second slide"
    />

    <Carousel.Caption className="TextAligning">
    <CusNavbar />
      <h3>Delius Food & Relaxing Surroundings</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 IMG"
      src={SliderImg2}
      alt="Third slide"
    />

    <Carousel.Caption className="TextAligning">
    <CusNavbar />
      <h3>Best Seasonal Food</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        </>
    )
}

export default Slider;