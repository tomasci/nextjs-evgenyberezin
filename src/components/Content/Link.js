function Link({title, href}) {
    return (
        <a href={href} target={"_blank"} rel={"noreferrer"}>{title}</a>
    )
}

export default Link