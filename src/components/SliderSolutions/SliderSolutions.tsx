'use client'

import React from 'react';
import { Carousel, Flex } from 'antd';
import styles from "./SldierSolutions.module.scss"
import SolutionsCard from '../SolutionsCard/SolutionsCard';
import card1 from "@/assets/svgs/sloutions/card-1.svg"
import card2 from "@/assets/svgs/sloutions/card-2.svg"
import card3 from "@/assets/svgs/sloutions/card-3.svg"


function SliderSoultions() {

    return (
        <Carousel className={styles.carousel} >
            <div className={styles.sliderSolutions} style={{ marginLeft: 10, marginRight: 10 }}>
                <SolutionsCard
                    icon={card1}
                    title='ECO Friendly certified shampoo'
                    text='Automated carpet washing on the latest generation equipment. 5 types of brushes clean deep dirt from the base and from the surface of the product. The pressure of the brushes is adjusted for a specific type of pile. Specialized shampoos for carpets are used. They are hypoallergenic, safe for children and animals.'
                />
            </div>

            <div className={styles.sliderSolutions} style={{ marginLeft: 10, marginRight: 10 }}>
                <SolutionsCard
                    icon={card2}
                    title='Quality guarantee'
                    text='Technologists carry out additional quality control. After their approval, a clean carpet is packed in an individual sleeve and handed over for delivery.'
                />
            </div>
            <div className={styles.sliderSolutions} >
                <SolutionsCard
                    icon={card3}
                    title='Comfort / Meeting deadlines'
                    text='Welcome to ICLEANING , professional carpet cleaning company! At our state-of-the-art facility, we specialize in handling large volumes of carpet cleaning tasks efficiently and delivering results in record time.'
                />
            </div>
        </Carousel>
    );
};

export default SliderSoultions