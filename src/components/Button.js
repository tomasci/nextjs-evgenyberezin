import Link from 'next/link'

function Button({to = '/', title = 'Title', isBlue, isBlack, isWhite, isFixed = true}) {
    function getClassName() {
        let buttonClass = 'button'
        let array = [buttonClass]

        if (isBlue) array.push('button-blue')
        if (isBlack) array.push('button-black')
        if (isWhite) array.push('button-white')

        if (isFixed) array.push('button-fixed')

        return array.join(' ')
    }

    return (
        <div className={getClassName()}>
            <Link href={to}>
                <a>
                    {title}
                </a>
            </Link>
        </div>
    )
}

export default Button