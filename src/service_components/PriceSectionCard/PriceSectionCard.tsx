import React from 'react';
import styles from './PriceSectionCard.module.scss';
import { PriceSectionCardProps } from './PriceSectionCard.props';
import { Flex } from 'antd';
import { Button } from '@/components/Button/Button';
import Image from 'next/image';

function PriceSectionCard({ card }: PriceSectionCardProps) {
    const renderExtraInfo = (extraInfo: any) => {
        try {
            const info = JSON.parse(extraInfo);
            return (
                Object.entries(info[0]).map(([key, value]: any, index) => (
                    <div key={index} className={styles.extraInfoItem}>
                        <h2 className={styles.extra_info_title}>{key}</h2>
                        <h2 className={styles.extra_info_price}>{value}</h2>
                    </div>
                ))
            );
        } catch (e) {
            console.error('Error parsing extra info:', e);
            return null;
        }
    };

    return (
        card.is_simple ? (
            <div className={styles.card}>
                <Flex className={styles.card_item_simple} style={{ flexDirection: 'column' }}>
                    <h2 className={styles.title}>{card.title}</h2>
                    <p className={`${styles.text} ${styles.text_simple}`}>{card.desciprtion}</p>
                    <h2 className={`${styles.price} ${styles.price_simple}`}>{card.price}</h2>
                    <div className={styles.btn_main_simple}>
                        <Button className={styles.btn} appearance='blue'>
                            Add +
                        </Button>
                    </div>
                    <Image width={470} height={200} className={styles.img} src={card.image} alt={card.title} />
                </Flex>
            </div>
        ) : card.is_discount ? (
            <div className={styles.card}>
                <Flex className={styles.card_item_discount} style={{ flexDirection: 'column' }}>
                    <Flex style={{ flexDirection: 'column' }} gap={8}>
                        <h2 className={styles.title}>{card.title}</h2>
                        <p className={styles.text}>{card.desciprtion}м²</p>
                        <p className={styles.square}>{card.square}м²</p>
                    </Flex>
                    <Flex
                        className={styles.price_container}
                        style={{ width: '100%', padding: '0px 10px 0px 10px' }}
                        justify={card.old_price === null ? 'center' : 'space-between'}
                    >
                        <h2 className={styles.price}>{card.price}</h2>
                        <h2 className={styles.oldPrice}>{card.old_price}</h2>
                    </Flex>
                    <p className={styles.size}>{card.size}</p>
                    <p className={styles.support}>{card.title2}</p>
                    <div className={styles.btn_main_discount}>
                        <Button className={styles.btn} appearance='blue'>
                            Add +
                        </Button>
                    </div>
                    <Image width={470} height={200} className={styles.img} src={card.image} alt={card.title} />
                </Flex>
            </div>
        ) : card.is_house ? (
            <div className={styles.card}>
                <Flex className={styles.card_item_simple} style={{ flexDirection: 'column' }}>
                    <h2 className={styles.title}>{card.title}</h2>
                    <p className={styles.second_title}>{card.desciprtion}</p>
                    <h2 className={styles.title}>{card.title2}</h2>
                    <div className={styles.extra_info_main}>
                        {renderExtraInfo(card.extra_info)}
                    </div>
                    <div className={styles.btn_main_house}>
                        <Button className={styles.btn} appearance='blue'>
                            Add +
                        </Button>
                    </div>
                    <Image width={470} height={200} className={styles.img} src={card.image} alt={card.title} />
                </Flex>
            </div>
        ) : null
    );
}

export default PriceSectionCard;
