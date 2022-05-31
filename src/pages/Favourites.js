import { useSelector } from "react-redux"
import FavoritesEmpty from "../component/forFavorites/FavoritesEmpty"
import FavoritesList from "../component/forFavorites/FavoritesList"
import { getMyBook } from "../redux/favouritesSlice"
import { getReadBook } from "../redux/readSlice"

const Favourites = () => {

    const booksList = useSelector(getMyBook)
    const myReadBooks = useSelector(getReadBook)

    return(
        <div>
            {booksList.length <1 
            ? <FavoritesEmpty/>
            : <FavoritesList booksList={booksList} myReadBooks={myReadBooks}/>}
        </div>
    )
}

export default Favourites