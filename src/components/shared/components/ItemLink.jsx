const ItemLink = ({className, link, content, classNameLink}) => {
    return (
        <li className={className}><a className={classNameLink} href={link}>{content}</a></li>
    )
}

export default ItemLink