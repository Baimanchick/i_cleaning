import React, { useRef } from 'react';
import StyledComponentsRegistry from '@/lib/AntdRegistry';
import '@/styles/globals.scss';
import { StoreProvider } from '@/store/StoreProvider';
import Navbar from '@/components/Navbar/Navbar';
import SearchInput from '@/components/SearchInput/SearchInput';
import Footer from '@/components/Footer/Footer';
import Head from 'next/head';
import Widjet from '@/components/Widjet/Widjet';

export const metadata = {
    title: 'I-Cleaning Service',
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html lang="en">
            <Head>
                <link rel="icon" href="/public/favicon.ico" sizes='any' />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />
                <meta name='mobile-web-app-capable' content='yes' />
            </Head>
            <body suppressHydrationWarning={true}>
                <StoreProvider>
                    <StyledComponentsRegistry>
                        <div className="container">
                            <Navbar isHomePage={false} />
                        </div>
                        <div className={'search_container'}>
                            <SearchInput />
                        </div>
                        {children}
                        <Footer />
                        <Widjet />

                    </StyledComponentsRegistry>
                </StoreProvider>
            </body>
        </html>
    );
};

export default RootLayout;
