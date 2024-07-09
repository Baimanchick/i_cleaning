import React from 'react'
import styles from "./TrustSection.module.scss"
import { Flex } from 'antd'
import arabText from "@/assets/svgs/trust/ArabText.svg"
import nero from "@/assets/svgs/trust/CaffeNerro.svg"
import fonquest from "@/assets/svgs/trust/Fonquets.svg"
import pullman from "@/assets/svgs/trust/Pullman.svg"
import emmar from "@/assets/svgs/trust/Emaar.svg"
import guesta from "@/assets/svgs/trust/Guesta.svg"
import addres from "@/assets/svgs/trust/All-Address-Logo.svg"
import scalini from "@/assets/svgs/trust/Scalini.svg"
import burj from "@/assets/svgs/trust/BurjAlArab.svg"
import emirates from "@/assets/svgs/trust/Emirates.svg"


function TrustSection() {
    return (
        <div>
            <Flex justify={'center'}><h2 className={styles.title}>THOSE WHO TRUST US</h2></Flex>
            <Flex className={styles.container} style={{ flexDirection: 'column', alignItems: 'center', rowGap: '130px', marginTop: '100px' }}>
                <Flex className={styles.logo_container} gap={200}>
                    <img className={styles.icon} src={arabText.src} alt="logo" />
                    <img className={styles.icon} src={nero.src} alt="logo" />
                    <img className={styles.icon} src={fonquest.src} alt="logo" />
                    <img className={styles.icon} src={pullman.src} alt="logo" />
                </Flex>
                <Flex className={styles.logo_container} gap={200}>
                    <img className={styles.icon} src={emmar.src} alt="logo" />
                    <img className={styles.icon} src={guesta.src} alt="logo" />
                    <img className={styles.icon} src={addres.src} alt="logo" />
                    <img className={styles.icon} src={scalini.src} alt="logo" />
                </Flex>
                <Flex className={`${styles.logo_container} ${styles.logo_container_last}`} gap={200}>
                    <img className={styles.icon} src={burj.src} alt="logo" />
                    <img className={styles.icon} src={emirates.src} alt="logo" />
                </Flex>
            </Flex>
        </div>
    )
}

export default TrustSection