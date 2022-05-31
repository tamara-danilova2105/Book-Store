import FiltredGenre from "./FiltredGenre"

const ButtonFilter = () => {
    return(
        <div className="d-flex flex-row flex-wrap">
            {['Детектив', 'Роман', 'Бизнес', 'Все']
            .map((genre, index) => <FiltredGenre key={index} genre={genre}/> )}
        </div>
    )
}

export default ButtonFilter