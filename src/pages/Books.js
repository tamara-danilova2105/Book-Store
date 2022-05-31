import { useSelector } from "react-redux"
import BookItem from "../component/forBooks/BookItem"
import ButtonFilter from "../component/forBooks/ButtonFilter"
import SearchBook from "../component/forBooks/SearchBook"
import { books } from "../data/books"
import { getMyBook } from "../redux/favouritesSlice"
import { getSelectedGenre } from "../redux/filterSlice"

const Books = () => {

    const booksList = useSelector(getMyBook)
    const selectedGenre = useSelector(getSelectedGenre)

    return(
        <div>
            <div className="d-flex flex-row flex-wrap">
                <ButtonFilter />
                <SearchBook />
            </div>
            <div className="container-books row row-cols-1 row-cols-md-3 mb-3 text-center">
                {books
                .filter(book => {
                    if(selectedGenre === 'Все') return true;
                    return selectedGenre === book.genre
                })
                .map((book, id) => 
                <BookItem key={id} book={book} booksList={booksList}/>)}
            </div>
        </div>

    )
}

export default Books