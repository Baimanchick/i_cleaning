'use client'

import React from 'react';
import { Carousel, Flex } from 'antd';
import ServiceCard from '../ServiceCard/ServiceCard';
import { SliderServiceProps } from './SliderServiceProps.props';
import { ServiceType } from '@/helpers/interfaces/service.interface';
import styles from "./SliderService.module.scss"


function SliderService({ service }: SliderServiceProps) {

    return (
        <Carousel className={styles.carousel}>
            {service && service.map((item: ServiceType, index: number) => (
                <Flex key={index} gap={20}>
                    <ServiceCard service={item} />
                </Flex>
            ))}
        </Carousel>
    );
};

export default SliderService;