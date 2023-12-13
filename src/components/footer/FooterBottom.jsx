import SocialMediasList from "./SocialMediasList"
import { createUseStyles } from "react-jss";
import { colors, container } from "../../style/globalStyle";

const FooterBottom = () => {

    const styles = createUseStyles({
        bottom: {
            backgroundColor: colors.blackBlue,
        },
        container,
        bottomInner: {
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "35px",
            paddingBottom: "35px",
        },
        bottomCopyright: {
            margin: "0",
            fontSize: "16px",
            lineHeight: "18px",
        },
        bottomContactsBox: {
            display: "flex",
            width: "290px",
            justifyContent: "space-between",
            fontSize: "16px",
            lineHeight: "18px",
        },
        bottomContacts: {
            margin: "0",
            lineHeight: "18px",
        },
        bottomLink: {
            color: colors.basicYellow,
        
            "&:hover": {
                textDecorationLine: "underline"
            },
            "&:active": {
                textDecorationLine: "none",
                color: colors.basicRed
            }
        }
    });

    const classes = styles()

    return (
        <div className={classes.bottom}>
            <div className={classes.container}>
                <div className={classes.bottomInner}>
                    <p className={classes.bottomCopyright}>© 2010-2019 Компания "Техномарт"<br />Все права защищены</p>
                    <SocialMediasList></SocialMediasList>
                    <div className={classes.bottomContactsBox}>
                        <p className={classes.bottomContacts}>Обратная связь:<br /><a className={classes.bottomLink}
                            href="link">mail@htmlacademy.ru</a></p>
                        <p className={classes.bottomContacts}>Разработано:<br /><a className={classes.bottomLink}
                            href="link">htmlacademy.ru</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterBottom