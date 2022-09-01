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
    return ( 
        <div className="Carousel">
            <Carousel fade activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img className="carousel-img"
                    src="https://media.istockphoto.com/photos/modern-real-estate-front-exterior-blue-and-white-color-scheme-with-picture-id1303750117?b=1&k=20&m=1303750117&s=170667a&w=0&h=PbH5ycQValDv7_V4hGW7HD1nLZfRmikfWNfrp97OZTc="
                    alt="Modern Residence" />
                     <Carousel.Caption>
                        <div>
                             <h5 className='text-warning carousel-h5'>About Us</h5><br></br>
                             <h1>We are commited to excellence</h1>
                        </div>
                     </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="carousel-img"
                     src="https://media.istockphoto.com/photos/cozy-patio-with-entrance-to-the-house-picture-id1344026356?b=1&k=20&m=1344026356&s=170667a&w=0&h=4zT9-RWNxboTsPTRX4tew93n6SYlwISm5uzmXOIpZow=" 
                     alt="img" />
                    <Carousel.Caption>
                        <div>
                               <h5 className='text-warning carousel-h5'>About Us</h5><br></br>
                               <h1>We are commited to getting the Job done</h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="carousel-img"
                    src="https://media.istockphoto.com/photos/modern-luxury-home-interior-picture-id1311356176?b=1&k=20&m=1311356176&s=170667a&w=0&h=qBWA2Tf3PzXV8MlClXYYGzZV1kelXzI2EDc41mInMo0=" alt="img" />
                    <Carousel.Caption>
                    <div>
                               <h5 className='text-warning carousel-h5'>About Us</h5><br></br>
                               <h1>
                                  We are dedicated to meeting your needs in order to ensure your Much
                                  Required Comfort
                               </h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
     );
}
 
export default Slider;