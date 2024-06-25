import React from 'react'
import styles from './CardAge.module.scss'
import { CardAgeProps } from './CardAge.props'

function CardAge({ age, text }: CardAgeProps) {
    return (
        <div className={styles.cardCustom}>
            <div className={styles.age}>{age}+</div>
            <div className={styles.text}>{text}</div>
        </div>
    )
}

export default CardAge