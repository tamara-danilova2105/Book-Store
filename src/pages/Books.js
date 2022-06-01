import { useState } from "react"
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

    const [valueSearch, setValueSearch] = useState('')
    const searchResult = books.filter(book => {
        return book.name.toLocaleLowerCase().includes(valueSearch.toLocaleLowerCase().trim())
    })

    return(
        <div>
            <div className="d-flex flex-row flex-wrap">
                <ButtonFilter/>
                <SearchBook setValueSearch={setValueSearch}/>
            </div>
            <div className="container-books row row-cols-1 row-cols-md-3 mb-3 text-center">
                {searchResult.length < 1 
                ? <h2 className="header-read">По вашему запросу ничего не найдено...</h2>
                : searchResult
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