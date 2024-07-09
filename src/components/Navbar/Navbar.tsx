'use client'

import React, { useMemo, useState } from 'react'
import { DrawerProps, Flex } from 'antd'
import styles from "./Navbar.module.scss"
import logo from "@/assets/svgs/navbar/logo_i.svg";
import mobile_logo from "@/assets/svgs/navbar/mobile_icon.svg";

import burger from "@/assets/svgs/navbar/burger.svg";
import english from "@/assets/svgs/navbar/english.svg";
import BurgerMenu from '@/components/BurgerMenu/BurgerMenu'
import { MenuItem } from './Navbar.props';
import SearchInput from '../SearchInput/SearchInput';


function Navbar() {
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState<DrawerProps['placement']>('right');
    const menuItems: MenuItem[] = useMemo(() => {
        const items: MenuItem[] = [
            { label: "Main menu", link: "/" },
            { label: "Cleaning services", link: "/service" },
            { label: "B2B customers", link: "/customers" },
            { label: "Video series", link: "/video" },
            { label: "Why choose Icleaning?", link: "/faq" },
            { label: "Partners", link: "/partners" },
            { label: "Contacts", link: "/contacts" },
            { label: "Privacy policy", link: "/privacy" },


        ];
        return items;
    }, []);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <Flex className={styles.navbar} justify={'space-between'} style={{ marginTop: 30 }}>
            <Flex>
                <img className={styles.logo_mobile} src={mobile_logo.src} alt="logo" />
                <img className={styles.logo} src={logo.src} alt="logo" />
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
                    <img onClick={showDrawer} className={styles.burger} src={burger.src} alt="burger" />
                </Flex>
            </Flex>
            <BurgerMenu menuItems={menuItems} open={open} placement={placement} onClose={onClose} />
        </Flex >
    )
}

export default Navbar