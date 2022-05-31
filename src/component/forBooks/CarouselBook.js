import one from '../../assets/one.jpg'
import two from '../../assets/two.jpg'
import three from '../../assets/three.jpg'
import { Carousel } from 'react-bootstrap'

const CarouselBook = () => {
    return(
        <Carousel variant="dark" className='container-carousel w-50'>
        <Carousel.Item interval={3000}>
                <img
                className="d-block w-100"
                src={one}
                alt="First slide"
                />
            <Carousel.Caption>
            <p className='carousel-text'>Дом, в котором нет книг, подобен телу, лишенному души.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
                <img
                className="d-block w-100"
                src={two}
                alt="Second slide"
                />
            <Carousel.Caption>
            <p className='carousel-text'>Как из копеек составляются рубли, так и из крупинок прочитанного составляется знания.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
                <img
                className="d-block w-100"
                src={three}
                alt="Third slide"
                />
            <Carousel.Caption>
            <p className='carousel-text'>Беседовать с писателями других веков — почти то же самое, что путешествовать во времени.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    )
}

export default CarouselBook