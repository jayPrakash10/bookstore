import { Container, Image, Row } from "react-bootstrap"

const PageNotFound = () => {
    return (
        <Container className="py-3 py-sm-4 py-md-5">
            <Row className="justify-content-center">
                <Image
                    className="col-auto"
                    src="https://t3.ftcdn.net/jpg/02/29/46/30/360_F_229463039_B4KwKD6ifdRV8G5S0sqrzBrAfHNzpReq.jpg"
                    fluid
                />
            </Row>
        </Container>
    )
}

export default PageNotFound;