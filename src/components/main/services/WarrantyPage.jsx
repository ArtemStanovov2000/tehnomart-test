import { createUseStyles } from "react-jss";
import { colors } from "../../../style/globalStyle";

const WarrantyPage = () => {

    const styles = createUseStyles({
        listItem: {
            marginLeft: "80px",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top right",
            backgroundImage: "url(../../../images/warranty.png)"
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
            <h3 className={classes.itemTitle}>Гарантия</h3>
            <p className={classes.itemDesc}>Если купленный у нас товар поломается или
                заискрит,<br />
                а также в случае пожара, спровоцированного его<br />
                возгоранием, вы всегда можете быть уверены в нашей<br />
                гарантии. Мы обменяем сгоревший товар на новый.<br />
                Дом уж восстановите как-нибудь сами.</p>
        </div>
    )
}

export default WarrantyPage