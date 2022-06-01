import { Accordion } from "react-bootstrap"

const AccordionReadme = () => {
    return(
        <Accordion className="w-50 accordion-readme bolder" defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Реализовать SPA (single page application) с использованием React:</Accordion.Header>
                <Accordion.Body>
                Приложение написано с использованием React 18.0. Тематика - "Книжная лавка".
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
                <Accordion.Header>Набор данных должен состоять минимум из 2 связанных сущностей:</Accordion.Header>
                <Accordion.Body>
                Приложение состоит из 5 основных страниц, со взаимосвязанми функциональными компонентами.
                Данные передаются с помощью props. <br/><br/> Использован state manager Redux для управления состоянием компонентов.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
                <Accordion.Header>Введенные данные должны сохраняться при перезагрузке страницы:</Accordion.Header>
                <Accordion.Body>
                Статусы книг - "в избранном" и "прочитано" заисаны в LocalStorage с Redux Persist. 
                Это позволяет сохранять данные в браузере даже после перезагрузки.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
                <Accordion.Header>Необходимо использовать React-Router и Redux:</Accordion.Header>
                <Accordion.Body>
                В меню добавлен React Router для маршрутизации по сайту.<br/><br/>
                Для следующих функциональностей использован Redux:<br/><br/>
                Action: <br/>
                1. добавить и удалить книгу "в избранное"; <br/>
                2. отметить прочитанные книги и посчитать %; <br/>
                3. фильтрация списка книг по жанрам и все. <br/><br/>
                Mutation: <br/>
                1. добавление и удаление комментария; <br/>
                2. возможность редактировать добавленный комментарий. <br/>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
                <Accordion.Header>Необходимо применить какой-нибудь набор стилей:</Accordion.Header>
                <Accordion.Body>
                Для стилей компонентов - Navbar, Card, Carousel, Accordion, Button и Badge использована библиотека Bootstrap React.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
                <Accordion.Header>Дополнительно сделано следующее:</Accordion.Header>
                <Accordion.Body>
                1. реализован поиск книг по названию; <br/>
                2. добавлены цитаты из публичного API; <br/> 
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default AccordionReadme