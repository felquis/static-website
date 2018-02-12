import React, { Component } from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

class CustomDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render() {
    return (
      <html>
        <Head>
          {/* insert global metadata here */}
          {process.env.NODE_ENV === 'production' && (
            <link rel="stylesheet" href={`/_next/static/style.css`} />
          )}
        </Head>
        <body>
          <Main />

          <NextScript />
        </body>
      </html>
    )
  }
}

export default CustomDocument
