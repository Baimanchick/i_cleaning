import React from 'react'
import styles from './ServiceCard.module.scss'
import { Flex } from 'antd'
import { Button } from '../Button/Button'
import carpet from '../../assets/service_section/carpet.jpg'
import carpeting from '../../assets/service_section/carpeting.png'


function ServiceCard({ service }: any) {
    return (
        <Flex className={styles.service_card} gap={16}>
            <Flex gap={2} className={styles.image_main}>
                <div style={{ backgroundImage: `url(${carpet.src})` }} className={styles.image_item}>
                    <h2 className={styles.image_item_title}>{service.title_1}</h2>
                </div>
                <div style={{ backgroundImage: `url(${carpeting.src})` }} className={`${styles.image_item} ${styles.radius}`}>
                    <h2 className={styles.image_item_title}>{service.title_2}</h2>
                </div>
            </Flex>
            <Flex gap={30} className={styles.text_button} >
                <p className={styles.paragraph}>
                    {service.text}
                </p>
                <Button className={styles.btn} appearance='blue'>{'←'} Know more</Button>
            </Flex>
        </Flex>
    )
}

export default ServiceCard