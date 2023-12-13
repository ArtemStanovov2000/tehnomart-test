import { createUseStyles } from "react-jss";

const BookmarksSvg = () => {

    const styles = createUseStyles({
        headerTopIcons: {
            alignSelf: "center",
            paddingLeft: "9px",
            paddingRight: "9px"
        }
    });

    const classes = styles()

    return (
        <svg className={classes.headerTopIcons} width="14" height="16" viewBox="0 0 14 16" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g>
                <path
                    d="M14 15C14 15.55 13.632 15.741 13.182 15.426L7.81892 11.661C7.36891 11.346 6.6319 11.346 6.1819 11.661L0.817828 15.426C0.367822 15.741 -0.000183105 15.55 -0.000183105 15V1C-0.000183105 0.45 0.449823 0 0.99983 0H13C13.55 0 14 0.45 14 1V15Z"
                    fill="white" />
            </g>
        </svg>
    )
}

export default BookmarksSvg