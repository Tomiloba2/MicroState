import { useState } from "react";
import {
    Carousel
} from "react-bootstrap"
import './Styles/Style.css'

const Slider = () => {
    const [index,setIndex]=useState(0)
    const handleSelect=(selectedIndex,e)=>{
        setIndex(selectedIndex)
    }
    const caption={
        position:'relative',
        top:'-10vw',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
    return ( 
        <div className="Carousel">
            <Carousel fade activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img className="carousel-img cs"
                    src="https://media.istockphoto.com/photos/beautiful-luxury-home-exterior-at-twilight-picture-id1026205392?b=1&k=20&m=1026205392&s=170667a&w=0&h=irJbWQMnxDmaIE78tEAY6dTzmLCbQrGs2J844kjd5Nw="
                    alt="Modern Residence" />
                    <Carousel.Caption>
                        <div style={caption}>
                        <div>
                        <h1 className="text-warning">Modern Residence</h1>
                        <p>
                           harum facere officiis laudantium dolorum, doloribus aperiam fugit, ipsa aut provident voluptatibus quos?
                        </p>
                        <a href="/search" className="btn get-started btn-large text-light h2">Get started</a>
                        </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="carousel-img cs"
                     src="https://media.istockphoto.com/photos/luxury-villa-exterior-at-night-with-swimming-pool-sofa-and-lounge-picture-id1344684669?b=1&k=20&m=1344684669&s=170667a&w=0&h=4wkXf8JmIVCsSbT-EFWDFEAlblP-seSocge-H8_HnDE=" 
                     alt="" />
                    <Carousel.Caption>
                        <div style={caption}>
                            <div>
                            <h1 className="text-warning">Exquisite lifestyle</h1>
                            <p>
                           harum facere officiis laudantium dolorum, doloribus aperiam fugit, ipsa aut provident voluptatibus quos?
                        </p>
                        <a href="/search" className="btn get-started btn-large text-light h2">Get started</a>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="carousel-img cs"
                    src="https://media.istockphoto.com/photos/colonial-house-sunset-picture-id1396696186?b=1&k=20&m=1396696186&s=170667a&w=0&h=OVoxb5un2nFnqoUb4iEmc4mep-rxGISZvgtXWUTEDL0=" alt="" />
                    <Carousel.Caption>
                    <div style={caption}>
                            <div>
                            <h1 className="text-warning">Remote summer house</h1>
                            <p>
                           harum facere officiis laudantium dolorum, doloribus aperiam fugit, ipsa aut provident voluptatibus quos?
                        </p>
                        <a href="/search" className="btn get-started btn-large text-light h2">Get started</a>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
     );
}
 
export default Slider;