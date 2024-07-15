
import React, { useEffect, useState } from 'react'
import styles from "./FaqCurtains.module.scss"
import line from "@/assets/svgs/faq/line.svg"
import { Flex } from 'antd'
import { faqTextCurtains } from '@/helpers/data/faqText'
import { FaqCurtainsProps } from './FaqCurtains.props'


function FaqCurtains({ service }: FaqCurtainsProps) {
    return (
        <div className={`container ${styles.main}`}>
            <Flex className={styles.containerTitle} justify={'center'}>
                <h2 className={styles.main_title}>Why do curtains need to be cleaned?</h2>
            </Flex>
            <Flex className={styles.wrapper} align={'center'} justify={'space-between'}>
                <Flex className={styles.wrapper_left} style={{ maxWidth: 717 }} gap={30} align={'center'}>
                    <img src={line.src} className={styles.line} alt="line" />
                    <Flex className={styles.text_container} style={{ flexDirection: 'column', height: '535px' }} justify={'space-between'}>
                        {faqTextCurtains.map((item: any, index: number) => (
                            <div key={index} className={styles.text}>
                                <h2 className={styles.title}>{item.title}</h2>
                                <p className={styles.text}>{item.text}</p>
                            </div>
                        ))}
                    </Flex>
                </Flex>
                <Flex className={styles.wrapper_right}>
                    <img className={styles.mainImage} src="https://i.imgur.com/LNAHKk8.jpeg" alt="team" />
                </Flex>
            </Flex>
        </div>
    )
}

export default FaqCurtains