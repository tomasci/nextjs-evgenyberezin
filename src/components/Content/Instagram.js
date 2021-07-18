import {useEffect} from "react";
import Oiii from "../../utils/Oiii/Oiii";
import InstagramPhoto from "./InstagramPhoto";

function Instagram() {

    const photos = new Array(30).fill(null).map((value, index, array) => {
        return index + 1
    })

    useEffect(() => {
        let oi = new Oiii()

        return () => {
            oi.unload()
        }
    }, [])

    return (
        <div className="instagram" data-oi-list={true}>
            {photos.map((photoID, index) => {
                return <InstagramPhoto id={index} uri={'/uploads/instagram/' + photoID + '.jpg'} key={index}/>
            })}
        </div>
    )
}

export default Instagram