import { createUseStyles } from "react-jss";
import { colors } from "../../../style/globalStyle";

const DeliveryPage = () => {

    const styles = createUseStyles({
        listItem: {
            marginLeft: "80px",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top right",
            backgroundImage: "url(../../../images/delivery.png)"
        },
        itemTitle: {
            margin: "0",
            fontFamily: "Cuprum",
            fontSize: "30px",
            lineHeight: "30px",
            fontWeight: "400",
            color: colors.blackBlue,
            textTransform: "uppercase"
        },
        itemDesc: {
            marginTop: "30px",
            width: "330px",
            fontFamily: "Ptsans",
            fontSize: "13px",
            lineHeight: "24px"
        }
    });

    const classes = styles()

    return (
        <div className={classes.listItem}>
            <h3 className={classes.itemTitle}>Доставка</h3>
            <p className={classes.itemDesc}>Мы с удовольствием доставим ваш товар прямо<br />
                к вашему подъезду совершенно бесплатно!<br />
                Ведь мы неплохо заработаем,<br />
                поднимая его на ваш этаж!</p>
        </div>
    )
}

export default DeliveryPage