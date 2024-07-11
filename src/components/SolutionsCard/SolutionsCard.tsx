'use client'

import React, { useState } from 'react'
import styles from "./SolutionsCard.module.scss"
import { Flex } from 'antd'

import { SolutionsCardProps } from './SolutionsCard.props'


function SolutionsCard({ icon, title, text }: SolutionsCardProps) {
    const [showFullText, setShowFullText] = useState(false);

    const paragraphText = text;

    const words = paragraphText.split(' ');
    const initialText = words.slice(0, 21).join(' ');
    const remainingText = words.slice(21).join(' ');

    return (
        <div className={styles.mainCard}>
            <div className={styles.containerCard}>
                <Flex gap={22} style={{ flexDirection: 'column', marginTop: 25 }} align={'center'}>
                    <div>
                        <img className={styles.logo} src={icon.src} alt="logo" />
                    </div>
                    <div>
                        <h2 className={styles.title}>{title}</h2>
                    </div>
                    <div>
                        <p className={styles.paragraph}>
                            {initialText}
                            {!showFullText && '...'}
                            {showFullText && ` ${remainingText}`}
                        </p>
                        <button
                            className='knowMoreButton'
                            onClick={() => setShowFullText(!showFullText)}
                        >
                            {showFullText ? '↑ Show less ' : '↓ Know More'}
                        </button>
                    </div>
                </Flex>
            </div>
        </div>
    );
}


export default SolutionsCard