'use client'

import { Flex } from "antd"
import { Button } from "../Button/Button"
import styles from "./SectionInfo.module.scss"
import { SectionInfoProps } from "./SectionInfo.props"
import { useRouter } from "next/navigation"
function SectionInfo({ title, text, buttonTitle, imageUrl, style }: SectionInfoProps) {
    const naviagate = useRouter()
    return (
        <div style={{ ...style, backgroundImage: `url(${imageUrl})` }} className={styles.sectionInfo}>
            <Flex justify={'center'} align={'center'} style={{ width: 983, height: '100%' }} className='container'>
                <Flex gap={5} className={styles.titleContainer} >
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.text}>{text}</p>
                    <div onClick={() => buttonTitle ? naviagate.push('/service/1') : null} style={{ display: `${!buttonTitle ? 'none' : 'initial'}` }}>
                        <Button className={styles.btn} appearance="blue">{buttonTitle}</Button>
                    </div>
                </Flex>
            </Flex>
        </div>
    )
}

export default SectionInfo