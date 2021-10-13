import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {toggleBackground} from "../src/store/slices/BackgroundSlice";
import Heading1 from "../src/components/Content/Heading1";
import Profile from "../src/components/Content/Profile.About";
import Description from "../src/components/Content/Description.About";
import Contact from "../src/components/Content/Contact.About";
import Button from "../src/components/Button";
import Oiii from "../src/utils/Oiii/Oiii";
import Head from "next/head";

function AboutPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(
            toggleBackground({
                value: 1002
            })
        )

        let oi = new Oiii()

        return () => {
            oi.unload()
        }
    }, [dispatch])

    return (
        <>
            <Head>
                <title>Evgeny Berezin - About</title>
            </Head>

            <div className="page" style={{animation: 'pageFadeIn .1s ease-in'}}>
                <div className="content content-about">
                    <Heading1 title={"About"}/>
                    <Profile/>
                    <Description>
                        JavaScript & React.js developer
                    </Description>
                    <Description>
                        Also I like to ride a bike, listen music, take bad photos and a little interested in space. I write my own music, but just a beginner
                    </Description>
                    <Contact icon={'mail'} title={'email:'} link={'mailto:whytomasci@gmail.com'} linkTitle={'whytomasci@gmail.com'} mt={16}/>
                    <Contact icon={'telegram'} title={'telegram:'} link={'https://t.me/whytomasci'} linkTitle={'t.me/whytomasci'} mt={16}/>
                </div>

                <Button to={"/Navigation"} title={"go back"} isWhite={true} isFixed={false}/>
            </div>
        </>
    )
}

export default AboutPage