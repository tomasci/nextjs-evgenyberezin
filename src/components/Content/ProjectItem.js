import Link from "./Link";
import InstagramPhoto from "./InstagramPhoto";

function ProjectItem({image, title, about, linkList}) {
    return (
        <div className="item">
            {(image ? (
                <InstagramPhoto id={0} uri={image}/>
            ) : null)}
            <div className="about">
                <h2>
                    {title}
                </h2>
                {about.map((p, index) => {
                    return (
                        <p key={index}>
                            {p}
                        </p>
                    )
                })}
                {(linkList ? (
                    <div className="links">
                        {linkList.map((link, index) => {
                            return (
                                <Link title={link.title} href={link.href} key={index}/>
                            )
                        })}
                    </div>
                ) : null)}
            </div>
        </div>
    )
}

export default ProjectItem