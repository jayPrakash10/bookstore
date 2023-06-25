import { Row, Col } from 'react-bootstrap'
import BookCards from "../../Components/BookCards"
import BookCard from '../../Components/BookCard'

import { languageHindi } from '../../SampleData/HindiBooks'

const HindiBooks = () => {
    return (
        <Row className='mb-5'>
            <Row>
                <Col>
                    <h5 className='fw-bold'>Hindi Books</h5>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <BookCards cardContainerClass={'overflow-auto flex-nowrap'}>
                        {languageHindi.map((data) => 
                            <BookCard
                                key={data.id}
                                id={data.id}
                                title={data.name}
                                imageUrl={data.url}
                                href={`/search/${data.id}`}
                            />
                        )}
                    </BookCards>
                </Col>
            </Row>
        </Row>
    )
}

export default HindiBooks;