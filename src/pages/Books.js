import { useSelector } from "react-redux"
import BookItem from "../component/forBooks/BookItem"
import { books } from "../data/books"
import { getMyBook } from "../redux/favouritesSlice"

const Books = () => {

    const booksList = useSelector(getMyBook)

    return(
        <div className="container-books row row-cols-1 row-cols-md-3 mb-3 text-center">
            {books.map((book, id) => 
            <BookItem key={id} book={book} booksList={booksList}/>)}
        </div>
    )
}

export default Books