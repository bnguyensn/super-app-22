import * as React from 'react';
import { Helmet } from 'react-helmet';
import { getRandomBkgColor } from '../libs/colors';
import ExtLink from './ext-link';

export default function Layout({ children }) {
  const [bkgColor, setBkgColor] = React.useState(getRandomBkgColor());

  const handleBkgClick = () => {
    setBkgColor(getRandomBkgColor());
  };

  return (
    <div>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
      >
        <title>String Versus</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Answering the universe's oldest question...JavaScript style"
        />
        <meta name="keywords" content="bnguyensn, string versus" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="shortcut icon" href="images/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="preload"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
          href="https://fonts.googleapis.com/css2?family=Bowlby+One+SC&display=swap"
        />
        <noscript>
          {`
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Bowlby+One+SC&display=swap"
            />
          `}
        </noscript>
      </Helmet>
      <main
        style={{
          minHeight: '100vh',
          padding: '0.5rem',
          backgroundColor: bkgColor,
        }}
        onClick={handleBkgClick}
      >
        {children}
      </main>
      <footer
        style={{
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(17,24,39,1)',
          color: '#ffffff',
        }}
      >
        <p
          style={{
            textAlign: 'center',
          }}
        >
          Made with 💖 by{' '}
          <ExtLink href="https://twitter.com/bnguyensn">@bnguyensn</ExtLink>{' '}
          using <ExtLink href="https://www.gatsbyjs.com">Gatsby</ExtLink>.{' '}
          <ExtLink href="https://github.com/bnguyensn/super-app-20">
            Source code
          </ExtLink>
          .
        </p>
      </footer>
    </div>
  );
}
