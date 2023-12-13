import { manufacturesList } from "../../data/manufacturesList"
import { createUseStyles } from "react-jss";
import { colors } from "../../style/globalStyle";

const Manufactures = () => {

    const styles = createUseStyles({
        titleWrapper: {
            backgroundColor: "#F9F5F0",
            display: "flex",
            justifyContent: "space-between",
            marginTop: "65px",
            marginBottom: "20px",
            fontFamily: "Cuprum"
        },
        title: {
            marginLeft: "28px",
            marginRight: "14px",
            alignSelf: "center",
            textTransform: "uppercase",
            fontSize: "30px",
            lineHeight: "30px",
            fontWeight: "400",
            color: colors.darkBlue
        },
        titleLink: {
            backgroundColor: colors.basicRed,
            height: "min-content",
            padding: "10px 24px",
            marginTop: "36px",
            marginBottom: "36px",
            marginLeft: "28px",
            marginRight: "14px",
            alignSelf: "center",
            textTransform: "uppercase"
        },
        list: {
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            fontFamily: "Ptsans",
            justifyContent: "space-between"
        },
        listItem: {
            border: `1px solid ${colors.basicGrey}`,
            width: "218px",
            height: "143px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "&:hover": {
                boxShadow: `0 0 5px 2px ${colors.basicGrey}`,
            },
            "&:active": {
                opacity: "0.3",
                boxShadow: `0 0 5px 2px var${colors.basicGrey}`
            }
        }
    });

    const classes = styles()


    return (
        <section>
            <div className={classes.titleWrapper}>
                <h2 className={classes.title}>Популярные производители:</h2>
                <a className={classes.titleLink} href="link">Все производители</a>
            </div>
            <ul className={classes.list}>
                {manufacturesList.map((item) => (
                    <li className={classes.listItem} key={item.key}>
                        <a href={item.href}><img src={item.src} alt={item.alt} /></a>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Manufactures