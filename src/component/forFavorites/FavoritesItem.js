import { Button, Card } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { removeBookInFavorites } from "../../redux/favouritesSlice"
import { bookIsRead, removeBookIsread } from "../../redux/readSlice"

const FavoritesItem = ({ item, myReadBooks }) => {

    const dispatch = useDispatch()

    const readList = myReadBooks.some(read => read.id === item.id)

    const handleDelete = () => {
        dispatch(removeBookInFavorites(item.id))
        dispatch(removeBookIsread(item.id))
    }

    const handleRead = () => {
        readList 
        ? dispatch(removeBookIsread(item.id))
        : dispatch(bookIsRead(item))
    }

    return(
        <Card className="container-favorite w-50">
            <Card.Body>
                <Card.Title className="card-text header-mybook">{item.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted card-text">{item.author}</Card.Subtitle>
                <Card.Img className="favorite-image" src={`./${item.image}.jpg`} alt={item.name} />
                <Card.Text>{item.description}</Card.Text>
                <Button onClick={handleDelete} 
                        className="btn-favorites" variant="danger">УДАЛИТЬ</Button>
                <Button onClick={handleRead}
                        className="btn-favorites"
                        variant={!readList ? 'outline-secondary' : 'success'}>
                        {!readList ? 'ЧИТАЮ' : 'ПРОЧИТАНО'}</Button>
            </Card.Body>
        </Card>
    )
}

export default FavoritesItem