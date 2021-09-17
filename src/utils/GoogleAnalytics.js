// log the page view with their URL
export const pageView = (url) => {
    window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
    })

    ym(process.env.NEXT_PUBLIC_YANDEX_METRIKA, 'hit', url)
}
// export const pageView = (url) => {
//     window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
//         page_path: url,
//     })
// }

// log specific events happening.
export const event = ({ action, params }) => {
    window.gtag('event', action, params)
}

//