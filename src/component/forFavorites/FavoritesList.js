import FavoritesItem from "./FavoritesItem"

const FavoritesList = ({ booksList }) => {
    return(
        <div className="text-center">
            {booksList.map((item, id) => 
            <FavoritesItem key={id} item={item}/> )}
        </div>
    )
}

export default FavoritesList