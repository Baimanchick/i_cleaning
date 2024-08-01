import React, { useState } from 'react'
import styles from "./ExtraInfoService.module.scss"
import { ExtraInfoServiceProps } from './ExtraInfoService.props'
import { Video } from '@/helpers/interfaces/service.interface'
import { Flex } from 'antd'
import Image from 'next/image'

function ExtraInfoService({ service, style }: ExtraInfoServiceProps) {
    const [expanded, setExpanded] = useState(false);
    const toggleExpansion = () => {
        setExpanded(!expanded);
    };
    return (
        service?.map((info: Video, index: number) => (
            <div style={style} key={index}>
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
                                <Image
                                    width={100}
                                    height={100}
                                    className={styles.image}
                                    src={info.image || '/path/to/default/image.jpg'}
                                    alt={info.title || 'Default Alt Text'}
                                />
                                <Image
                                    width={100}
                                    height={100}
                                    className={styles.image}
                                    src={info.image2 || '/path/to/default/image.jpg'}
                                    alt={info.title || 'Default Alt Text'}
                                />
                            </Flex>
                            <Flex gap={12} style={{ flexDirection: 'column' }}>
                                <h2 className={styles.title}>{info.title}</h2>
                                <p className={styles.paragraph_open_mobile}>{info.text}</p>
                                {expanded ? (
                                    <p className={styles.paragraph_open}>{info.text}</p>
                                ) : (
                                    <p className={styles.paragraph}>{info.text.slice(0, 350)}...</p>
                                )}
                                <button
                                    className={`knowMoreButton ${styles.btn_down}`}
                                    onClick={toggleExpansion}
                                    style={{ color: 'black', textAlign: 'left', }}
                                >
                                    {expanded ? '↑ ' : '↓ '}
                                </button>
                            </Flex>
                        </Flex>
                    </Flex>
                </div>
                <hr className={styles.hr} />
            </div>
        ))
    )
}

export default ExtraInfoService;
