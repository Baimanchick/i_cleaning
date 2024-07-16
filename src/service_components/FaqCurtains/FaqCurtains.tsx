
import React, { useEffect, useState } from 'react'
import styles from "./FaqCurtains.module.scss"
import { Flex } from 'antd'
import { FaqCurtainsProps } from './FaqCurtains.props'
import { Need, NeedItems } from '@/helpers/interfaces/service.interface'


function FaqCurtains({ service }: FaqCurtainsProps) {

    return (
        service?.map((item: Need, index: number) => (
            <div key={index} className={`container ${styles.main}`}>
                <Flex className={styles.containerTitle} justify={'center'}>
                    <h2 className={styles.main_title}>{item.title}</h2>
                </Flex>
                <Flex className={styles.wrapper} align={'center'} justify={'space-between'}>
                    <Flex className={styles.wrapper_left} style={{ maxWidth: 717 }} gap={30} align={'center'}>
                        <img src={item.svg} className={styles.line} alt="line" />
                        <Flex className={styles.text_container} style={{ flexDirection: 'column', height: '535px' }} justify={'space-between'}>
                            {item.items?.map((item: NeedItems, index: number) => (
                                <div key={index} className={styles.text}>
                                    <h2 className={styles.title}>{item.title}</h2>
                                    <p className={styles.text}>{item.text}</p>
                                </div>
                            ))}
                        </Flex>
                    </Flex>
                    <Flex className={styles.wrapper_right}>
                        <img className={styles.mainImage} src={item.image} alt="team" />
                    </Flex>
                </Flex>
            </div>
        ))
    )
}

export default FaqCurtains