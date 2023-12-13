import SignInSvg from "./SignInSvg"
import { createUseStyles } from "react-jss";
import { colors } from "../../style/globalStyle";

const HeaderMiddle = () => {

    const styles = createUseStyles({
        middle: {
            display: "flex",
            height: "158px",
            justifyContent: "space-between"
        },
        pageTitle: {
            lineHeight: "23px",
            textAlign: "left",
            fontStyle: "italic",
            display: "flex",
            fontSize: "16px",
            fontWeight: "400",
            color: colors.basicRed,
            alignItems: "center",
            paddingLeft: "30px"
        },
        middleContacts: {
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center"
        },
        contactsPhone: {
            fontSize: "21px",
            lineHeight: "30px",
            fontStyle: "normal",
            fontWeight: "bold",
            color: colors.basicRed,
            padding: "7px 40px",
            height: "30px",
            border: `3px solid ${colors.white}`,
            display: "flex",
            "&::before": {
                display: "flex",
                paddingRight: "16px",
                content: "url(/images/icons/icon-phone.svg)"
            }
        },
        contactsAddress: {
            fontSize: "14px",
            lineHeight: "24px",
            fontStyle: "normal",
            color: colors.darkBlue
        },
        middleLogin: {
            alignSelf: "center"
        },
        loginList: {
            display: "flex",
            alignItems: "center",
            fontSize: "21px",
            lineHeight: "21px"
        },
        loginListSignIn: {
            marginRight: "10px",
            paddingLeft: "19px",
            paddingRight: "27px",
            paddingBottom: "12px",
            paddingTop: "12px",
            backgroundColor: colors.white
        },
        loginLink: {
            display: "flex",
            margin: "0",
            color: colors.black,
            fill: colors.basicGrey,
            "&:hover": {
                color: colors.basicRed,
                fill: colors.blackBlue,
            },
            "&:active": {
                color: colors.basicGrey,
                fill: colors.basicGrey
            }
        },
        linkDeck: {
            margin: "0",
            paddingLeft: "6px"
        },
        loginListSignUp: {
            padding: "12px 24px",
            backgroundColor: colors.white
        }
    });

    const classes = styles()

    return (
        <div className={classes.middle}>
            <h2 className={classes.pageTitle}>Интернет-магазин<br />строительных материалов<br />и инструментов для ремонта</h2>
            <div className={classes.middleContacts}>
                <a className={classes.contactsPhone} href="tel:+78125550555">+7(812) 555-05-55</a>
                <address className={classes.contactsAddress}>г. Санкт-Петербург, ул. Б.Конюшенная, д. 19/8
                </address>
            </div>
            <div className={classes.middleLogin}>
                <ul className={classes.loginList}>
                    <li className={classes.loginListSignIn}>
                        <a className={classes.loginLink} href="link">
                            <SignInSvg></SignInSvg>
                            <p className={classes.linkDeck}>Войти:</p>
                        </a>
                    </li>
                    <li className={classes.loginListSignUp}>
                        <a className={classes.loginLink} href="link">Регистрация</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderMiddle