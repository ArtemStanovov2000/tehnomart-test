import { createUseStyles } from "react-jss";
import { colors } from "../../../style/globalStyle";

const AboutForm = ({ setStateForm }) => {

    const styles = createUseStyles({
        aboutForm: {
            position: "absolute",
            left: "calc(50% - 310px)",
            width: "620px",
            display: "flex",
            height: "423px",
            borderTop: `7px solid ${colors.basicRed}`,
            backgroundColor: colors.white,
            justifyContent: "space-between",
            flexDirection: "column",
            boxShadow: `0 0 13px 2px ${colors.basicGrey}`,
            top: "-60px"
        },
        formAppeal: {
            height: "100%",
            display: "flex",
            margin: "13px 80px 35px 80px",
            fontFamily: "PTsans",
            flexWrap: "wrap",
            alignContent: "flex-start",
            columnGap: "20px"
        },
        formAppealItem: {
            flexGrow: "1",
            height: "max-content",
            display: "flex",
            flexDirection: "column"
        },
        appealItemTitle: {
            margin: "0",
            fontSize: "18px",
            lineHeight: "24px",
            fontStyle: "normal",
            fontWeight: "400"
        },
        appealItemPole: {
            marginTop: "10px",
            border: `2px solid ${colors.basicGrey}`,
            borderRadius: "2px",
            padding: "10px",
            marginBottom: "10px"
        },
        itemPoleLetter: {
            marginTop: "10px",
            border: `2px solid ${colors.basicGrey}`,
            borderRadius: "2px",
            padding: "10px",
            paddingBottom: "75px"
        },
        formPost: {
            justifyContent: "flex-end",
            width: "100%",
            backgroundColor: "#f4f4f4",
            display: "flex",
            alignItems: "center"
        },
        formPostButton: {
            backgroundColor: colors.basicRed,
            border: "0",
            margin: "37px 80px 37px 37px",
            width: "100%",
            height: "max-content",
            paddingTop: "10px",
            paddingBottom: "10px",
            fontFamily: "Cuprum",
            fontSize: "14px",
            color: colors.white,
            textTransform: "uppercase",
            cursor: "pointer"
        },
        buttonClose: {
            width: "21px",
            height: "21px",
            backgroundImage: "url(/images/icons/icon-close.svg)",
            backgroundRepeat: "no-repeat",
            zIndex: "1",
            flexShrink: "0",
            marginTop: "14px",
            padding: "0",
            border: "none",
            color: "inherit",
            backgroundColor: "transparent",
            cursor: "pointer",
            marginLeft: "calc(100% - 32px)"
        }
    });

    const classes = styles()


    return (
        <form className={classes.aboutForm} action="" method="post" name="contact_form">
            <button className={classes.buttonClose} onClick={() => setStateForm(false)}></button>
            <div className={classes.formAppeal}>
                <div className={classes.formAppealItem}>
                    <h2 className={classes.appealItemTitle}>Ваше имя:</h2>
                    <input className={classes.appealItemPole} id="Form-input-name" type="text"
                        placeholder="Имя Фамилия" />
                </div>
                <div className={classes.formAppealItem}>
                    <h2 className={classes.appealItemTitle}>Ваш e-mail:</h2>
                    <input className={classes.appealItemPole} id="Form-input-email" type="email"
                        placeholder="email@example.com" />
                </div>
                <div className={classes.formAppealItem}>
                    <h2 className={classes.appealItemTitle}>Текст письма:</h2>
                    <input className={classes.itemPoleLetter} id="Form-input-text" type="text"
                        placeholder="В свободной форме" />
                </div>
            </div>
            <div className={classes.formPost}>
                <button type="submit" className={classes.formPostButton}>Отправить</button>
            </div>
        </form>
    )
}

export default AboutForm