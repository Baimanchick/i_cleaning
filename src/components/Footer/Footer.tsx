import React from 'react'
import styles from './Footer.module.scss'
import instagram from "@/assets/svgs/footer/instagram.svg"
import telegram from "@/assets/svgs/footer/telegram.svg"
import whatsapp from "@/assets/svgs/footer/whatsapp.svg"
import geo from "@/assets/svgs/footer/geo.svg"
import { Flex } from 'antd'
import { MailFilled, PhoneFilled } from '@ant-design/icons'



function Footer() {
    return (
        <div className={styles.footer}>
            <div className='container'>
                <Flex className={styles.container} justify={'space-between'} style={{ width: '100%', paddingTop: 40, paddingBottom: 40 }}>
                    <Flex gap={23} style={{ flexDirection: 'column' }}>
                        <Flex ><h2 className={styles.title}>Contact info</h2></Flex>
                        <Flex style={{ flexDirection: 'column', rowGap: 10 }}>
                            <Flex align={'center'} style={{ cursor: 'pointer' }} gap={4}>
                                <PhoneFilled style={{ color: 'rgba(164, 164, 164, 1)' }} size={20} />
                                <p className={styles.text}>+971508648401</p>
                            </Flex>
                            <Flex align={'center'} style={{ cursor: 'pointer' }} gap={4}>
                                <MailFilled style={{ color: 'rgba(164, 164, 164, 1)' }} size={20} />
                                <p className={styles.text}>customer@cleaning.ae</p>
                            </Flex>
                            <Flex align={'center'} style={{ cursor: 'pointer' }} gap={4}>
                                <MailFilled style={{ color: 'rgba(164, 164, 164, 1)' }} size={20} />
                                <p className={styles.text}>accounting@icleaning.ae</p>
                            </Flex>
                            <Flex align={'center'} style={{ cursor: 'pointer' }} gap={4}>
                                <img src={geo.src} className={styles.geo} alt="geo" />
                                <p className={styles.text}>Store #10, Jebel Ali Industrial Area - Dubai - UAE</p>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex gap={23} style={{ flexDirection: 'column' }}>
                        <Flex ><h2 className={styles.title}>Social media</h2></Flex>
                        <Flex className={styles.utils} style={{ flexDirection: 'column', }} gap={10}>
                            <Flex align={'center'} style={{ cursor: 'pointer' }} gap={8}>
                                <img className={styles.utilsIcon} src={telegram.src} alt="icon" />
                                <p className={styles.text}>Telegram</p>
                            </Flex>
                            <Flex align={'center'} style={{ cursor: 'pointer' }} gap={8}>
                                <img className={styles.utilsIcon} src={whatsapp.src} alt="icon" />
                                <p className={styles.text}>Whatsapp</p>
                            </Flex>
                            <Flex align={'center'} style={{ cursor: 'pointer' }} gap={8}>
                                <img className={styles.utilsIcon} src={instagram.src} alt="icon" />
                                <p className={styles.text}>Instagram</p>
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