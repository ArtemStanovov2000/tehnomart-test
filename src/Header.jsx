import HeaderTop from "./components/header/HeaderTop"
import HeaderMiddle from "./components/header/HeaderMiddle"
import HeaderBottom from "./components/header/HeaderBottom"
import { createUseStyles } from "react-jss";
import { colors, container } from "./style/globalStyle";

const Header = () => {

  const styles = createUseStyles({
    header: {
      backgroundColor: "rgba(0, 0, 0, 0.01)",
      fontFamily: "Cuprum"
    },
    topWrapper: {
      backgroundColor: colors.blackBlue,
      fontSize: "18px",
      lineHeight: "24px"
    },
    container
  });

  const classes = styles()

  return (
    <header className={classes.header}>
      <div className={classes.topWrapper}>
        <div className={classes.container}>
          <HeaderTop bookmarksValue={0} cartValue={0}></HeaderTop>
        </div>
      </div>
      <div className={classes.container}>
        <HeaderMiddle></HeaderMiddle>
        <HeaderBottom></HeaderBottom>
      </div>
    </header>
  )
}

export default Header