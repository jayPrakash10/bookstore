import { Card } from "react-bootstrap";
import "./style.scss";

interface books {
    cardClass?: string,
    id?: string,
    title: string,
    imageUrl: string,
    href?: string,
}

const BookCard = ({ cardClass, title, imageUrl, href= "" }: books) => {

    return (
        <Card className={`shadow cursor-pointer px-0 card_style text-decoration-none ${cardClass}`} as='a' href={href}>
            <Card.Img variant="top" src={imageUrl} className="object-fit-contain card_img_style rounded-top" alt={title}/>
            <Card.Body className="border-top">
                <Card.Text className="overflow-hidden text-truncate fw-semibold">{title}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default BookCard;