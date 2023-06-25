import { Row } from 'react-bootstrap'

const BookCards = ({ children, cardContainerClass='' }: any) => {
    return (
        <Row className={`align-items-center gap-3 px-2 pb-3 ${cardContainerClass}`}>
            { children }
        </Row>
    )
}

export default BookCards;