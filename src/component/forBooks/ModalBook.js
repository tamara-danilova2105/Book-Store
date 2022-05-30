import { Button, Modal } from "react-bootstrap"

const ModalBook = (props) => {
    return(
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Названии книги
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Описание книги</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="outline-danger">ЗАКРЫТЬ</Button>
                <Button variant="secondary">ДОБАВИТЬ В ИЗБРАННОЕ</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalBook