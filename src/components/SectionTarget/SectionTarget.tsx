import { Flex } from 'antd'
import React from 'react'
import styles from "./SectionTarget.module.scss"
import { Button } from '../Button/Button'
import ageImg from "@/assets/svgs/age/age.svg"
import ageImgSmall from "@/assets/svgs/age/small_age.svg"


function SectionTarget() {
    return (
        <Flex className={styles.main_flex} style={{ flexDirection: 'column', height: '100%' }} justify={'space-between'} >
            <Flex className={styles.cardAge_conatiner} style={{ marginTop: 59 }} justify={'flex-end'}>
                <img className={styles.ageImg} src={ageImg.src} />
                <img className={styles.ageImgSmall} src={ageImgSmall.src} />
            </Flex>
            <Flex className={styles.text_container} style={{ flexDirection: 'column', maxWidth: 640 }} gap={36}>
                <div>
                    <h2 className={styles.title}>RELIABLE CLEANLINESS IS OUR MISSION!</h2>
                </div>
                <div>
                    <p className={styles.paragrapgh}>YOUR HOME IS OUR RESPONSIBILITY - TRUST US WITH ITS CARE.</p>
                </div>
            </Flex>
        </Flex>
    )
}

export default SectionTarget