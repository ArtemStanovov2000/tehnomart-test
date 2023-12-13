import NewElementMarker from "../../shared/components/NewElementMarker"
import { createUseStyles } from "react-jss";
import { colors } from "../../../style/globalStyle";

const PromoElement = ({classNameElement ,newElement, title, deck, icon}) => {

    const styles = createUseStyles({
        offersItem: {
            display: "flex"
        },
        offersItemContent: {
            paddingLeft: "23px",
            paddingTop: "20px",
            paddingBottom: "23px",
            display: "flex",
            flexDirection: "column"
        },
        offersItemTitle: {
            color: colors.white,
            margin: "0",
            fontSize: "24px",
            lineHeight: "30px",
            fontWeight: "bold"
        },
        offersItemLink: {
            width: "135px",
            paddingTop: "10px",
            paddingBottom: "10px",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            marginTop: "20px",
            justifyContent: "center",
            display: "flex",
            fontSize: "14px",
            color: colors.white,
            lineHeight: "18px",
            fontStyle: "normal",
            textAlign: "center",
            textTransform: "uppercase",
            "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.2)"
            },
            "&:active": {
                backgroundColor: "rgba(0, 0, 0, 0.35)"
            }
        },
        offersItemImg: {
            display: "flex",
            alignItems: "center",
            paddingLeft: "37px"
        }
    });

    const classes = styles()

    return (
        <li className={classNameElement}>
            {newElement ? <NewElementMarker></NewElementMarker> : ""}
            <div className={classes.offersItem}>
                <div className={classes.offersItemContent}>
                    <h3 className={classes.offersItemTitle}>{title}</h3>
                    <a className={classes.offersItemLink} href="link">{deck}</a>
                </div>
                <div className={classes.offersItemImg}>
                    {icon}
                </div>
            </div>
        </li>
    )
}

export default PromoElement