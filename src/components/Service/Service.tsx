import React from 'react'
import styles from "./Service.module.scss"
import { Flex } from 'antd'
import ServiceCard from '../ServiceCard/ServiceCard'
import SliderService from '../SliderService/SliderService'

function Service() {
    const fakeData = [
        {
            id: 1,
            title_1: 'CARPET',
            title_2: 'CARPETING',
            text: 'Regular carpet cleaning is essential for maintaining a healthy and comfortable home environment. It removes dirt, allergens, and bacteria, improving indoor air quality and extending the life of your carpets'
        }
    ]
    return (
        <>
            <h2 className={styles.service_title}>CLEANING SERVICES</h2>
            <Flex className={styles.service_list}>
                {fakeData.map((service: any, index: number) => (
                    <ServiceCard service={service} key={index} />
                ))}
            </Flex>
            <Flex className={styles.service_list_mobile}>
                <SliderService data={fakeData} />
            </Flex>
        </>
    )
}

export default Service