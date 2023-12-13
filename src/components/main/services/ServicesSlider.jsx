import { useState } from "react"
import { createUseStyles } from "react-jss";
import { colors } from "../../../style/globalStyle";
import CreditPage from "./CreditPage";
import WarrantyPage from "./WarrantyPage";
import DeliveryPage from "./DeliveriPage";

const ServicesSlider = () => {

    const styles = createUseStyles({
        servicesInner: {
            display: "flex",
            marginTop: "70px"
        },
        servicesLeft: {
            position: "relative"
        },
        buttonList: {
            width: "240px",
            flexShrink: "0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start"
        },
        buttonItem: {
            backgroundColor: colors.darkBlue,
            border: "0",
            justifyContent: "flex-start",
            display: "flex",
            paddingLeft: "22px",
            paddingTop: "12px",
            paddingBottom: "12px",
            width: "100%",
            fontFamily: "Cuprum",
            fontSize: "21px",
            lineHeight: "30px",
            color: colors.white,
            borderTop: "1px solid #293449",
            borderBottom: "1px solid #293449",
            "&:hover": {
                backgroundColor: colors.blackBlue
            },
            "&:active": {
                backgroundColor: colors.white,
                color: colors.darkBlue,
            }
        },
        shadowImage: {
            backgroundImage: "url(/images/shadow.png)",
            position: "absolute",
            width: "10px",
            height: "280px",
            left: "calc(100% - 10px)",
            top: "-52px"
        },
        servicesRight: {
            width: "100%"
        },
        servicesList: {
            display: "flex",
            marginTop: "20px",
            height: "283px",
            margin: "0"
        }
    });

    const classes = styles()


    const [page, setPage] = useState("creditPage")

    return (
        <div className={classes.servicesInner}>
            <div className={classes.servicesLeft}>
                <ul className={classes.buttonList}>
                    <li>
                        <button className={classes.buttonItem} type="button" onClick={() => setPage("deliveryPage")}>Доставка</button>
                    </li>
                    <li>
                        <button className={classes.buttonItem} type="button" onClick={() => setPage("warrantyPage")}>Гарантия</button>
                    </li>
                    <li>
                        <button className={classes.buttonItem} type="button" onClick={() => setPage("creditPage")}>Кредит</button>
                    </li>
                </ul>
                <div className={classes.shadowImage}></div>
            </div>
            <div className={classes.servicesRight}>
                <div className={classes.servicesList}>
                    {page === "deliveryPage" && <DeliveryPage></DeliveryPage>}
                    {page === "warrantyPage" && <WarrantyPage></WarrantyPage>}
                    {page === "creditPage" && <CreditPage></CreditPage>}
                </div>
            </div>
        </div>
    )
}

export default ServicesSlider