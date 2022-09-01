import { useState } from "react";
import {
    Carousel
} from "react-bootstrap"

const Slider = () => {
    const [index,setIndex]=useState(0)
    const handleSelect=(selectedIndex,e)=>{
        setIndex(selectedIndex)
    }
    return ( 
        <div className="Carousel">
            <Carousel fade activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img className="carousel-img"
                    src="https://media.istockphoto.com/photos/beautiful-luxury-home-exterior-at-twilight-picture-id1026205392?b=1&k=20&m=1026205392&s=170667a&w=0&h=irJbWQMnxDmaIE78tEAY6dTzmLCbQrGs2J844kjd5Nw="
                    alt="Modern Residence" />
                    <Carousel.Caption>
                        <div className="slider-caption">
                        <h1>Modern Residensce</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas amet molestias </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="carousel-img"
                     src="https://media.istockphoto.com/photos/luxury-villa-exterior-at-night-with-swimming-pool-sofa-and-lounge-picture-id1344684669?b=1&k=20&m=1344684669&s=170667a&w=0&h=4wkXf8JmIVCsSbT-EFWDFEAlblP-seSocge-H8_HnDE=" 
                     alt="" />
                    <Carousel.Caption>
                        <div className="slider-caption">
                            <h1 className="text=warning">Exquisite lifestyle</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas amet molestias </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="carousel-img"
                    src="https://media.istockphoto.com/photos/colonial-house-sunset-picture-id1396696186?b=1&k=20&m=1396696186&s=170667a&w=0&h=OVoxb5un2nFnqoUb4iEmc4mep-rxGISZvgtXWUTEDL0=" alt="" />
                    <Carousel.Caption>
                    <div className="slider-caption">
                            <h1>Remote summer house</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas amet molestias </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
     );
}
 
export default Slider;