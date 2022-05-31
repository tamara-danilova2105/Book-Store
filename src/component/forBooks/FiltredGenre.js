import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { filterGenre, getSelectedGenre } from "../../redux/filterSlice"

const FiltredGenre = ({ genre }) => {

    const dispatch = useDispatch()
    const selectedGenre = useSelector(getSelectedGenre)

    return(
        <div>
            <Button onClick={() => {dispatch(filterGenre(genre))}}
                    className="btn-filter" 
                    variant={selectedGenre === genre ? "success" : "outline-success"}>{genre}</Button>
        </div>
    )
}

export default FiltredGenre