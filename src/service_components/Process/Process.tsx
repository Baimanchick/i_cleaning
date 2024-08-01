import React from 'react'
import styles from "./Process.module.scss"
import { ProcessProps } from './Process.props'
import { ProcessType } from '@/helpers/interfaces/service.interface'
import { Flex } from 'antd'

function Process({ service }: ProcessProps) {
    return (
        service?.map((item: ProcessType, index: number) => (
            <div key={index} className={`container ${styles.main}`}>
                <div className={styles.container}>
                    <div className={styles.main_title_container}>
                        <h2>{item.title}</h2>
                    </div>
                    <Flex className={styles.process} style={{ flexDirection: 'column' }}>
                        <div className={styles.image_container}>
                            <img src={item.image} alt={`item.title`} />
                        </div>
                        <Flex className={styles.title_main} style={{ width: '100%' }} justify={'space-between'}>
                            <Flex style={{ flexDirection: 'column' }}>
                                <h2 className={styles.title}>BEFORE</h2>
                                <p className={styles.text}>{item.text}</p>
                            </Flex>
                            <Flex style={{ flexDirection: 'column' }}>
                                <h2 className={styles.title}>AFTER</h2>
                                <p className={styles.text}>{item.text2}</p>
                            </Flex>
                        </Flex>
                    </Flex>
                </div>
            </div>
        ))
    )
}

export default Process