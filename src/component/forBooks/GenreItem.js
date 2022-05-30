import { Card, Col, Row } from "react-bootstrap"

const GenreItem = ({ genre }) => {
    return(
        <Row className='genre-card'>
            <Col>
                <Card>
                    <Card.Img className="img-genres" variant="top" src={genre.images} alt='наши жанры'/>
                    <Card.Body>
                        <Card.Title className="text-title">{genre.type}</Card.Title>
                        <Card.Text className="text">{genre.description}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default GenreItem