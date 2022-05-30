import { Button, Card } from "react-bootstrap"

const FavoritesItem = ({ item }) => {
    return(
        <Card className="container-favorite w-50">
            <Card.Body>
                <Card.Title className="card-text header-mybook">{item.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted card-text">{item.author}</Card.Subtitle>
                <Card.Img className="card-image" src={`./${item.image}.jpg`} alt={item.name} />
                <Card.Text>{item.description}</Card.Text>
                <Button className="btn-favorites" variant="danger">УДАЛИТЬ</Button>
                <Button className="btn-favorites" variant="outline-success">ПРОЧИТАНО</Button>
            </Card.Body>
        </Card>
    )
}

export default FavoritesItem