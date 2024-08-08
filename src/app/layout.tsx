import React from 'react';
import StyledComponentsRegistry from '@/lib/AntdRegistry';
import '@/styles/globals.scss'
import { StoreProvider } from '@/store/StoreProvider';
import Head from 'next/head';

export const metadata = {
  title: 'I-Cleaning',
  description: 'Stay with us',
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="en">
    <Head>
      <link rel="icon" href="/public/favicon.ico" sizes='any' />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />
      <meta name='mobile-web-app-capable' content='yes' />
    </Head>
    <body>
      <StoreProvider>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </StoreProvider>
    </body>
  </html>
);

export default RootLayout;
