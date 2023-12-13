import PromoMaterialsSvg from "./promo/PromoMaterialsSvg"
import PromoToolsSvg from "./promo/PromoToolsSvg"
import PromoTechnichSvg from "./promo/PromoTechnichSvg"
import PromoSaleSvg from "./promo/PromoSalesSvg"
import PromoDeliverySvg from "./promo/PromoDeliverySvg"
import PromoElement from "./promo/PromoElement"
import Slider from "./promo/Slider"
import { createUseStyles } from "react-jss";
import { visuallyHidden } from "../../style/globalStyle"

const Promo = () => {

    const styles = createUseStyles({
        promo: {
            fontFamily: "Cuprum"
        },
        visuallyHidden,
        offersList: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "1fr 1fr 1fr",
            gridTemplateAreas: `
            "A  B  C" 
            "D  D  E" 
            "D  D  F"
            `,
            gap: "20px"
        },
        promoMaterials: {
            gridArea: "A",
            backgroundColor: "#FFBF47",
            position: "relative"
        },
        promoTool: {
            gridArea: "B",
            backgroundColor: "#3BBCE3",
            position: "relative"
        },
        promoTechnic: {
            gridArea: "C",
            backgroundColor: "#DC91D8",
            position: "relative"
        },
        promoBoers: {
            gridArea: "D",
            position: "relative"
        },
        promoBenefit: {
            gridArea: "E",
            backgroundColor: "#8ED78F",
            position: "relative"
        },
        promoDelivery: {
            gridArea: "F",
            backgroundColor: "#FFC047",
            position: "relative"
        }
    });

    const classes = styles()

    return (
        <section className={classes.promo}>
            <h2 className={classes.visuallyHidden}>Промо-предложения </h2>
            <ul className={classes.offersList}>
                <PromoElement classNameElement={classes.promoMaterials} newElement title={"Материалы"} deck={"На любой вкус"} icon={<PromoMaterialsSvg></PromoMaterialsSvg>}></PromoElement>
                <PromoElement classNameElement={classes.promoTool} title={"Инструмент"} deck={"На все случаи"} icon={<PromoToolsSvg></PromoToolsSvg>}></PromoElement>
                <PromoElement classNameElement={classes.promoTechnic} title={"Техника"} deck={"Для стройки"} icon={<PromoTechnichSvg></PromoTechnichSvg>}></PromoElement>
                <Slider></Slider>
                <PromoElement classNameElement={classes.promoBenefit} title={"Скидки 50%"} deck={"На 350 товаров"} icon={<PromoSaleSvg></PromoSaleSvg>}></PromoElement>
                <PromoElement classNameElement={classes.promoDelivery} title={"Доставка"} deck={"Бесплатно"} icon={<PromoDeliverySvg></PromoDeliverySvg>}></PromoElement>
            </ul>
        </section>
    )
}

export default Promo