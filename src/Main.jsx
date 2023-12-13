import Promo from "./components/main/Promo"
import Products from "./components/main/Products"
import Manufactures from "./components/main/Manufactures"
import Services from "./components/main/Services"
import About from "./components/main/About"
import { createUseStyles } from "react-jss";
import { container } from "./style/globalStyle"

const Main = () => {

    const styles = createUseStyles({
        container
    });

    const classes = styles()

    return (
        <main>
            <div className={classes.container}>
                <Promo></Promo>
                <Products></Products>
                <Manufactures></Manufactures>
            </div>
            <Services></Services>
            <div className={classes.container}>
                <About></About>
            </div>
        </main>
    )
}

export default Main