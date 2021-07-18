import Head from "next/head";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {toggleBackground} from "../src/store/slices/BackgroundSlice";
import Heading1 from "../src/components/Content/Heading1";
import Button from "../src/components/Button";

function Custom404() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(
            toggleBackground({
                value: 1001
            })
        )
    }, [dispatch])

    return (
        <>
            <Head>
                <title>Evgeny Berezin - Not Found</title>
            </Head>

            <div className="page" style={{animation: 'pageFadeIn .1s ease-in'}}>
                <div className="content">
                    <Heading1 title={"404 Not Found"}/>
                </div>

                <Button to={"/"} title={"go to main page"} isWhite={true} isFixed={false}/>
            </div>
        </>
    )
}

export default Custom404