'use client'

import React, { useEffect, useState } from 'react'
import styles from "./OurService.module.scss"
import { ServiceSet, ServiceSetItems } from '@/helpers/interfaces/service.interface';
import { OurServiceProps } from './OurService.props';
import OurTypesServiceCard from '../OurTypesServiceCard/OurTypesServiceCard';
import { Carousel, Flex } from 'antd';

function OurService({ service }: OurServiceProps) {
    const [isFour, isFourSet] = useState(false)

    useEffect(() => {
        if (service) {
            service.forEach((item: ServiceSet) => {
                if (item.items && item.items.length > 3) {
                    isFourSet(true);
                } else {
                    isFourSet(false);
                }
            });
        }
    }, [service]);

    return (
        service?.map((item: ServiceSet, index: number) => (
            <div key={index} className={styles.main}>
                <div className='container'>
                    <h2 className={styles.title}>{item.title || item.name}</h2>
                    <Flex
                        style={{ flexDirection: 'column', rowGap: 80 }}
                        className={`${isFour ? styles.fourFlex : styles.flex}`}
                    >
                        {item.items?.map((item: ServiceSetItems, index: number) => (
                            <OurTypesServiceCard key={index} service={item} isFour={isFour} />
                        ))}
                    </Flex>
                    <Carousel className={styles.carousel}>
                        {item.items?.map((item: ServiceSetItems, index: number) => (
                            <OurTypesServiceCard key={index} service={item} isFour={isFour} />
                        ))}
                    </Carousel>
                </div>
            </div >
        ))
    )
}

export default OurService;
