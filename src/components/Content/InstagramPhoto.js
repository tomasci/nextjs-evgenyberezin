function InstagramPhoto({id, uri}) {
    return (
        <div className={"photo"} key={id}>
            <img loading={"lazy"} src={uri} alt="" data-oi-preview={uri} data-oi-fullsize={uri}/>
        </div>
    )
}

export default InstagramPhoto