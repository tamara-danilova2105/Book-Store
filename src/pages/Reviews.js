import { Button } from "react-bootstrap"
import ReviewsItem from "../component/forReviews/ReviewsItem"
import { commentsApi } from "../redux/commetsSrvice"

const Reviews = () => {

    const comments = commentsApi.useFetchAllCommentsQuery('')
    console.log(comments);

    // eslint-disable-next-line no-empty-pattern
    const [addComment, {}] = commentsApi.useAddCommentMutation() // rest of the function
    // eslint-disable-next-line no-empty-pattern
    const [updateComment, {}] = commentsApi.useUpdateCommentMutation() // rest of the function
    // eslint-disable-next-line no-empty-pattern
    const [deleteComment, {}] = commentsApi.useDeleteCommentMutation() // rest of the function

    const addCommetInPage = async () => {
        const title = prompt()
        await addComment({body: title})
    }

    const handleRemove = (comment) => {
        deleteComment(comment)
    }

    const handleUpdate = (comment) => {
        updateComment(comment)
    }

    return(
        <div className="container-genres">
            <h2 className="header-genres">Отзывы о книгах:</h2>
            <Button onClick={addCommetInPage}
                    className="add-comment">ДОБАВИТЬ КОММЕНТАРИЙ</Button>
            {comments.data.map( (comment, id) => 
            <ReviewsItem remove={handleRemove} update={handleUpdate} key={id} comment={comment}/> )}
        </div>
    )
}

export default Reviews


//базовые отзывы
//Оливер Твист - моя самая любимая книга! Читала ее 3 раза в 11, 17 и 25 лет - и каждый раз книга отзывалась по-новому
//Цифровая крепость - отличная книга, прочитала ее самой первой из романов Дэна Брауна, поэтому она самая любимая. Браво!
//Как стать бизнесменом - мотивирующая книга об истории Олега Тинькова, как бизнесмена! Банк Тинькофф - революционный банк в России, Дарья - насколько это крутой маркетинг, что спустя 20 лет я до сих пор помню - Сама лепила Дарья, не смотря на то что была ребенком
//Ход королевы - первый случай когда фильм оказался круче книги. Но визуально достаточно сложно рисовать шахматные партии, в сериале все красиво снято.
//Богатый папа, бедный папа - после книги мир перевернулся на до и после. После действительно стала зарабатывать больше. Наверное потому что пошла учиться на разработчика - ахахахахаха!