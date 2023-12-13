import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../../store/todoCart"
import NewElementMarker from "./components/NewElementMarker"
import { createUseStyles } from "react-jss";
import { visuallyHidden, colors } from "../../style/globalStyle";


const ProductCart = ({ title, model, previousPrice, price, newElement, id }) => {

    const styles = createUseStyles({
        catalogItem: {
            width: "218px",
            height: "318px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            border: "1px solid var(--basic-grey)",
            position: "relative",
            "&:hover": {
                boxShadow: "0 0 5px 2px var(--basic-grey)"
            }
        },
        catalogTop: {
            width: "220px",
            height: "170px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        catalogButtons: {
            display: "grid",
            width: "135px",
            gap: "10px"
        },
        visuallyHidden,
        inCartButton: {
            color: colors.darkBlue,
            backgroundColor: colors.white,
            border: "3px solid var(--basic-green)",
            borderRadius: "3px",
            textTransform: "uppercase",
            height: "min-content",
            justifyContent: "center",
            paddingTop: "8px",
            paddingBottom: "8px",
            "&:hover": {
                borderColor: colors.darkBlue,
            },
            "&:active": {
                borderColor: colors.basicGrey,
                color: colors.basicGrey,
            }
        },
        catalogTitle: {
            fontSize: "18px",
            fontWeight: "bold",
            lineHeight: "20px",
            marginTop: "0"
        },
        previousPrice: {
            color: colors.basicGrey,
            marginBottom: "15px",
            fontSize: "17px",
            fontWeight: "bold",
            lineHeight: "18px"
        },
        price: {
            backgroundColor: colors.basicRed,
            width: "max-content",
            paddingTop: "10px",
            paddingBottom: "10px",
            paddingLeft: "32px",
            paddingRight: "44px",
            marginLeft: "10px",
            clipPath: "polygon(0% 0%, 86% 0, 100% 50%, 86% 100%, 0% 100%)",
            borderRadius: "3px",
            fontSize: "17px",
            fontWeight: "bold",
            lineHeight: "18px"
        },
        buyButton: {
            color: colors.white,
            backgroundColor: colors.basicGreen,
            border: "0",
            borderBottom: "3px solid #367315",
            borderRadius: "3px",
            textTransform: "uppercase",
            display: "flex",
            height: "min-content",
            paddingTop: "10px",
            paddingBottom: "10px",
            justifyContent: "center",
            "&:hover": {
                backgroundColor: "#09bb2d",
            },
            "&:active": {
                backgroundColor: "#518534"
            },
            "&::before": {
                content: "url(/images/icons/icon-cart.svg)",
                paddingRight: "9px"
            }
        }
    });

    const classes = styles()

    const [open, setOpen] = useState(false)
    const [inCart, setInCart] = useState(false)
    const dispatch = useDispatch()
    const addCart = () => {
        setInCart(true)
        dispatch(addTodo({ id }))
    }

    return (
        <li className={classes.catalogItem}>
            {newElement ? <NewElementMarker></NewElementMarker> : ""}
            <div className={classes.catalogTop} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
                <img className={open === true ? classes.visuallyHidden : ""} alt={model} />
                <div className={`${classes.catalogButtons} ${open === false ? classes.visuallyHidden : ""}`}>
                    <button type="button" className={classes.buyButton}>Купить</button>
                    <button type="button" onClick={addCart} className={classes.inCartButton}>{inCart ? "Уже в корзине" : "В корзину"}</button>
                </div>
            </div>
            <h3 className={classes.catalogTitle}>{title}<br />{model}</h3>
            <s className={classes.previousPrice}>{previousPrice} Р.</s>
            <a className={classes.price} href="link">{price} Р.</a>
        </li>
    )
}

export default ProductCart