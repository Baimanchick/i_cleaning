import React from 'react'
import styles from "./PriceSectionCard.module.scss"
import { PriceSectionCardProps } from './PriceSectionCard.props'
import { Flex } from 'antd'
import { Button } from '@/components/Button/Button'

function PriceSectionCard({ card }: PriceSectionCardProps) {
    return (
        card.is_simple ? (
            <div className={styles.card}>
                <Flex className={styles.card_item_simple} style={{ flexDirection: 'column', }}>
                    <h2 className={styles.title_simple}>{card.title}</h2>
                    <p className={styles.text_simple}>{card.desciprtion}</p>
                    <h2 className={styles.price_simple}>{card.price}</h2>
                    <div className={styles.btn_main_simple}>
                        <Button className={styles.btn_simple} appearance='blue'>
                            Add +
                        </Button>
                    </div>
                    <img className={styles.img_simple} src={card.image} alt={card.title} />
                </Flex>
            </div>
        ) : card.is_discount ? (
            <div className={styles.card}>
                <Flex className={styles.card_item_simple} style={{ flexDirection: 'column', }}>
                    <h2 className={styles.title_simple}>{card.title}</h2>
                    <p className={styles.text_simple}>{card.desciprtion}</p>
                    <h2 className={styles.price_simple}>{card.price}</h2>
                    <div className={styles.btn_main_simple}>
                        <Button className={styles.btn_simple} appearance='blue'>
                            Add +
                        </Button>
                    </div>
                    <img className={styles.img_simple} src={card.image} alt={card.title} />
                </Flex>
            </div>
        ) : card.is_house ? (
            <div className={styles.card}>
                <Flex className={styles.card_item_simple} style={{ flexDirection: 'column', }}>
                    <h2 className={styles.title_simple}>{card.title}</h2>
                    <p className={styles.text_simple}>{card.desciprtion}</p>
                    <h2 className={styles.price_simple}>{card.price}</h2>
                    <div className={styles.btn_main_simple}>
                        <Button className={styles.btn_simple} appearance='blue'>
                            Add +
                        </Button>
                    </div>
                    <img className={styles.img_simple} src={card.image} alt={card.title} />
                </Flex>
            </div>
        ) : null
    )
}

export default PriceSectionCard