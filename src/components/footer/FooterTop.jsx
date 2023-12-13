import ItemLink from "../shared/components/ItemLink"
import { createUseStyles } from "react-jss";
import { colors, container } from "../../style/globalStyle";

const FooterTop = () => {

    const navigationFirstLinkList = [
        {
            href: "link",
            content: "Компания",
            key: "4323-1"
        },
        {
            href: "link",
            content: "Новости",
            key: "4323-2"
        },
        {
            href: "link",
            content: "Каталог",
            key: "4323-3"
        },
        {
            href: "link",
            content: "Доставка",
            key: "4323-4"
        },
        {
            href: "link",
            content: "Контакты",
            key: "4323-5"
        },
    ]

    const navigationSecondaryLinkList = [
        {
            href: "link",
            content: "Материалы",
            key: "4323-6"
        },
        {
            href: "link",
            content: "Техника",
            key: "4323-7"
        },
        {
            href: "link",
            content: "Инструмент",
            key: "4323-8"
        },
        {
            href: "link",
            content: "Спецпредложения",
            key: "4323-9"
        },
    ]

    const styles = createUseStyles({
        top: {
            backgroundColor: colors.darkBlue,
            display: "flex"
        },
        container,
        topInner: {
            display: "flex",
            marginBottom: "60px"
        },
        topLeft: {
            display: "flex",
            flexDirection: "column",
            flexShrink: "0"
        },
        companyName: {
            backgroundColor: colors.basicRed,
            border: "0",
            borderBottom: "5px solid rgb(181, 41, 51)",
            textTransform: "uppercase",
            padding: "20px 41px 25px 41px",
            width: "max-content",
            fontSize: "30px",
            lineHeight: "30px"
        },
        adreesDesc: {
            fontSize: "18px",
            lineHeight: "24px"
        },
        navigation: {
            width: "100%",
            paddingLeft: "70px"
        },
        navigationFirst: {
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "40px",
            paddingBottom: "40px"
        },
        navigationSecondary: {
            display: "flex",
            justifyContent: "space-between"
        },
        firstLink: {
            color: colors.white,
            "&:hover": {
                textDecorationLine: "underline"
            },
            "&:active": {
                opacity: "0.3",
                textDecorationLine: "none"
            },
        },
        secondaryLink: {
            color: colors.basicYellow,
            "&:hover": {
                textDecorationLine: "underline"
            },
            "&:active": {
                opacity: "0.3",
                textDecorationLine: "none"
            },
            "&:first-child": {
                marginLeft: "25px"
            }
        }
    });

    const classes = styles()

    return (
        <div className={classes.top}>
            <div className={classes.container}>
                <div className={classes.topInner}>
                    <div className={classes.topLeft}>
                        <a className={classes.companyName} href="link">Техномарт</a>
                        <p className={classes.adreesDesc}>г. Санкт-Петербург, ул. Б.Конюшенная, д. 19/8<br />+7(812)
                            555-05-55</p>
                    </div>
                    <div className={classes.navigation}>
                        <ul className={classes.navigationFirst}>
                            {navigationFirstLinkList.map((item) => <ItemLink className={classes.firstLink} href={item.href} content={item.content} key={item.key}></ItemLink>)}
                        </ul>
                        <ul className={classes.navigationSecondary}>
                            {navigationSecondaryLinkList.map((item) => <ItemLink classNameLink={classes.secondaryLink} href={item.href} content={item.content} key={item.key}></ItemLink>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterTop