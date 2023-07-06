import { Row, Col } from 'react-bootstrap'
import BookCards from "../../Components/BookCards"
import BookCard from '../../Components/BookCard';
import { trending } from '../../SampleData/TrendingData/trending';

const TrendingBooks = () => {
    return (
        <Row className='mb-5'>
            <Row className='m-0'>
                <Col>
                    <h5 className='fw-bold'>Trending Books</h5>
                </Col>
            </Row>
            <Row className='m-0'>
                <Col xs={12}>
                    <BookCards cardContainerClass={'overflow-auto flex-nowrap'}>
                        {trending.map((data) => 
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

export default TrendingBooks;