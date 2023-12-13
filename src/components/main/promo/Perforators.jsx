import { createUseStyles } from "react-jss";
import { colors } from "../../../style/globalStyle";

const Perforators = () => {

    const styles = createUseStyles({
        perforators: {
            height: "100%",
            backgroundImage: "url(/images/perforators.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%"
        },
        inner: {
            padding: "25px",
            height: "calc(100% - 50px)",
            display: "flex",
            flexDirection: "column"
        },
        title: {
            color: colors.white,
            margin: "0",
            fontSize: "36px",
            lineHeight: "36px",
            fontWeight: "bold",
            textTransform: "uppercase"
        },
        desc: {
            marginTop: "15px",
            color: colors.white,
            margin: "0",
            marginTop: "10px"
        },
        link: {
            color: colors.white,
            backgroundColor: colors.basicRed,
            width: "max-content",
            padding: "10px 46px",
            textTransform: "uppercase",
            fontSize: "14px",
            marginTop: "auto",
            "&:hover": {
                backgroundColor: "#ca2c37"
            },
            "&:active": {
                backgroundColor: "#ba2732"
            }
        }
    });

    const classes = styles()

    return (
        <div className={classes.perforators}>
            <div className={classes.inner}>
                <h3 className={classes.title}>Перфораторы</h3>
                <p className={classes.desc}>Настоящие мужские игрушки</p>
                <a className={classes.link} href="link">Открыть Каталог</a>
            </div>
        </div>
    )
}

export default Perforators