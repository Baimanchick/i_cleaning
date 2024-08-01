'use client'

import React, { useEffect, useState } from 'react'
import styles from "./OurTypesServiceCard.module.scss"
import { OurTypesServiceCardProps } from './OurTypesServiceCard.props'
import { Flex } from 'antd'
import Image from 'next/image'

function OurTypesServiceCard({ service, isFour }: OurTypesServiceCardProps) {
    const [expanded, setExpanded] = useState(false);
    const toggleExpansion = () => {
        setExpanded(!expanded);
    };



    return (
        <Flex className={isFour ? styles.mainFour : styles.main} gap={17}>
            <Image width={100} height={100} src={service?.image || '/path/to/default/image.jpg'} alt={service?.title || 'Default Alt Text'} className={styles.image} />
            <Flex className={`${styles.text} ${service?.text.length > 20 && isFour ? styles.big_text : ''}`} style={{ flexDirection: 'column', maxWidth: 802, rowGap: 17 }}>
                <h2 className={isFour ? styles.isFourTitle : styles.title}>{service?.title}</h2>
                <p className={`${isFour ? styles.isFourText : styles.text} ${styles.desktopText}`}>{service?.text}</p>
                <div className={styles.shortText}>
                    {expanded ? (
                        <p className={isFour ? styles.isFourText : styles.text}>{service?.text}</p>
                    ) : (
                        <p className={isFour ? styles.isFourText : styles.text}>{service?.text.slice(0, 200)}...</p>
                    )}
                </div>
            </Flex>
            <button
                className={`knowMoreButton ${styles.arrow}`}
                onClick={toggleExpansion}
                style={{ color: 'black', textAlign: 'left' }}
            >
                {expanded ? '↑ ' : '↓ '}
            </button>
        </Flex>
    )
}

export default OurTypesServiceCard