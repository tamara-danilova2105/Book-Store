import BookItem from "../component/forBooks/BookItem"
import { books } from "../data/books"

const Books = () => {
    return(
        <div className="container-books row row-cols-1 row-cols-md-3 mb-3 text-center">
            {books.map((book, id) => <BookItem key={id} book={book}/>)}
        </div>
    )
}

export default Books