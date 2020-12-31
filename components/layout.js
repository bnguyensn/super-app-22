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
      <Helmet>
        <title>String Versus</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Answering the universe's oldest question...JavaScript style"
        />
        <meta name="keywords" content="bnguyensn, string versus" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bowlby+One+SC&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <main
        className="min-h-screen p-2"
        style={{
          backgroundColor: bkgColor,
        }}
        onClick={handleBkgClick}
      >
        {children}
      </main>
      <footer className="p-4 flex flex-col justify-center items-center bg-gray-900 text-white">
        <p className="text-center">
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
