'use client'

import React from 'react'
import styles from './ServiceCard.module.scss'
import { Flex } from 'antd'
import { Button } from '../Button/Button'
import { ServiceCardProps } from './ServiceCardProps.props'
import { useRouter } from 'next/navigation'


function ServiceCard({ service }: ServiceCardProps) {
    const navigate = useRouter();

    return (
        <Flex className={`${styles.service_card} ${service.image2 === null ? styles.singleImageContainer : ''}`} gap={16}>
            <Flex gap={2} className={styles.image_main}>
                <div
                    style={{
                        backgroundImage: `url(${service.image})`
                    }}
                    className={`${styles.image_item} ${service.image2 === null ? styles.singleImage : ''}`}>
                    <h2 className={styles.image_item_title}>{service.title_for_image}</h2>
                </div>
                <div
                    style={{
                        backgroundImage: `url(${service.image2})`,
                        display: `${service.image2 === null ? 'none' : 'flex'}`
                    }}
                    className={`${styles.image_item} ${styles.radius}`}
                >
                    <h2 className={styles.image_item_title}>{service.title_for_image2}</h2>
                </div>
            </Flex>
            <Flex gap={30} className={styles.text_button} >
                <p className={styles.paragraph}>
                    {service.text}
                </p>
                <Button onClick={() => navigate.push(`/service/${service.id}`)} className={styles.btn} appearance='blue'>{'←'} Know more</Button>
            </Flex>
        </Flex>
    )
}

export default ServiceCard