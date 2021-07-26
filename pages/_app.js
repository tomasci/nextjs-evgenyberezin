import {Provider} from "react-redux"
import store from "../src/store/store"
import '../styles/styles.scss'
import Background from "../src/components/Background";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
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
