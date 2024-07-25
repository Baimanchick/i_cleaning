import React, { useRef } from 'react';
import StyledComponentsRegistry from '@/lib/AntdRegistry';
import '@/styles/globals.scss'
import { StoreProvider } from '@/store/StoreProvider';
import Navbar from '@/components/Navbar/Navbar';
import SearchInput from '@/components/SearchInput/SearchInput';
import Footer from '@/components/Footer/Footer';

export const metadata = {
    title: 'I-Cleaning Service',
};

const RootLayout = ({ children }: React.PropsWithChildren) => {

    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>
                <StoreProvider>
                    <div className="container">
                        <Navbar isHomePage={false} />
                    </div>
                    <StyledComponentsRegistry>
                        <div className={'search_container'}>
                            <SearchInput />
                        </div>
                        {children}
                        <Footer />
                    </StyledComponentsRegistry>
                </StoreProvider>
            </body>
        </html>
    );
};

export default RootLayout;
