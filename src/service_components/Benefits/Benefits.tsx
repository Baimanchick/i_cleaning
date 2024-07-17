import React, { useEffect, useState } from 'react'
import styles from "./Benefits.module.scss"
import { BenefitsProps } from './Benefits.props'
import { Carousel, Flex } from 'antd'
import check from "@/assets/svgs/benefits/check.svg"
import { Benefit } from '@/helpers/interfaces/service.interface'

function Benefits({ service }: BenefitsProps) {
    return (
        <div className='container'>
            <div className={styles.main}>
                <div className={styles.title_container}>
                    {service?.map((item: Benefit, index: number) => (
                        <h2 key={index}>{item.title}</h2>
                    ))}
                </div>
                <Flex gap={16} className={styles.list} justify={'space-between'}>
                    {service?.map((item: Benefit, index: number) => (
                        <div key={index} className={styles.cardWrapper}>
                            <img src={check.src} className={styles.checkmark} />
                            <Flex justify={'center'} align={'center'} className={styles.card}>
                                <p>{item.text}</p>
                            </Flex>
                        </div>
                    ))}
                </Flex>
                <Carousel className={styles.carousel}>
                    {service?.map((item: Benefit, index: number) => (
                        <Flex key={index} className={styles.carouselFlex}>
                            <div className={styles.cardWrapper}>
                                <img src={check.src} className={styles.checkmark} />
                                <Flex justify={'center'} align={'center'} className={styles.card}>
                                    <p>{item.text}</p>
                                </Flex>
                            </div>
                        </Flex>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

export default Benefits
