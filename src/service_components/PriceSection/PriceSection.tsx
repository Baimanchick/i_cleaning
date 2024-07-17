import React from 'react'
import styles from "./PriceSection.module.scss"
import { PriceSectionProps } from './PriceSection.props'
import { CardItem, CardSet } from '@/helpers/interfaces/service.interface'
import { Carousel, Flex } from 'antd'
import PriceSectionCard from '../PriceSectionCard/PriceSectionCard'

function PriceSection({ service }: PriceSectionProps) {
    return (
        <div className={`container ${styles.main}`}>
            {service?.map((item: CardSet, index: number) => (
                <div key={index} className={styles.price_main}>
                    <div className={styles.section_title_container}>
                        <h2 className={styles.section_title}>{item.title}</h2>
                    </div>
                    <Flex className={item.items.length < 3 ? styles.card_container : styles.card_container_three}>
                        {item.items.map((card: CardItem, index: number) => (
                            <PriceSectionCard key={index} card={card} />
                        ))}
                    </Flex>
                    <Carousel className={styles.carousel}>
                        {item.items.map((card: CardItem, index: number) => (
                            <div key={index} className={styles.card_carousel}>
                                <PriceSectionCard card={card} />
                            </div>
                        ))}
                    </Carousel>
                </div>
            ))}
        </div>
    )
}

export default PriceSection