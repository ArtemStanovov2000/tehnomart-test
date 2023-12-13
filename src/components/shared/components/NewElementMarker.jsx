import { createUseStyles } from "react-jss";
import { newElementCatalog } from "../../../style/globalStyle";

const NewElementMarker = () => {

    const styles = createUseStyles({
        newElementCatalog
    });

    const classes = styles()

    return (
        <div className={classes.newElementCatalog}></div>
    )
}

export default NewElementMarker