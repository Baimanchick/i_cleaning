import React from 'react'
import styles from "./Subscription.module.scss"
import { SubscriptionProps } from './Subscription.props'
import { BigImage } from '@/helpers/interfaces/service.interface'
import { Flex } from 'antd'
import { Button } from '@/components/Button/Button'
import { API_URL } from '@/utils/const'

function Subscription({ service }: SubscriptionProps) {
    return (
        service?.map((item: BigImage, index: number) => (
            <div key={index} className={styles.main}>
                <div className={`container ${styles.title_container}`}>
                    <h2 className={styles.title}>SUBSCRIPTION</h2>
                </div>
                <div style={{ backgroundImage: `url(${API_URL}${item.image})` }} className={styles.subscription}>
                    <Flex className={`container ${styles.section_text}`} gap={20} style={{ flexDirection: 'column' }}>
                        <h2 className={styles.title_second}>{item.title}</h2>
                        <p className={styles.text}>{item.text}</p>
                        <div>
                            <Button className={styles.btn} appearance='blue'>Subscribe</Button>
                        </div>
                    </Flex>
                </div>
            </div>
        ))
    )
}

export default Subscription