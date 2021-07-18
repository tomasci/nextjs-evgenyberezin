import Link from "./Link";

function Contact({icon, title, link, linkTitle, mt}) {
    return (
        <div className={
            'contact' + (mt ? ' mt-' + mt : '')
        }>
            <div className="icon">
                <i className={'evb-icons evb-icons-' + icon}/>
            </div>
            <div className="info">
                <div className="title">
                    {title}
                </div>
                <div className="link">
                    <Link title={linkTitle} href={link}/>
                </div>
            </div>
        </div>
    )
}

export default Contact