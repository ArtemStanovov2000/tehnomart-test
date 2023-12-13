import Perforators from "./Perforators"
import Drills from "./Drills"
import { useState } from "react"
import { createUseStyles } from "react-jss";
import { colors } from "../../../style/globalStyle";

const Slider = () => {

    const styles = createUseStyles({
        promoBoers: {
            gridArea: "D",
            position: "relative"
        },
        buttonBox: {
            position: "absolute",
            display: "flex",
            width: "575px",
            justifyContent: "space-between",
            alignItems: "center",
            bottom: "calc(42%)",
            left: "25px"
        },
        buttonLeft: {
            backgroundImage: "url(/images/icons/icon-btn-left.svg)",
            width: "22px",
            height: "40px",
            border: "none",
            padding: "0",
            cursor: "pointer",
            backgroundColor: "rgba(0, 0, 0, 0)"
        },
        buttonRight: {
            backgroundImage: "url(/images/icons/icon-btn-right.svg)",
            width: "22px",
            height: "40px",
            border: "none",
            padding: "0",
            cursor: "pointer",
            backgroundColor: "rgba(0, 0, 0, 0)"
        },
        radioBox: {
            position: "absolute",
            bottom: "35px",
            display: "flex",
            left: "calc(50% - 20px)",
            width: "30px",
            justifyContent: "space-between"
        },
        radioInner: {
            borderRadius: "50%",
            width: "10px",
            height: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.white
        },
        sliderRadio: {
            appearance: "none",
            "&:checked": {
                width: "6px",
                height: "6px",
                background: colors.basicRed,
                borderRadius: "50px",
                margin: "0"
            }
        }
    });

    const classes = styles()

    const [state, setState] = useState(true)

    const slideImg = function () {
        setState(!state)
        if (state === true) {
            return state
        } else {
            return state
        }
    }

    return (
        <li className={classes.promoBoers}>
            {state === false ? <Perforators></Perforators> : <Drills></Drills>}
            <div className={classes.buttonBox}>
                <button onClick={slideImg} className={classes.buttonLeft}></button>
                <button onClick={slideImg} className={classes.buttonRight}></button>
            </div>
            <div className={classes.radioBox}>
                <div className={classes.radioInner}>
                    <input className={classes.sliderRadio} type="radio" id="perforators"
                        name="perforators" checked={state === false ? true : false}/>
                </div>
                <div className={classes.radioInner}>
                    <input className={classes.sliderRadio} type="radio" id="drills" name="drills" checked={state === true ? true : false}/>
                </div>
            </div>
        </li>
    )
}

export default Slider