import Carousel from 'react-bootstrap/Carousel';

import boots1 from '../assets/images/boots1.jpg';
import boots2 from '../assets/images/boots2.jpg';
import boots3 from '../assets/images/boots3.jpg';

export const Slider = () => {
    return (
        //Slider of home
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={boots1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={boots2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={boots3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}
