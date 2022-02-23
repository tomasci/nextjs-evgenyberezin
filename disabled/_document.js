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
                    {/*<title/>*/}
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

                    {/* Yandex.Metrika counter */}
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
								   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
								   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
								   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
								
								   ym(${process.env.NEXT_PUBLIC_YANDEX_METRIKA}, "init", {
										clickmap:true,
										trackLinks:true,
										accurateTrackBounce:true,
										webvisor:true
								   });
							  `,
                        }}
                    />
                    <noscript><div><img src={"https://mc.yandex.ru/watch/" + process.env.NEXT_PUBLIC_YANDEX_METRIKA} style={{position: 'absolute', left: '-9999px'}} alt="" /></div></noscript>
                    {/* /Yandex.Metrika counter */}
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument