/* eslint unicorn/filename-case: 0 */
/* eslint import/no-default-export: 0 */
import { AuthAccessSilentlyProvider } from '@kurocado-studio/iam';
import type { LinksFunction } from '@remix-run/node';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { get } from 'lodash-es';
import React from 'react';

// @see https://remix.run/docs/en/main/styling/tailwind
import styles from './tailwind.css?url';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles },
  {
    rel: 'icon',
    type: 'image/x-icon',
    href: '/favicon.ico',
  },
];

export function Layout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  const domain = get(process, ['env', 'VITE_AUTH_DOMAIN'], '');
  const clientId = get(process, ['env', 'VITE_AUTH_CLIENT_ID'], '');
  const redirectUri = get(
    process,
    ['env', 'VITE_AUTH_REDIRECT_URI'],
    'http://localhost:3000',
  );

  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
        <title>Kurocado Studio Remix starter boilerplate</title>
      </head>
      <body
        className='selection:bg-lime-200 selection:text-[#f52891cc] opacity-100 transition-opacity duration-300'
        data-testid='root-body-test-id'
        suppressHydrationWarning
      >
        <AuthAccessSilentlyProvider
          domain={domain}
          clientId={clientId}
          authorizationParams={{ redirectUri }}
        >
          {({ isLoading, isAuthenticated }) => {
            return isAuthenticated && !isLoading ? (
              children
            ) : (
              <div data-testid='loader' />
            );
          }}
        </AuthAccessSilentlyProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App(): React.ReactNode {
  return <Outlet />;
}
