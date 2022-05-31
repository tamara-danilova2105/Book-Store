import { Button, Form, FormControl } from "react-bootstrap"

const SearchBook = () => {
    return(
        <Form className="search d-flex">
            <FormControl
            type="search"
            placeholder="Поиск книги..."
            className="me-2"
            aria-label="Search"
            />
            <Button variant="outline-success">НАЙТИ</Button>
        </Form>
    )
}

export default SearchBook