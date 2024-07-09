import React from 'react'
import styles from "./FAQSection.module.scss"
import line from "@/assets/svgs/faq/line.svg"
import { Flex } from 'antd'
import { faqText } from '@/helpers/data/faqText'


function FAQSection() {
    return (
        <div>
            <Flex className={styles.containerTitle} justify={'center'}>
                <h2 className={styles.main_title}>WHY CHOOSE ICLEANING?</h2>
            </Flex>
            <Flex className={styles.wrapper} align={'center'} justify={'space-between'}>
                <Flex className={styles.wrapper_left} style={{ maxWidth: 717 }} gap={30} align={'center'}>
                    <img src={line.src} className={styles.line} alt="line" />
                    <Flex className={styles.text_container} style={{ flexDirection: 'column', height: '535px' }} justify={'space-between'}>
                        {faqText.map((item: any, index: number) => (
                            <div key={index} className={styles.text}>
                                <h2 className={styles.title}>{item.title}</h2>
                                <p className={styles.text}>{item.text}</p>
                            </div>
                        ))}
                    </Flex>
                </Flex>
                <Flex className={styles.wrapper_right}>
                    <img className={styles.mainImage} src="https://i.imgur.com/zutk9Ps.png" alt="team" />
                </Flex>
            </Flex>
        </div>
    )
}

export default FAQSection