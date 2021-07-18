import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {toggleBackground} from "../src/store/slices/BackgroundSlice";
import Nav from "../src/components/Navigation/Nav";
import Button from "../src/components/Button";
import Head from "next/head";

function Navigation() {
    const dispatch = useDispatch()
    const pageShow = true

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
                <title>Evgeny Berezin</title>
            </Head>

            <div className="page" style={
                (pageShow ? {
                    animation: 'pageFadeIn .1s ease-in'
                } : {
                    animation: 'pageFadeOut .1s ease-out'
                })
            }>
                <Nav/>
                <Button to={"/"} title={"go back"} isBlack={true}/>
            </div>
        </>
    )
}

export default Navigation