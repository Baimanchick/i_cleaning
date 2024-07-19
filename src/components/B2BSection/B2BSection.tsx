'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import { CustomerType } from "@/helpers/interfaces/customer.interface";
import { Tabs } from "antd";
import styles from "./B2BSection.module.scss";
import { Flex } from 'antd';
import { getClassByIndex } from '@/helpers/functions/getClassByIndex';
import Loading from '../Loading/Loading';
import { Button } from '../Button/Button';
import instagram from "@/assets/svgs/b2b_section/instagram.svg"
import telegram from "@/assets/svgs/b2b_section/telegram.svg"
import whatsapp from "@/assets/svgs/b2b_section/whatsapp.svg"
import { B2BSectionProps } from './B2BSection.props';

function B2BSection({ customer, loading }: B2BSectionProps) {
    const [activeKey, setActiveKey] = useState<string | null>(null);

    useEffect(() => {
        if (customer && customer.length > 0) {
            setActiveKey(customer[0].id?.toString() || null);
        }
    }, [customer]);

    const onTabChange = (key: string) => {
        setActiveKey(key);
    };

    const customerMapped = customer?.map((customer: CustomerType) => ({
        key: customer.id ? customer.id.toString() : '',
        label: customer.title,
        children: (
            <Flex className={styles.image_main}>
                <Flex className={styles.image_container_first}>
                    {customer.images.slice(0, 1).map((image: any, index) => (
                        <img
                            key={index}
                            src={image.image}
                            alt={`image-${index}`}
                            className={`${styles.image} ${getClassByIndex(index, styles)}`}
                        />
                    ))}
                </Flex>
                <Flex gap={16} className={styles.image_container_second}>
                    <Flex className={styles.justify} gap={16}>
                        {customer.images.slice(1, 3).map((image: any, index) => (
                            <img
                                key={index + 1}
                                src={image.image}
                                alt={`image-${index + 1}`}
                                className={`${styles.image} ${getClassByIndex(index + 1, styles)}`}
                            />
                        ))}
                    </Flex>
                    <Flex className={styles.justify} gap={16}>
                        {customer.images.slice(3, 5).map((image: any, index) => (
                            <img
                                key={index + 3}
                                src={image.image}
                                alt={`image-${index + 3}`}
                                className={`${styles.image} ${getClassByIndex(index + 3, styles)}`}
                            />
                        ))}
                    </Flex>
                </Flex>
            </Flex>
        )
    }));

    const activeCustomerTitle = customer?.find((item: CustomerType) => item.id?.toString() === activeKey)?.title;

    return (
        <>
            <div className='container'>
                <Flex className={styles.main_title_container} justify={'center'}>
                    <h2 className={styles.title}>B2B CUSTOMERS</h2>
                </Flex>
            </div>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <div className={styles.tab_container}>
                        <Flex style={{ width: '100%' }} className={styles.tabs_main} justify={'space-between'}>
                            <Tabs className={styles.Tabs} centered={true} items={customerMapped} onChange={onTabChange} />
                        </Flex>
                    </div>
                    <div style={{ marginTop: 40 }} className='container'>
                        <Flex style={{ flexDirection: 'column' }}>
                            <Flex gap={20} style={{ flexDirection: 'column' }}>
                                <h2 className={styles.secons_title}>FOR {activeCustomerTitle}</h2>
                                <p className={styles.text}>
                                    Our company's expertise extends beyond just cleaning services; we prioritize customer satisfaction and tailor our approach to meet the unique needs of each client. Additionally, our commitment to sustainability sets us apart, as we strive to minimize our environmental footprint while delivering exceptional results. In Dubai's competitive market, our dedication to professionalism, eco-friendliness, and personalized service makes us the ideal partner for companies seeking reliable and environmentally conscious cleaning solutions.
                                </p>
                            </Flex>
                            <Flex className={styles.utils} align={'center'} justify={'space-between'}>
                                <div>
                                    <Button className={styles.btn} appearance='blue'>Application</Button>
                                </div>
                                <Flex gap={20} style={{ flexDirection: 'column' }}>
                                    <Flex justify={'flex-end'} gap={12}>
                                        <img src={instagram.src} alt="instagram" />
                                        <img src={telegram.src} alt="telegram" />
                                        <img src={whatsapp.src} alt="whatsapp" />
                                    </Flex>
                                    <div className={styles.contact}>Contact info: +971508648401</div>
                                </Flex>
                            </Flex>
                        </Flex>
                    </div>
                </>
            )}
        </>
    );
}

export default B2BSection;
