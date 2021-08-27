import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang={"en"}>
                <Head>
                    <title/>
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                                  page_path: window.location.pathname,
                                });
                              `,
                        }}
                    />
                </Head>
                <body>
                    <noscript>You need to enable JavaScript to run this app.</noscript>
                    <noscript>
                        <div>
                            <img src="https://mc.yandex.ru/watch/51684428" style={{position: 'absolute', left: '-9999px'}} alt="" />
                        </div>
                    </noscript>
                    <Main/>
                    <NextScript/>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                                        m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                                      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                                
                                      ym(51684428, "init", {
                                        clickmap:true,
                                        trackLinks:true,
                                        accurateTrackBounce:true
                                      });`
                        }}
                    />
                </body>
            </Html>
        )
    }
}

export default MyDocument