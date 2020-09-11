import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import client from '../client'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return client.fetch('*[_id == "global-config"] {lang}.lang[0]').then(lang => {
      return { ...initialProps, lang }
    })
  }
  render() {
    return (
      <Html lang={this.props.lang || 'en'}>
        <Head>
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
          <link rel="manifest" href="/static/site.webmanifest" />
        </Head>
        <body>
          <section role="search" data-ss360="true">
	          <input type="search" id="searchBox" />
	          <button id="searchButton" />
          </section>
          <Main />
          <NextScript />
          <script type="text/javascript" src="./_search_360.js"></script>
          <script src="https://cdn.sitesearch360.com/v13/sitesearch360-v13.min.js" async></script>
        </body>
      </Html>
    )
  }
}
