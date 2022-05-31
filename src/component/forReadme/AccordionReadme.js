import { Accordion } from "react-bootstrap"

const AccordionReadme = () => {
    return(
        <Accordion className="w-50 accordion-readme bolder" defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Реализовать SPA (single page application) с использованием React:</Accordion.Header>
                <Accordion.Body>
                Приложение написано с использованием React 18.0. Тематика - "книжная лавка".
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
                <Accordion.Header>Набор данных должен состоять минимум из 2 связанных сущностей:</Accordion.Header>
                <Accordion.Body>
                Приложение состоит из 4 страниц, которые в свою очередь взаимосвязанны компонентами.
                Данные между ними передаются с помощью props. <br/><br/> Использован Redux для управления состоянием компонентов.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
                <Accordion.Header>Введенные данные должны сохраняться на протяжении всей сессии браузера и не пропадать при перезагрузке страницы:</Accordion.Header>
                <Accordion.Body>
                Добавленные пользователем книги "в избранное" записаны в LocalStorage с Redux-Persist. 
                Что позволяет сохранять данные даже после перезагрузки страницы
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
                <Accordion.Header>Необходимо использовать React-Router и Redux:</Accordion.Header>
                <Accordion.Body>
                В меню переход по рубрикам реализован с React Router.<br/><br/>
                Фильтрация и добавление книги в "в избранное" выполняется с помощью Redux:<br/><br/>
                Action: <br/>
                1. добавление и удаление товара в избранное; <br/>
                2. возможность отметить прочитанные книги и посчитать их %; <br/>
                3. фильтрация книг по жанрам. <br/><br/>
                Mutation: <br/>
                1. добавление и удаление комментария; <br/>
                2. возможность редактировать добавленный комментарий. <br/>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
                <Accordion.Header>Необходимо применить какой-нибудь набор стилей:</Accordion.Header>
                <Accordion.Body>
                Для стилей и функциональности некоторых компонентов - Navbar, Card, Carousel, Accordion и Badge  использована библиотека Bootstrap.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
                <Accordion.Header>Дополнительно сделано следующее:</Accordion.Header>
                <Accordion.Body>
                1. поиск книги по названию и автору; <br/>
                2. добавлены данные из публичного API; <br/> 
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default AccordionReadme