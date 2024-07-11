import React, { useState } from 'react';
import { ServiceSectionInfoProps } from './ServiceSectionInfo.props';
import { MainImage } from '@/helpers/interfaces/service.interface';
import styles from "./ServiceSectionInfo.module.scss"
import Loading from '@/components/Loading/Loading';
import { Flex } from 'antd';

function ServiceSectionInfo({ service }: ServiceSectionInfoProps) {
    const [expanded, setExpanded] = useState(false);

    if (!service) {
        return <Loading />;
    }

    const toggleExpansion = () => {
        setExpanded(!expanded);
    };

    return (
        service.mainimages_set?.map((info: MainImage, index: number) => (
            <div className={styles.info_container} style={{ backgroundImage: `url(${info.image})` }} key={index}>
                <div className={styles.content}>
                    <Flex className={styles.text_container} style={{ flexDirection: 'column' }} gap={36}>
                        <div>
                            <h2 className={styles.title}>{info.title}</h2>
                        </div>
                        <div>
                            {expanded ? (
                                <p className={styles.paragraph_open}>{info.text}</p>
                            ) : (
                                <p className={styles.paragraph}>{info.text.slice(0, 250)}...</p>
                            )}
                        </div>
                        <button
                            className='knowMoreButton'
                            onClick={toggleExpansion}
                            style={{ textAlign: 'left' }}
                        >
                            {expanded ? '↑ Show Less' : '↓ Know More'}
                        </button>
                    </Flex>
                </div>
            </div>
        ))
    );
}

export default ServiceSectionInfo;
