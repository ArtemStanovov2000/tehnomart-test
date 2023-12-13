import ItemLink from "../shared/components/ItemLink"
import { createUseStyles } from "react-jss";
import { colors } from "../../style/globalStyle";

const HeaderBottom = () => {
    const navigationList = [
        {
            href: "link",
            content: "Главная",
            key: "12-1"
        },
        {
            href: "link",
            content: "Компания",
            key: "12-2"
        },
        {
            href: "link",
            content: "Каталог",
            key: "12-3"
        },
        {
            href: "link",
            content: "Новости",
            key: "12-4"
        },
        {
            href: "link",
            content: "Спецпредложения",
            key: "12-5"
        },
        {
            href: "link",
            content: "Доставка",
            key: "12-6"
        },
        {
            href: "link",
            content: "Контакты",
            key: "12-7"
        },
    ]

    const styles = createUseStyles({
        bottom: {
            paddingBottom: "54px"
        },
        bottomNavigation: {
            backgroundColor: colors.darkBlue,
            fontSize: "18px",
            lineHeight: "24px"
        },
        navigationList: {
            borderBottom: `5px solid ${colors.blackBlue}`,
            display: "flex",
            justifyBontent: "space-around",
            height: "55px"
        },
        navigationListItem: {
            height: "100%",
            display: "flex",
            alignItems: "center",
            paddingLeft: "25px",
            paddingRight: "25px",
            "&:hover": {
                backgroundColor: colors.blackBlue
            },
            "&:active": {
                backgroundColor: colors.activeBlackBlue
            }
        }
    });

    const classes = styles()

    return (
        <div className={classes.bottom}>
            <nav className={classes.bottomNavigation}>
                <ul className={classes.navigationList}>
                    {navigationList.map((item) => <ItemLink className={classes.navigationListItem} href={item.href} content={item.content} key={item.key}></ItemLink>)}
                </ul>
            </nav>
        </div>
    )
}

export default HeaderBottom