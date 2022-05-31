import { Button, Card } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { addBookInFavorites, removeBookInFavorites } from "../../redux/favouritesSlice"

const BookItem = ({ book, booksList }) => {

    const dispatch = useDispatch()
    const bookInList = booksList.some(item => item.id === book.id)

    const handleBtn = () => {
        bookInList 
        ? dispatch(removeBookInFavorites(book.id))
        : dispatch(addBookInFavorites(book))
    }

    return(
        <Card className="card-container">
            <Card.Body>
                <Card.Title className="card-header">{book.author}</Card.Title>
                <Card.Text className="card-text">{book.name}</Card.Text>
            </Card.Body>
            <Card.Img className="card-image" variant="top" src={`./${book.image}.jpg`} alt={book.name}/>
            <Button onClick={handleBtn}
                    className="card-btn" variant={!bookInList ? 'outline-secondary' : 'success'}>
                    {!bookInList ? 'ДОБАВИТЬ В ИЗБРАННОЕ' : 'В ИЗБРАННОМ'}</Button>
        </Card>
    )
}

export default BookItem