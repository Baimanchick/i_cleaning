import React from 'react';
import StyledComponentsRegistry from '@/lib/AntdRegistry';
import '@/styles/globals.scss'
import { StoreProvider } from '@/store/StoreProvider';
import Navbar from '@/components/Navbar/Navbar';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import Footer from '@/components/Footer/Footer';

export const metadata = {
    title: 'I-Cleaning Service',

};

const RootLayout = ({ children }: React.PropsWithChildren) => (

    <html lang="en">
        <body suppressHydrationWarning={true} >
            <StoreProvider>
                <StyledComponentsRegistry>
                    <div className='container'>
                        <Navbar />
                    </div>
                    {children}
                    {/* <Footer /> */}
                </StyledComponentsRegistry>
            </StoreProvider>
        </body>
    </html>
);

export default RootLayout;
