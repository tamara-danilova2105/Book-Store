import AccordionReadme from "../component/forReadme/AccordionReadme"

const Readme = () => {
    return(
        <div className="container-genres">
            <h2 className="header-genres">Приложение выполнено <br className="formobil"/> для тестового задания.</h2>
            <h2 className="header-genres">Технические требования:</h2>
            <AccordionReadme/>
            <br/>
            <h2 className="header-read">Со времене данное приложение будет  <br/> доработано новыми функциональностями,
            <br/>так как я продолжаю изучать новое, чтобы <br/>  стать крутым Frontend-разработчиком!</h2>
        </div>
    )
}

export default Readme