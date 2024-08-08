'use client'

import React, { useState } from 'react'
import styles from "./Cart.module.scss"
import { Flex, Radio } from 'antd'
import { Button } from '../Button/Button'
import { Services } from '@/helpers/interfaces/cart.interface'

function Cart() {
    const services: Services = {
        carpet: {
            options: [
                { label: '4 м²', value: '4m', price: 99 },
                { label: '6 м²', value: '6m', price: 150 },
                { label: '12 м²', value: '12m', price: 300 },
            ],
            defaultPrice: 25,
        },
        matresses: {
            options: [
                { label: 'SINGLE SIZE', value: 'small_mat', price: 125 },
                { label: 'QUEEN SIZE', value: 'medium_mat', price: 175 },
                { label: 'KING SIZE', value: 'large_mat', price: 300 },
            ],
        },
        sofas: {
            options: [
                { label: 'STANDART SOFAS', value: 'stan_sofas', price: 60 },
                { label: 'LEATHER SOFAS', value: 'leath_sofas', price: 80 },
                { label: 'ARM CHAIRS SOFAS', value: 'arm_sofas', price: '30-40' },
            ],
        },
        curtainsAndBlinds: {
            options: [
                { label: 'CURTAINS', value: 'curtains', price: 17 },
                { label: 'BLINDS', value: 'blinds', price: 25 },
            ],
        },
        generalCleaning: {
            options: [
                { label: 'STUDIO', value: 'studio', price: 350 },
                { label: '1 BEDROOM', value: '1', price: 525 },
                { label: '2 BEDROOM', value: '2', price: 705 },
                { label: '3 BEDROOM', value: '3', price: 899 },
                { label: '4 BEDROOM', value: '4', price: 1189 },
            ],
        },
        deepCleaning: {
            options: [
                { label: '1 BEDROOM', value: '1_deep', price: 729 },
                { label: '2 BEDROOM', value: '2_deep', price: 989 },
                { label: '3 BEDROOM', value: '3_deep', price: 1329 },
                { label: '4 BEDROOM', value: '4_deep', price: 1599 },
                { label: '5 BEDROOM', value: '5_deep', price: 1899 },
            ],
        },
        AirConditionerClening: {
            options: [
                { label: 'STANDART', value: 'air_stan', price: 125 },
                { label: 'DEEP', value: 'air_deep', price: 175 },
                { label: 'INDUSTRIAL', value: 'air_ind', price: 300 },
            ],
        }
    }

    const [selectedOptions, setSelectedOptions] = useState<{
        [key in keyof Services]: string | null
    }>({
        carpet: null,
        matresses: null,
        sofas: null,
        curtainsAndBlinds: null,
        generalCleaning: null,
        deepCleaning: null,
        AirConditionerClening: null
    })

    const handleOptionChange = (service: keyof Services, value: string) => {
        setSelectedOptions(prevState => ({
            ...prevState,
            [service]: value,
        }))
    }

    const getPrice = (service: keyof Services) => {
        const selectedOption = services[service].options.find(option => option.value === selectedOptions[service])
        return selectedOption ? selectedOption.price : services[service].options[0].price
    }

    const calculateTotalPrice = () => {
        return serviceKeys.reduce((total, service) => {
            if (selectedOptions[service]) {
                const price = getPrice(service);
                return total + (typeof price === 'number' ? price : 0);
            }
            return total;
        }, 0);
    }


    const serviceKeys: (keyof Services)[] = ['carpet', 'matresses', 'sofas', 'curtainsAndBlinds', 'generalCleaning', 'deepCleaning', 'AirConditionerClening']

    return (
        <Flex className={styles.main} style={{ flexDirection: 'column', rowGap: '20px' }}>
            {serviceKeys.map(service => (
                <Flex
                    key={service}
                    align={'center'}
                    justify={'space-between'}
                    className={styles.container}
                    style={{ padding: '20px', borderBottom: '1px solid #ccc' }}
                >
                    <div className={styles.title}>
                        {service.replace(/([A-Z])/g, ' $1').toUpperCase().trim()}
                    </div>
                    <Radio.Group
                        className={styles.radio_button_container}
                        value={selectedOptions[service]}
                        buttonStyle="solid"
                        onChange={(e) => handleOptionChange(service, e.target.value)}
                        style={{ flexWrap: 'wrap', gap: '10px', flex: '1' }}
                    >
                        {services[service].options.map(option => (
                            <Radio.Button
                                key={option.value}
                                className={styles.radio_button}
                                value={option.value}
                            >
                                {option.label}
                            </Radio.Button>
                        ))}
                    </Radio.Group>
                    <div className={styles.price}>
                        AED {getPrice(service)}
                    </div>
                    <div className={styles.btn_container}>
                        <Button className={styles.btn} appearance='blue'>Add +</Button>
                    </div>
                </Flex>
            ))}
            <Flex align={'flex-end'} style={{ flexDirection: "column", marginTop: '20px' }} className={styles.continue_container}>
                <Flex className={styles.total}>
                    <div>Total price: AED {calculateTotalPrice()}</div>
                </Flex>
                <Button className={`${styles.btn} ${styles.btn_countinue}`} appearance='blue'>CONTINUE</Button>
            </Flex>
        </Flex>

    )
}

export default Cart
