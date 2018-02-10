import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()

    return { html, head, errorHtml, chunks }
  }

  render() {

    return (
      <html>
        <Head>
          
            <link rel="stylesheet" href={`${this.props.__NEXT_DATA__.assetPrefix}/static/style.css`} />
          
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </html>
    )
  }
}
