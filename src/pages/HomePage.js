import CarouselBook from "../component/forBooks/CarouselBook"
import GenreItem from "../component/forBooks/GenreItem"
import { genres } from "../data/genres"

const HomePage = () => {

    return(
        <div className="container-genres">
            <h2 className="header-genres">Хорошая книга — это подарок, завещанный автором человечеству!</h2>

            <CarouselBook/>
            
            <div className="d-flex flex-wrap">
                {genres.map((genre, id) => <GenreItem key={id} genre={genre} />)}
            </div>
        </div>
    )
}

export default HomePage