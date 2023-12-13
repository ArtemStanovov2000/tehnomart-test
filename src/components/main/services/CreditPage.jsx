import { createUseStyles } from "react-jss";
import { colors } from "../../../style/globalStyle";

const CreditPage = () => {

    const styles = createUseStyles({
        listItem: {
            marginLeft: "80px",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top right",
            backgroundImage: "url(../../../images/credit.png)"
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
        },
        creditButton: {
            backgroundColor: colors.basicRed,
            textTransform: "uppercase",
            padding: "10px 45px",
        }
    });

    const classes = styles()

    return (
        <div className={classes.listItem}>
            <h3 className={classes.itemTitle}>Кредит</h3>
            <p className={classes.itemDesc}>Залезть в долговую яму стало проще!<br />
                Кредитные консультанты придут вам на помощь.</p>
            <a className={classes.creditButton} href="link">Отправить заявку</a>
        </div>
    )
}

export default CreditPage