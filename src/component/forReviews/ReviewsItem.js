import { Button, Card } from "react-bootstrap"

const ReviewsItem = ({ comment, remove, update }) => {

    const updatedComment = () => {
        const title = prompt()
        update({...comment, body: title})
    }

    return(
        <div>
            <Card className="container-favorite w-50">
                <Card.Body>
                    <Card.Text>{comment.body}</Card.Text>
                    <Button onClick={() => remove(comment)}
                        className="btn-review" variant="danger">УДАЛИТЬ</Button>
                    <Button onClick={updatedComment}
                            className="btn-review" variant='success'>РЕДАКТИРОВАТЬ</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ReviewsItem