import Head from 'next/head'
import Button from "../src/components/Button";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {toggleBackground} from "../src/store/slices/BackgroundSlice";

export default function Home() {
    const dispatch = useDispatch()
    const pageShow = true

    useEffect(() => {
        dispatch(
            toggleBackground({
                value: 1000
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
                <div className="logotype"/>
                <Button to={"/Navigation"} title={"start"} isBlue={true}/>
            </div>
        </>
  )
}
