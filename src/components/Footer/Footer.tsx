'use client'

import React from 'react'
import styles from './Footer.module.scss'
import instagram from "@/assets/svgs/footer/instagram.svg"
import telegram from "@/assets/svgs/footer/telegram.svg"
import whatsapp from "@/assets/svgs/footer/whatsapp.svg"
import geo from "@/assets/svgs/footer/geo.svg"
import { Flex } from 'antd'
import { MailFilled, PhoneFilled } from '@ant-design/icons'

function Footer() {
    const handleRedirect = (url: string) => {
        window.open(url, '_blank');
    };
    return (
        <div className={styles.footer}>
            <div className='container'>
                <Flex className={styles.container} justify={'space-between'} style={{ width: '100%', paddingTop: 40, paddingBottom: 40 }}>
                    <Flex gap={23} style={{ flexDirection: 'column' }}>
                        <Flex ><h2 className={styles.title}>Contact info</h2></Flex>
                        <Flex style={{ flexDirection: 'column', rowGap: 10 }}>
                            <Flex align={'center'} style={{ cursor: 'pointer' }} gap={4}>
                                <PhoneFilled style={{ color: 'rgba(164, 164, 164, 1)' }} size={20} />
                                <p className={styles.text}>
                                    <a href="tel:+971508648401">+971508648401</a>
                                </p>
                            </Flex>
                            <Flex align={'center'} style={{ cursor: 'pointer' }} gap={4}>
                                <MailFilled style={{ color: 'rgba(164, 164, 164, 1)' }} size={20} />
                                <p className={styles.text}>
                                    <a href="mailto:accounting@icleaning.ae">customer@cleaning.ae</a>
                                </p>
                            </Flex>
                            <Flex align={'center'} style={{ cursor: 'pointer' }} gap={4}>
                                <MailFilled style={{ color: 'rgba(164, 164, 164, 1)' }} size={20} />
                                <p className={styles.text}>
                                    <a href="mailto:accounting@icleaning.ae">accounting@icleaning.ae</a>
                                </p>
                            </Flex>
                            <Flex align={'center'} style={{ cursor: 'pointer' }} gap={4}>
                                <img src={geo.src} className={styles.geo} alt="geo" />
                                <p className={styles.text}>
                                    <a
                                        href="https://www.google.com/maps/search/Store+%2310,+Jebel+Ali+Industrial+Area+-+Dubai+-+UAE/@24.9959178,55.0422448,12.87z?entry=ttu"
                                        target='_blank'
                                    >
                                        Store #10, Jebel Ali Industrial Area - Dubai - UAE
                                    </a>
                                </p>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex gap={23} style={{ flexDirection: 'column' }}>
                        <Flex ><h2 className={styles.title}>Social media</h2></Flex>
                        <Flex className={styles.utils} style={{ flexDirection: 'column', }} gap={10}>
                            <Flex onClick={() => handleRedirect('https://t.me/icleaning_dubai')} align={'center'} style={{ cursor: 'pointer' }} gap={8} >
                                <img className={styles.utilsIcon} src={telegram.src} alt="icon" />
                                <p className={styles.text}>
                                    Telegram
                                </p>
                            </Flex>
                            <Flex onClick={() => handleRedirect('https://api.whatsapp.com/send/?phone=971508648401&text&type=phone_number&app_absent=0')} align={'center'} style={{ cursor: 'pointer' }} gap={8}>
                                <img className={styles.utilsIcon} src={whatsapp.src} alt="icon" />
                                <p className={styles.text}>
                                    Whatsapp
                                </p>
                            </Flex>
                            <Flex onClick={() => handleRedirect('https://www.instagram.com/icleaning_dubai/')} align={'center'} style={{ cursor: 'pointer' }} gap={8}>
                                <img className={styles.utilsIcon} src={instagram.src} alt="icon" />
                                <p className={styles.text}>
                                    Instagram
                                </p>
                            </Flex>
                        </Flex>
                    </Flex>
                    <div></div>
                </Flex>
            </div>
        </div>
    )
}

export default Footer