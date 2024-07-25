'use client'

import { Drawer, Flex } from 'antd';
import styles from "./BurgerMenu.module.scss"
import { CloseOutlined } from '@ant-design/icons';
import { BurgerMenuProps } from './BurgerMenu.props';
import { MenuItem } from '../Navbar/Navbar.props';
import { useRouter } from 'next/navigation';

function BurgerMenu({ placement, onClose, open, menuItems, menuItemsService, isHomePage }: BurgerMenuProps) {
    const navigate = useRouter()
    const handleMenuItemClick = (ref: any) => {
        onClose();
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Drawer
                placement={placement}
                closable={false}
                onClose={onClose}
                open={open}
                key={placement}
                className={styles.customDrawer}
                width={415}
            >
                <Flex justify={'flex-end'}>
                    <CloseOutlined onClick={onClose} style={{ cursor: 'pointer', color: "#fff" }} />
                </Flex>
                <Flex style={{ flexDirection: 'column', marginTop: 60 }} gap={18} justify={'center'} >

                    {
                        !isHomePage ? (
                            menuItemsService?.map((item: any, index: number) => (
                                <li key={index} className={styles.navigation_item} onClick={() => navigate.push(item.link)}>
                                    {item.label}
                                </li>
                            ))
                        ) : (
                            menuItems.map((item: MenuItem, index: number) => (
                                <li key={index} className={styles.navigation_item} onClick={() => handleMenuItemClick(item.ref)}>
                                    {item.label}
                                </li>
                            ))
                        )
                    }
                </Flex>
            </Drawer >
        </>
    );
}

export default BurgerMenu;
