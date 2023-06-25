import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Col, Container, Row } from "react-bootstrap";

import { allBooks } from "../../SampleData/AllData/allBooks";

import "./style.scss";

const BookDetails = () => {
    const param = useParams();
    const [bookDetail, setBookDetail] = useState<any>({});
    
    useEffect(() => {
        setBookDetail(allBooks.find((book) => {
            return book.id === param.id;
        }));
    }, []);

    return (
        <Container className='py-3 py-sm-4 py-md-5'>
            <Row className="book_container">
                <h3 className="d-flex align-items-end text-decoration-underline">
                    {bookDetail.title}
                    {bookDetail.subtitle ?
                        <> {bookDetail.subtitle}</>
                        : null
                    }
                </h3>
                <Row>
                    <Col xs={12} sm="auto" className="d-flex d-sm-block justify-content-center py-3 py-sm-4">
                        <img src={bookDetail.url} alt={bookDetail.title} className="book_img shadow"/>
                    </Col>
                    <Col className="py-3 py-sm-4 flex-grow-1">
                        <Row>
                            <Row>
                                <p><strong>Name : </strong>{bookDetail.name}</p>
                            </Row>
                            {bookDetail.author &&
                                <Row>
                                    <p><strong>Author : </strong>{bookDetail.author}</p>
                                </Row>
                            }
                            {bookDetail.publisher &&
                                <Row>
                                    <p><strong>Publisher : </strong>{bookDetail.publisher}</p>
                                </Row>
                            }
                            {bookDetail.language &&
                                <Row>
                                    <p><strong>Language : </strong>{bookDetail.language}</p>
                                </Row>
                            }
                            {bookDetail.genre &&
                                <Row>
                                    <p><strong>Genre : </strong>{bookDetail.genre.join(", ")}</p>
                                </Row>
                            }
                            {bookDetail.isbn &&
                                <Row>
                                    <p><strong>ISBN</strong></p>
                                    {bookDetail.isbn.isbn10 &&
                                        <p>ISBN-10 : {bookDetail.isbn.isbn10}</p>
                                    }
                                    {bookDetail.isbn.isbn13 &&
                                        <p>ISBN-13 : {bookDetail.isbn.isbn13}</p>
                                    }
                                </Row>
                            }
                        </Row>
                    </Col>
                </Row>
                {bookDetail.description &&
                    <Row>
                        <p><strong>Summary</strong></p>
                        <p>{bookDetail.description}</p>
                    </Row>
                }
            </Row>
        </Container>
    )
}

export default BookDetails;