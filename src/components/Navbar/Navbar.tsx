import React from 'react'
import { Flex } from 'antd'
import styles from "./Navbar.module.scss"
import logo from "@/assets/svgs/navbar/logo_i.svg";
import burger from "@/assets/svgs/navbar/burger.svg";
import english from "@/assets/svgs/navbar/english.svg";


function Navbar() {
    return (
        <Flex justify={'space-between'} style={{ marginTop: 30 }}>
            <Flex>
                <img className={styles.logo} src={logo.src} alt="logo" />
            </Flex>
            <Flex justify={'space-between'} style={{ width: 892 }} align={'flex-start'}>
                <Flex style={{ flexDirection: 'column' }}>
                    <input className={styles.input} type="text" name="search" placeholder="Search" />
                    <Flex style={{ marginTop: 13 }} justify={'flex-end'}>
                        <p className={styles.input_text}>Use the search button if you need </p>
                    </Flex>
                </Flex>
                <Flex>
                    <img className={styles.burger} src={burger.src} alt="burger" />
                </Flex>
                <Flex style={{ cursor: 'pointer' }} gap={8} align={'center'}>
                    <h2 className={styles.lang}>EN</h2>
                    <img className={styles.en} src={english.src} />
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Navbar