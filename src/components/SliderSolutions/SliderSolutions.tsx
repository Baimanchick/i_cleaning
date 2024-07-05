'use client'

import React from 'react';
import { Carousel, Flex } from 'antd';
import styles from "./SldierSolutions.module.scss"
import SolutionsCard from '../SolutionsCard/SolutionsCard';
import card1 from "@/assets/svgs/sloutions/card-1.svg"
import card2 from "@/assets/svgs/sloutions/card-2.svg"
import card3 from "@/assets/svgs/sloutions/card-3.svg"


function SliderSoultions() {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };

    return (
        <Carousel className={styles.carousel} afterChange={onChange}>
            <div className={styles.sliderSolutions} style={{ marginLeft: 10, marginRight: 10 }}>
                <SolutionsCard
                    icon={card1}
                    title='ECO Friendly certified shampoo'
                    text='Automated carpet washing on the latest generation equipment. 5 types of brushes clean deep dirt from the base and from the Automated carpet washing on the latest generation equipment. 5 types of brushes clean deep dirt from the base and from the Automated carpet washing on the latest generation equipment. '
                />
            </div>

            <div className={styles.sliderSolutions} style={{ marginLeft: 10, marginRight: 10 }}>
                <SolutionsCard
                    icon={card2}
                    title='ECO Friendly certified shampoo'
                    text='Automated carpet washing on the latest generation equipment. 5 types of brushes clean deep dirt from the base and from the Automated carpet washing on the latest generation equipment. 5 types of brushes clean deep dirt from the base and from the Automated carpet washing on the latest generation equipment. '
                />
            </div>
            <div className={styles.sliderSolutions} >
                <SolutionsCard
                    icon={card3}
                    title='ECO Friendly certified shampoo'
                    text='Automated carpet washing on the latest generation equipment. 5 types of brushes clean deep dirt from the base and from the Automated carpet washing on the latest generation equipment. 5 types of brushes clean deep dirt from the base and from the Automated carpet washing on the latest generation equipment. '
                />
            </div>
        </Carousel>
    );
};

export default SliderSoultions