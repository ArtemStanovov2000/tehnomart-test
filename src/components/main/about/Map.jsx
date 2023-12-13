import { createUseStyles } from "react-jss";
import { colors } from "../../../style/globalStyle";

const Map = ({ setStateMap }) => {

    const styles = createUseStyles({
        mapBox: {
            position: "absolute"
        },
        map: {
            position: "relative",
            overflow: "hidden",
            borderTop: `7px solid ${colors.basicRed}`,
            boxShadow: `0 0 13px 2px ${colors.basicGrey}`
        },
        buttonClose: {
            width: "21px",
            height: "21px",
            position: "absolute",
            backgroundImage: "url(/images/icons/icon-close.svg)",
            backgroundRepeat: "no-repeat",
            padding: "0",
            border: "none",
            color: "inherit",
            backgroundColor: "transparent",
            cursor: "pointer",
            left: "calc(100% + 15px)"
        }
    });

    const classes = styles()

    return (
        <div className={classes.mapBox}>
            <iframe title="map" className={classes.map} src="https://yandex.ru/map-widget/v1/-/CCUFyLSvGD" width="940"
                height="410">
            </iframe>
            <button className={classes.buttonClose} onClick={() => setStateMap(false)}></button>
        </div>
    )
}

export default Map