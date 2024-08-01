import React from 'react'
import styles from "./WhatWeRemove.module.scss"
import { WhatWeRemoveProps } from './WhatWeRemove.props'
import { Carousel, Flex } from 'antd'
import { CarouselType, CarouselItem } from '@/helpers/interfaces/service.interface'
import { API_URL } from '@/utils/const'
import Image from 'next/image'

function WhatWeRemove({ service }: WhatWeRemoveProps) {
    return (
        service?.map((item: CarouselType, index: number) => (
            <div key={index} className={styles.main}>
                <div className={styles.container}>
                    <div className='container'>
                        <Flex style={{ flexDirection: 'column' }} gap={40} justify={'center'}>
                            <h2 className={styles.title}>{item.title}</h2>
                            <p className={styles.text}>{item.text}</p>
                        </Flex>
                        <Flex className={styles.list} justify={'space-between'}>
                            {item.items?.map((card: CarouselItem, index: number) => (
                                <Flex className={styles.card} key={index} style={{ flexDirection: 'column', }} align={'center'}>
                                    <Image width={100} height={100} className={styles.image} src={`${API_URL}${card.image}`} alt={`card.title`} />
                                    <h2 className={styles.card_title}>{card.title}</h2>
                                    <p className={styles.card_text}>{card.text}</p>
                                </Flex>
                            ))}
                        </Flex>
                        <Carousel className={styles.carousel}>
                            {item.items?.map((card: CarouselItem, index: number) => (
                                <Flex className={styles.card} key={index} style={{ flexDirection: 'column', }} align={'center'}>
                                    <Image width={100} height={100} className={styles.image} src={`${API_URL}${card.image}`} alt={`card.title`} />
                                    <h2 className={styles.card_title}>{card.title}</h2>
                                    <p className={styles.card_text}>{card.text}</p>
                                </Flex>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div >
        ))
    )
}

export default WhatWeRemove