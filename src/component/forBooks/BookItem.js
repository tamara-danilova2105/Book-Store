import { Button, Card } from "react-bootstrap"

const BookItem = ({ book}) => {
    return(
        <Card className="card-container">
            <Card.Body>
                <Card.Title className="card-header">{book.author}</Card.Title>
                <Card.Text className="card-text">{book.name}</Card.Text>
            </Card.Body>
            <Card.Img className="card-image" variant="top" src={`./${book.image}.jpg`} alt={book.name}/>
            <Button className="card-btn" variant="outline-success">ДОБАВИТЬ В ИЗБРАННОЕ</Button>
        </Card>
    )
}

export default BookItem