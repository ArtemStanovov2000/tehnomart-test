import AboutForm from "./about/AboutForm"
import Map from "./about/Map"
import { useState } from "react"
import { createUseStyles } from "react-jss";
import { colors } from "../../style/globalStyle";

const About = () => {

    const styles = createUseStyles({
        about: {
            display: "flex",
            marginTop: "70px",
            marginBottom: "70px",
            position: "relative"
        },
        delivery: {
            width: "640px",
            display: "flex",
            flexDirection: "column"
        },
        title: {
            margin: "0",
            fontFamily: "Cuprum",
            fontSize: "30px",
            lineHeight: "30px",
            textTransform: "uppercase",
            fontWeight: "400"
        },
        desc: {
            fontFamily: "Ptsans",
            fontSize: "13px",
            lineHeight: "24px"
        },
        listItem: {
            fontSize: "18px",
            lineHeight: "24px",
            marginTop: "12px",
            marginBottom: "12px",
            display: "flex",
            fontFamily: "Cuprum",
            "&::before": {
                content: "url(/images/icons/Object.svg)",
                marginRight: "12px",
                display: "flex"
            }
        },
        deliveryButton: {
            backgroundColor: colors.basicRed,
            padding: "10px 40px",
            width: "max-content",
            fontFamily: "Cuprum",
            textTransform: "uppercase"
        },
        office: {
            width: "300px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        },
        map: {
            cursor: "pointer"
        },
        officeButton: {
            backgroundColor: colors.basicRed,
            textTransform: "uppercase",
            cursor: "pointer",
            color: colors.white,
            border: "none",
            paddingTop: "10px",
            paddingBottom: "10px",
            width: "100%",
            fontFamily: "Cuprum",
            display: "flex",
            justifyContent: "center"
        }
    });

    const classes = styles()


    const [stateForm, setStateForm] = useState(false)
    const [stateMap, setStateMap] = useState(false)

    return (
        <section className={classes.about}>
            <div className={classes.delivery}>
                <h2 className={classes.title}>Компания "Техномарт"</h2>
                <p className={classes.desc}>Настоящий мужской шоппинг начинается здесь! Огромный выбор товаров для<br />
                    ремонта и строительства не оставит равнодушными любителей сэкономить на<br />
                    гастарбайтерах</p>
                <p className={classes.desc}>Мы можем доставить ваш товар в самые отдаленные точки России!<br />
                    Техномарт работает со многими транспортными компаниями:</p>
                <ul>
                    <li className={classes.listItem}>Деловые линии</li>
                    <li className={classes.listItem}>Автотрейдинг</li>
                    <li className={classes.listItem}>ЖелДорЭкспедиция</li>
                </ul>
                <a className={classes.deliveryButton} href="link">Подробнее о компании</a>
            </div>
            <div className={classes.office}>
                <h2 className={classes.title}>Контакты</h2>
                <p className={classes.desc}>Вы можете забрать товар сами,<br />
                    заехав в наш офис:</p>
                <img className={classes.map} src="images/map.png" width="300" height="158"
                    alt="мы находимся по адресу Санкт-Петербург улица Большая Конюшенная дом 19 корпус 8" onClick={() => setStateMap(true)} />
                <button className={classes.officeButton} href="link" onClick={() => setStateForm(true)}>Заблудились? Напишите нам!</button>
            </div>
            {stateForm === true && <AboutForm setStateForm={setStateForm}></AboutForm>}
            {stateMap === true && <Map setStateMap={setStateMap}></Map>}
        </section>
    )
}

export default About