import React from 'react';
import StyledComponentsRegistry from '@/lib/AntdRegistry';
import '@/styles/globals.scss'
import { StoreProvider } from '@/store/StoreProvider';
import Navbar from '@/components/Navbar/Navbar';
import SearchInput from '@/components/SearchInput/SearchInput';
import { Footer } from 'antd/es/layout/layout';

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
                    <div className={'search_container'}>
                        <SearchInput />
                    </div>
                    {children}
                    {/* <Footer /> */}
                </StyledComponentsRegistry>
            </StoreProvider>
        </body>
    </html>
);

export default RootLayout;
