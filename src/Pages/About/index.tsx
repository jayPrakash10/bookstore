import { Carousel, Col, Container, Row } from 'react-bootstrap'
import "./style.scss";

const About = () => {
    return (
        <Container className='py-3 py-sm-4 py-md-5'>
            <h2 className='text-center fw-bold'>About</h2>
            <Row className='bg-dark text-light mt-3 mt-sm-4 mt-md-5 rounded'>
                <Col xs={12} lg={6} className='d-flex align-items-center justify-content-center px-0'>
                    <Carousel className='w-100' controls={false} indicators={false}>
                        <Carousel.Item>
                            <img
                                className="d-block object-fit-cover w-100 carousel_img rounded"
                                src="https://www.frontlist.in/storage/uploads/2021/06/GettyImages-577674005.jpg"
                                alt="img_1"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block object-fit-cover w-100 carousel_img rounded"
                                src="https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop"
                                alt="img_2"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block object-fit-cover w-100 carousel_img rounded"
                                src="https://res.cloudinary.com/jerrick/image/upload/v1610450296/5ffd857883f7a1001c77a8bf.jpg"
                                alt="img_3"
                            />
                        </Carousel.Item>                        
                        <Carousel.Item>
                            <img
                                className="d-block object-fit-cover w-100 carousel_img rounded"
                                src="https://www.thespruce.com/thmb/EUL_Bbk1PSZpGm16NTjtoU-B5sk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-organize-books-5093674-hero-ee959ae2c79f45f1b6c480da10e2a265.jpg"
                                alt="img_4"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col xs={12} lg={6} className='p-4'>
                    <p className='fs-5 text-justify' style={{textIndent: "2rem", textAlign: "justify"}}>
                        Searching your favourite book is made easy. BookStore provide the best experience to search your favourite book and see
                        full details about it.
                    </p>
                    <p className='fs-5 text-justify' style={{textAlign: "justify"}}>
                        Get any book you want at instant.
                    </p>
                </Col>
            </Row>
            <Row className='mt-5'>
                <h5 className='fw-semibold'>From Developer</h5>
                <p className='fs-5' style={{textAlign: "justify"}}>
                    This project is built using react-bootstrap and bootstrap styling to show bootstrap knowledge and skills. Also made use 
                    of react concept to implement on the go search option.
                </p>
                <p className='fs-5' style={{textAlign: "justify"}}>
                    Created resuable component, container and multiple pages using react routing technique. There are limited book to show.
                </p>
            </Row>
        </Container>
    )
}

export default About;