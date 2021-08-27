import * as ga from '../../utils/GoogleAnalytics'

function InstagramPhoto({id, uri}) {
    const trackImage = (uri) => {
        ga.event({
            action: "imageOpened",
            params : {
                image: uri
            }
        })
    }

    return (
        <div className={"photo"} key={id}>
            <img
                loading={"lazy"}
                src={uri}
                alt=""
                data-oi-preview={uri}
                data-oi-fullsize={uri}
                onClick={() => {
                    trackImage(uri)
                }}
            />
        </div>
    )
}

export default InstagramPhoto