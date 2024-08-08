'use client'

import React, { useMemo, useState } from 'react'
import { Badge, DrawerProps, Flex } from 'antd'
import styles from "./Navbar.module.scss"
import logo from "@/assets/svgs/navbar/logo_i.svg";
import mobile_logo from "@/assets/svgs/navbar/mobile_icon.svg";
import burger from "@/assets/svgs/navbar/burger.svg";
import english from "@/assets/svgs/navbar/english.svg";
import BurgerMenu from '@/components/BurgerMenu/BurgerMenu'
import { MenuItem, NavbarProps } from './Navbar.props';
import SearchInput from '../SearchInput/SearchInput';
import { useRouter } from 'next/navigation';
import cart from "@/assets/svgs/cart/cart.svg"

function Navbar({ refs, isHomePage }: NavbarProps) {
    const navigate = useRouter();
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState<DrawerProps['placement']>('right');
    const menuItems: MenuItem[] = useMemo(() => {
        const items: MenuItem[] = [
            { label: "Main menu", ref: refs?.mainRef },
            { label: "Cleaning services", ref: refs?.serviceRef },
            { label: "B2B customers", ref: refs?.customerRef },
            { label: "Video series", ref: refs?.videoRef },
            { label: "Why choose Icleaning?", ref: refs?.faqRef },
            { label: "Partners", ref: refs?.trustRef },
            { label: "Contacts", ref: refs?.footerRef },
        ];
        return items;
    }, [refs]);

    const menuItemsService: any = useMemo(() => {
        const items: any = [
            { label: "Main menu", link: '/' },
        ];
        return items;
    }, [refs]);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <Flex className={styles.navbar} align={'center'} justify={'space-between'} style={{ marginTop: 30 }}>
            <Flex>
                <img onClick={() => navigate.push('/')} className={styles.logo_mobile} src={mobile_logo.src} alt="logo" />
                <img onClick={() => navigate.push('/')} className={styles.logo} src={logo.src} alt="logo" />
            </Flex>
            <Flex className={styles.navbar_tool} justify={'space-between'} style={{ width: 892 }} align={'flex-start'}>
                <Flex className={styles.search_container} style={{ flexDirection: 'column' }}>
                    <SearchInput />
                    <Flex style={{ marginTop: 13 }} justify={'flex-end'}>
                        <p className={styles.input_text}>Use the search button if you need </p>
                    </Flex>
                </Flex>
                <Flex style={{ cursor: 'pointer' }} gap={8} align={'center'}>
                    <h2 className={styles.lang}>EN</h2>
                    <img className={styles.en} src={english.src} />
                </Flex>
                <Flex>
                    <Badge
                        // count={cartItems.length} 
                        color={"#FABC22"}>
                        <img
                            src={cart.src}
                            onClick={() => {
                                navigate.push("/cart");
                            }}
                            className={styles.icon__item}
                            alt="Корзина"
                        />
                    </Badge>
                </Flex>
                <Flex>
                    <img onClick={showDrawer} className={styles.burger} src={burger.src} alt="burger" />
                </Flex>
            </Flex>
            <BurgerMenu isHomePage={isHomePage} menuItemsService={menuItemsService} menuItems={menuItems} open={open} placement={placement} onClose={onClose} />
        </Flex >
    )
}

export default Navbar;
