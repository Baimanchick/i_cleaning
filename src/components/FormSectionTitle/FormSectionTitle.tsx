import React from 'react'
import styles from "./FormSectionTitle.module.scss"
import { Flex } from 'antd'
import ageImg from "@/assets/svgs/age/age.svg"
import Image from 'next/image'

function FormSectionTitle() {
    return (

        <Flex gap={40} style={{ flexDirection: 'column' }} align={'flex-end'}>
            <Flex>
                <h2 className={styles.title}>FILL THE APPLICATION FOR PARTERSHIP</h2>
            </Flex>
            <Flex className={styles.paragraphContainer}>
                <p className={styles.paragraph}>
                    From the first days of work, our company has relied on an unprecedented quality of service. And this decision brought iCleaning company to the leaders of the industry not only in the Dubai, but also in Abu Dhabi, Sharjah, Ajman. We consider a large number of orders and a lot of grateful feedback to be the best advertisement for our activities.
                </p>
            </Flex>
            <Flex className={styles.ageContainer} style={{ flexDirection: 'column' }} gap={14} >
                <Image alt='8+' width={158} height={144} className={styles.ageImg} src={ageImg.src} />
                <p className={styles.paragraph_age}>Years work experience in UAE</p>
            </Flex>
        </Flex>
    )
}

export default FormSectionTitle