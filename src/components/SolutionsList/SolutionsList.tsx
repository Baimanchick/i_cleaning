import React from 'react'
import SolutionsCard from '../SolutionsCard/SolutionsCard'
import styles from "./SolutionsList.module.scss"
import card1 from "@/assets/svgs/sloutions/card-1.svg"
import card2 from "@/assets/svgs/sloutions/card-2.svg"
import card3 from "@/assets/svgs/sloutions/card-3.svg"
import { Flex } from 'antd'
import SliderSoultions from '../SliderSolutions/SliderSolutions'

function SolutionsList() {
    return (
        <div className={styles.solutionsListMain}>
            <Flex className={styles.title_container} justify={'center'}>
                <h2 className={styles.title}>Solutions we offer</h2>
            </Flex>
            <Flex className={styles.solutionsList} justify={'center'} gap={100}>

                <SolutionsCard
                    icon={card1}
                    title='ECO Friendly certified shampoo'
                    text='Automated carpet washing on the latest generation equipment. 5 types of brushes clean deep dirt from the base and from the Automated carpet washing on the latest generation equipment. 5 types of brushes clean deep dirt from the base and from the Automated carpet washing on the latest generation equipment. '
                />

                <SolutionsCard
                    icon={card2}
                    title='ECO Friendly certified shampoo'
                    text='Automated carpet washing on the latest generation equipment. 5 types of brushes clean deep dirt from the base and from the Automated carpet washing on the latest generation equipment. 5 types of brushes clean deep dirt from the base and from the Automated carpet washing on the latest generation equipment. '
                />
                <SolutionsCard
                    icon={card3}
                    title='ECO Friendly certified shampoo'
                    text='Automated carpet washing on the latest generation equipment. 5 types of brushes clean deep dirt from the base and from the Automated carpet washing on the latest generation equipment. 5 types of brushes clean deep dirt from the base and from the Automated carpet washing on the latest generation equipment. '
                />

            </Flex>
            <SliderSoultions />
        </div>
    )
}

export default SolutionsList
