
const ReadBooks = ({ booksList, myReadBooks }) => {
    
    let amount = myReadBooks.length / booksList.length * 100
    let percent = amount.toFixed(0)

    return(
        <div>
            <h2 className="header-read">Вы прочитали {percent}%</h2>
        </div>
    )
}

export default ReadBooks