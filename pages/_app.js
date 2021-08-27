import {Provider} from "react-redux"
import store from "../src/store/store"
import '../styles/styles.scss'
import Background from "../src/components/Background";
import Head from "next/head";
import {useEffect} from "react";
import * as ga from '../src/utils/GoogleAnalytics'
import {useRouter} from "next/router";

function MyApp({ Component, pageProps }) {
    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = (url) => {
            ga.pageView(url)
        }
        //When the component is mounted, subscribe to router changes
        //and log those page views
        router.events.on('routeChangeComplete', handleRouteChange)

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    return (
        <>
            <Head>
                <title/>
                <meta charSet="utf-8"/>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1"/>
                <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
                <meta name="theme-color" content="#000000"/>
                <meta name="description" content="Evgeny Berezin – Javascript and React developer and web designer"/>
                <link rel="apple-touch-icon" href="/logo192.png"/>
                <link rel="manifest" href="/manifest.json"/>
            </Head>

            <Provider store={store}>
                <Component {...pageProps}/>
                <Background/>
            </Provider>
        </>
    )
}

export default MyApp
