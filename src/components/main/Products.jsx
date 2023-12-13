import { productsCartList } from "../../data/productsCartList"
import ProductCart from "../shared/ProductCart"
import { createUseStyles } from "react-jss";
import { colors } from "../../style/globalStyle";

const Products = () => {

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
        catalog: {
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            fontFamily: "Ptsans"
        }
    });

    const classes = styles()

    return (
        <section>
            <div className={classes.titleWrapper}>
                <h2 className={classes.title}>Популярные товары:</h2>
                <a className={classes.titleLink} href="link">Все популярные товары</a>
            </div>
            <ul className={classes.catalog}>
                {productsCartList.map((item) =>
                    <ProductCart newElement={item.newElement} key={item.key} id={item.model} alt={item.model} previousPrice={item.previousPrice} price={item.price} title={item.title} model={item.model}></ProductCart>
                )}
            </ul>
        </section>
    )
}

export default Products