import FavoritesItem from "./FavoritesItem"
import ReadBooks from "./ReadBooks"

const FavoritesList = ({ booksList, myReadBooks }) => {

    return(
        <div className="text-center">
            <ReadBooks booksList={booksList} myReadBooks={myReadBooks}/>
            {booksList.map((item, id) => 
            <FavoritesItem key={id} item={item} myReadBooks={myReadBooks}/> )}
        </div>
    )
}

export default FavoritesList