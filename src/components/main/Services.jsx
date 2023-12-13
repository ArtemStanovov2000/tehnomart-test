import ServicesSlider from "./services/ServicesSlider"
import { createUseStyles } from "react-jss";
import { container } from "../../style/globalStyle";


const Services = () => {

    const styles = createUseStyles({
        services: {
            backgroundColor: "#f1f5f7"
        },
        container,
        title: {
            paddingTop: "65px",
            paddingBottom: "25px",
            fontFamily: "Cuprum",
            textTransform: "uppercase",
            fontSize: "30px",
            lineHeight: "30px",
            fontWeight: "400"
        },
        titleDesc: {
            fontFamily: "Ptsans",
            fontSize: "13px",
            lineHeight: "24px"
        }
    });

    const classes = styles()


    return (
        <section className={classes.services}>
            <div className={classes.container}>
                <h2 className={classes.title}>Сервисы</h2>
                <p className={classes.titleDesc}>Хороший интернет-магазин отличается от плохого не только ценами!<br />
                    Мы стараемся изо всех сил, чтобы сделать ваши покупки приятными.</p>
                <ServicesSlider></ServicesSlider>
            </div>
        </section>
    )
}

export default Services