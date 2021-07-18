import Link from 'next/link'

function Nav() {
    return (
        <div className="nav">
            <Link href={"/About"}>
                <a>
                    About
                </a>
            </Link>
            <Link href={"/Skills"}>
                <a>
                    Skills & Experience
                </a>
            </Link>
            <Link href={"/Code"}>
                <a>
                    Code demos
                </a>
            </Link>
            <Link href={"/Design"}>
                <a>
                    Design demos
                </a>
            </Link>
            <Link href={"/Photos"}>
                <a>
                    Photos
                </a>
            </Link>
            <Link href={"/Music"}>
                <a>
                    Music
                </a>
            </Link>
        </div>
    )
}

export default Nav