import React from 'react';
// eslint-disable-next-line no-shadow
import Document, { Head, Main, NextScript } from 'next/document';

export default class extends Document {
  render() {
    return (
      <html lang='ru'>
        <Head />
        <body>
          <Main />
          <div id='modal'></div>
          <NextScript />
        </body>
      </html>
    );
  }
}
