import SearchSvg from "./SearchSvg"
import BookmarksSvg from "./BookmarksSvg"
import CartSvg from "./CartSvg"
import { useSelector } from "react-redux"
import { createUseStyles } from "react-jss";
import { colors } from "../../style/globalStyle";

const HeaderTop = ({bookmarksValue}) => {

    const styles = createUseStyles({
        top: {
            display: "flex",
            height: "42px",
            fontSize: "18px"
        },
        topLeft: {
            display: "flex",
            alignItems: "center",
            marginLeft: "0",
            marginRight: "auto"
        },
        leftTitle: {
            backgroundColor: colors.basicRed,
            border: "0",
            borderBottom: "5px solid rgb(181, 41, 51)",
            paddingLeft: "56px",
            paddingRight: "56px",
            textTransform: "uppercase",
            height: "100%",
            display: "flex",
            alignItems: "center",
            fontSize: "23px",
            "&:active": {
                backgroundColor: "#ba2732",
                borderColor: "#8d1e26"
            }
        },
        leftSearch: {
            display: "flex",
            alignItems: "center",
            fillOpacity: "0.3",
            fill: colors.white,
            height: "100%",
            width: "100%",
            "&:hover": {
                fillOpacity: "1",
                fill: colors.white
            },
            "&:focus": {
                fillOpacity: "1",
                fill: colors.basicRed,
                color: colors.black,
                backgroundColor: colors.white
            
            },
            "&:active": {
                fillOpacity: "0.3",
                fill: colors.white,
                backgroundColor: colors.blackBlue,
                color: "rgba(255, 255, 255, 0.3)"
            }
        },
        topRight: {
            display: "flex",
            alignItems: "center"
        },
        rightCart: {
            height: "100%",
            display: "flex",
            alignItems: "center",
            fillOpacity: "0.3",
            fill: colors.white,
            paddingRight: "26px",
            "&:hover": {
                fillOpacity: "1",
                fill: colors.white,
            },
            "&:active": {
                backgroundColor: "#161D29",
                fillOpacity: "0.3",
                fill: colors.white,
                color: "rgba(255, 255, 255, 0.3)"
            }
        },
        rightOrder: {
            backgroundColor: colors.basicGreen,
            display: "flex",
            paddingLeft: "19px",
            paddingRight: "16px",
            height: "100%",
            alignItems: "center",
            "&:hover": {
                backgroundColor: "#5fbb2d"
            },
            "&:focus": {
                backgroundColor: colors.basicGreen,
                color: colors.white,
            },
            "&:active": {
                backgroundColor: colors.basicGreen,
                color: "#b1d39e"
            }
        }
    });

    const classes = styles()

    const cartState = useSelector(state => state.cart.cart)
    
    return (
        <div className={classes.top}>
            <div className={classes.topLeft}>
                <a className={classes.leftTitle} href="link">Техномарт</a>
                <a className={classes.leftSearch} href="link">
                    <SearchSvg></SearchSvg>
                    <p>Поиск:</p>
                </a>
            </div>
            <div className={classes.topRight}>
                <a className={classes.rightCart} href="link">
                    <BookmarksSvg></BookmarksSvg>
                    <p>Закладки: {bookmarksValue}</p>
                </a>
                <a className={classes.rightCart} href="link">
                    <CartSvg></CartSvg>
                    <p>Корзина: {cartState.length}</p>
                </a>
                <a className={classes.rightOrder} href="link">Оформить заказ</a>
            </div>
        </div>
    )
}

export default HeaderTop