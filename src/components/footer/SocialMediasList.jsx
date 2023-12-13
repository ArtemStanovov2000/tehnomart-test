import { createUseStyles } from "react-jss";
import { colors } from "../../style/globalStyle";

const SocialMediasList = () => {

    const styles = createUseStyles({
        socialMediasList: {
            display: "flex"
        },
        socialMediasListItem: {
            height: "42px",
            width: "42px",
            backgroundColor: colors.extraDarkBlue,
            borderRadius: "50%",
            margin: "2px",
            display: "flex",
            "&:hover": {
                backgroundColor: colors.basicRed
            },
            "&:active": {
                backgroundColor: colors.basicRed
            }
        },
        socialMediasListLink: {
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center"
        }
    });

    const classes = styles()

    return (
        <ul className={classes.socialMediasList}>
            <li className={classes.socialMediasListItem}>
                <a className={classes.socialMediasListLink} href="link">
                    <img alt="Вконтакте" src="images/icons/vk.svg" width="26" height="15" />
                </a>
            </li>
            <li className={classes.socialMediasListItem}>
                <a className={classes.socialMediasListLink} href="link">
                    <img alt="Фейсбук" src="images/icons/facebook.svg" width="12" height="22" />
                </a>
            </li>
            <li className={classes.socialMediasListItem}>
                <a className={classes.socialMediasListLink} href="link">
                    <img alt="инстаграмм" src="images/icons/instagram.svg" width="21" height="21" />
                </a>
            </li>
        </ul>
    )
}

export default SocialMediasList