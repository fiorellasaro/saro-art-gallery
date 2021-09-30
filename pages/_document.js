import React from 'react';
import Document , {Html, Head, Main, NextScript} from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';

export default class MyDocument extends Document {

    render(){
        return(
        <Html lang='es'>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap"
                />
            </Head>

            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
        )

    }
}

MyDocument.getInitialProps = async (ctx) => {
    const Sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
    originalRenderPage({
        enhanceApp: (App) => (props) => Sheets.collect(<App {...props} />)
    });

    const initialProps = await Document.getInitialProps(ctx);
    return {
        ...initialProps,
        //Styles fragment is rendered after the app and page rendering finish
        styles: [
            ...React.Children.toArray(initialProps.styles),
            Sheets.getStyleElement(),
        ],
    };
};