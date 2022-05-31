import { Form, FormControl } from "react-bootstrap"

const SearchBook = ({ setValueSearch }) => {

    return(
        <Form onChange={(e) => setValueSearch(e.target.value)} className="search d-flex">
            <FormControl placeholder="Введите название книги..." className="me-2"/>
        </Form>
    )
}

export default SearchBook