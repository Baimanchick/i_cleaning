'use client'

import React from 'react'
import styles from "./Service.module.scss"
import { Flex } from 'antd'
import ServiceCard from '../ServiceCard/ServiceCard'
import SliderService from '../SliderService/SliderService'
import { ServiceType } from '@/helpers/interfaces/service.interface'
import Loading from '../Loading/Loading'
import { ServiceProps } from './Service.prop'

function Service({ service, loading }: ServiceProps) {


    return (
        <>
            <h2 className={styles.service_title}>CLEANING SERVICES</h2>
            {loading ? (
                <Loading style={{ marginBottom: 40 }} />
            ) : (
                <>
                    <Flex className={styles.service_list}>
                        {Array.isArray(service) && service.map((item: ServiceType, index: number) => (
                            <ServiceCard service={item} key={index} />
                        ))}
                    </Flex>
                    <Flex className={styles.service_list_mobile}>
                        <SliderService service={service} />
                    </Flex>

                </>
            )}
        </>
    )
}

export default Service
