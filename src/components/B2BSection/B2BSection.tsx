import React from 'react'
import styles from "./B2BSection.module.scss"
import { Flex } from 'antd'

function B2BSection() {
    return (
        <>
            <div className='container'>
                <Flex justify={'center'}>
                    <h2>B2B CUSTOMERS</h2>
                </Flex>
                <Flex justify={'space-between'}>
                    <div></div>
                </Flex>
            </div>
        </>
    )
}

export default B2BSection