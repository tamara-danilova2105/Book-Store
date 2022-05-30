import { useSelector } from "react-redux"
import FavoritesEmpty from "../component/forFavorites/FavoritesEmpty"
import FavoritesList from "../component/forFavorites/FavoritesList"
import { getMyBook } from "../redux/favouritesSlice"

const Favourites = () => {

    const booksList = useSelector(getMyBook)

    return(
        <div>
            {booksList.length <1 
            ? <FavoritesEmpty/>
            : <FavoritesList booksList={booksList}/>}
        </div>
    )
}

export default Favourites