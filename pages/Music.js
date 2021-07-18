import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {toggleBackground} from "../src/store/slices/BackgroundSlice";
import Heading1 from "../src/components/Content/Heading1";
import Link from "../src/components/Content/Link";
import Button from "../src/components/Button";
import Head from "next/head";

function MusicPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(
            toggleBackground({
                value: 1002
            })
        )
    }, [dispatch])

    return (
        <>
            <Head>
                <title>Evgeny Berezin - Music</title>
            </Head>

            <div className="page" style={{animation: 'pageFadeIn .1s ease-in'}}>
                <div className="content content-music">
                    <Heading1 title={"Music"}/>

                    <div className="soundcloud">
                        <iframe title={"Tomasci – 2020, Apple Music"} loading={"lazy"} allow={"autoplay *; encrypted-media *; fullscreen *"} frameBorder={"0"} height={"450"}
                                style={{width:'100%', maxWidth:'660px', overflow:'hidden', background:'transparent'}}
                                sandbox={"allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"}
                                src={"https://embed.music.apple.com/ru/playlist/2020/pl.692385e18c5d4cd49d445f4b4ae3b973?l=en"}/>

                        <p>
                            Listen for free at <Link title={'SoundCloud'} href={'https://soundcloud.com/tomasci/tracks'}/>.
                        </p>
                        <p>
                            Also available in <Link title={'Spotify'} href={'https://open.spotify.com/artist/0FICARG90732VmxAZwvUEO?si=ZptfUG_yRFWtrN5pNHevPA&dl_branch=1'}/> and <Link title={'Apple Music'} href={'https://music.apple.com/ru/artist/tomasci/1543521807?l=en'}/>.
                        </p>
                        <p>Maybe one day I remove this heavy Apple Music player and just write my own...</p>
                    </div>

                </div>

                <Button to={"/Navigation"} title={"go back"} isWhite={true} isFixed={false}/>
            </div>
        </>
    )
}

export default MusicPage