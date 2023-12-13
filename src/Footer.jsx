import FooterTop from "./components/footer/FooterTop"
import FooterBottom from "./components/footer/FooterBottom"
import { createUseStyles } from "react-jss";
import { colors } from "./style/globalStyle";

const Footer = () => {

    const styles = createUseStyles({
        footer: {
            color: colors.white,
            fontFamily: "Cuprum"
        }
    });

    const classes = styles()

    return (
        <footer className={classes.footer}>
            <FooterTop></FooterTop>
            <FooterBottom></FooterBottom>
        </footer>
    )
}

export default Footer