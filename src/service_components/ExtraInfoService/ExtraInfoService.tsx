import React, { useState } from 'react'
import styles from "./ExtraInfoService.module.scss"
import { ExtraInfoServiceProps } from './ExtraInfoService.props'
import { Video } from '@/helpers/interfaces/service.interface'
import { Flex } from 'antd'

function ExtraInfoService({ service }: ExtraInfoServiceProps) {
    const [expanded, setExpanded] = useState(true);
    const toggleExpansion = () => {
        setExpanded(!expanded);
    };
    return (
        service?.secondvideos_set?.map((info: Video, index: number) => (
            <div key={index}>
                <div key={index} className='container'>
                    <Flex className={styles.wrapper}>
                        <Flex className={styles.wrapper_left} key={index}>
                            <iframe
                                className={styles.iframe}
                                src={info.video_link}
                                data-cookieblock-src={info.video_link}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                key={`video-main-${info.id}`}
                                tabIndex={0}
                            ></iframe>
                        </Flex>
                        <Flex className={styles.wrapper_right}>
                            <Flex className={styles.imageContainer} gap={2}>
                                <img className={styles.image} src={info.image} alt={info.title} />
                                <img className={styles.image} src={info.image2} alt={info.title} />
                            </Flex>
                            <Flex gap={12} style={{ flexDirection: 'column' }}>
                                <h2 className={styles.title}>{info.title}</h2>
                                {expanded ? (
                                    <p className={styles.paragraph_open}>{info.text}</p>
                                ) : (
                                    <p className={styles.paragraph}>{info.text.slice(0, 350)}...</p>
                                )}
                                <button
                                    className='knowMoreButton'
                                    onClick={toggleExpansion}
                                    style={{ color: 'black', textAlign: 'left' }}
                                >
                                    {expanded ? '↑ ' : '↓ '}
                                </button>
                            </Flex>
                        </Flex>
                    </Flex>
                </div>
                <hr className={styles.hr} />
            </div>
        )
        )
    )
}

export default ExtraInfoService