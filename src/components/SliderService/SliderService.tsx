'use client'

import React from 'react';
import { Carousel, Flex } from 'antd';
import ServiceCard from '../ServiceCard/ServiceCard';


function SliderService({ data }: any) {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };

    return (
        <Carousel afterChange={onChange}>
            {data.map((service: any, index: number) => (
                <Flex gap={20}>
                    <ServiceCard service={service} key={index} />
                </Flex>
            ))}
        </Carousel>
    );
};

export default SliderService;