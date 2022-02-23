import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {toggleBackground} from "../src/store/slices/BackgroundSlice";
import Heading1 from "../src/components/Content/Heading1";
import Contact from "../src/components/Content/Contact.About";
import Instagram from "../src/components/Content/Instagram";
import Button from "../src/components/Button";
import Head from "next/head";

function PhotosPage() {
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
                <title>Evgeny Berezin - Photos</title>
            </Head>

            <div className="page" style={{animation: 'pageFadeIn .1s ease-in'}}>
                <div className="content content-photos">
                    <Heading1 title={"Photos"}/>
                    <Contact icon={"instagram"} title={"instagram:"} linkTitle={"instagram.com/whytomasci"} link={"https://instagram.com/whytomasci"}/>

                    <Instagram/>

                </div>

                <Button to={"/Navigation"} title={"go back"} isWhite={true} isFixed={false}/>
            </div>
        </>
    )
}

export default PhotosPage