import { Card, Flex } from 'antd'
import React from 'react'
import styles from "./SectionTarget.module.scss"
import { Button } from '../Button/Button'
import CardAge from '../CardAge/CardAge'

function SectionTarget() {
    return (
        <Flex style={{ flexDirection: 'column', height: '100%' }} justify={'space-between'} >
            <Flex style={{ marginTop: 59 }} justify={'end'}>
                <CardAge age={8} text='Years in UAE' />
            </Flex>
            <Flex style={{ flexDirection: 'column', maxWidth: 640 }} gap={36}>
                <div>
                    <h2 className={styles.title}>RELIABLE CLEANLINESSIS OUR MISSION!</h2>
                </div>
                <div>
                    <p className={styles.paragrapgh}>YOUR HOME IS OUR RESPONSIBILITY - TRUST US WITH ITS CARE.</p>
                </div>
                <div>
                    <Button className={styles.btn} appearance='blue'>Learn more</Button>
                </div>
            </Flex>
        </Flex>
    )
}

export default SectionTarget