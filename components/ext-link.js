import * as React from 'react';

export default function ExtLink({ href, children }) {
  return (
    <a className="link" href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}
