'use client'

import React, { useState } from 'react'
import styles from "./OurTypesServiceCard.module.scss"
import { OurTypesServiceCardProps } from './OurTypesServiceCard.props'
import { Flex } from 'antd'

function OurTypesServiceCard({ service, isFour }: OurTypesServiceCardProps) {
    const [expanded, setExpanded] = useState(false);
    const toggleExpansion = () => {
        setExpanded(!expanded);
    };

    return (
        <Flex className={isFour ? styles.mainFour : styles.main} gap={17}>
            <div>
                <img className={styles.image} src={service?.image} alt="" />
            </div>
            <Flex className={styles.text} style={{ flexDirection: 'column', maxWidth: 802, rowGap: 17 }}>
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