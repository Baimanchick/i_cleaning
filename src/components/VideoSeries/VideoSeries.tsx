'use client'

import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { Tabs } from "antd";
import styles from "./VideoSeries.module.scss";
import { Flex } from 'antd';
import { getClassByIndex } from '@/helpers/functions/getClassByIndex';
import Loading from '../Loading/Loading';
import { Button } from '../Button/Button';
import instagram from "@/assets/svgs/b2b_section/instagram.svg"
import telegram from "@/assets/svgs/b2b_section/telegram.svg"
import whatsapp from "@/assets/svgs/b2b_section/whatsapp.svg"
import { fetchVideo } from '@/store/features/video/videoSlice';
import { VideoType } from '@/helpers/interfaces/video.interface';

function VideoSeries() {
    const { video, loading } = useAppSelector((state) => state.video);
    const dispatch = useAppDispatch();
    const [activeKey, setActiveKey] = useState<string | null>(null);

    useEffect(() => {
        dispatch(fetchVideo());
    }, [dispatch]);

    useEffect(() => {
        if (video && video.length > 0) {
            setActiveKey(video[0].id?.toString() || null);
        }
    }, [video]);

    const onTabChange = (key: string) => {
        setActiveKey(key);
    };

    console.log(video);

    const customerMapped = video?.map((video: VideoType) => ({
        key: video.id ? video.id.toString() : '',
        label: video.title,
        children: (
            <Flex className={styles.image_main} key={`video-main-${video.id}`}>
                <Flex key={video.id} className={styles.image_container_first}>
                    {video.videos.slice(0, 1).map((vid: any, index) => (
                        <iframe
                            className={`${styles.image} ${getClassByIndex(index, styles)}`}
                            src={vid.link}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            key={`video-main-${vid.id}`}
                        ></iframe>
                    ))}
                </Flex>
                <Flex gap={16} className={styles.image_container_second} key={`video-second-${video.id}`}>
                    <Flex className={styles.justify} gap={16} key={`video-second-row1-${video.id}`}>
                        {video.videos.slice(1, 3).map((vid: any, index) => (
                            <iframe
                                className={`${styles.image} ${getClassByIndex(index + 1, styles)}`}
                                src={vid.link}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                key={`video-main-${vid.id}`}
                            ></iframe>
                        ))}
                    </Flex>
                    <Flex className={styles.justify} gap={16} key={`video-second-row2-${video.id}`}>
                        {video.videos.slice(3, 5).map((vid: any, index) => (
                            <iframe
                                className={`${styles.image} ${getClassByIndex(index + 3, styles)}`}
                                src={vid.link}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                key={`video-main-${vid.id}`}
                            ></iframe>
                        ))}
                    </Flex>
                </Flex>
            </Flex>
        )
    }));

    const activeCustomerTitle = video?.find((item: VideoType) => item.id?.toString() === activeKey)?.title;

    return (
        <>
            <div className='container'>
                <Flex className={styles.main_title_container} justify={'center'}>
                    <h2 className={styles.title}>VIDEO SERIES</h2>
                </Flex>
            </div>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <div className={styles.tab_container}>
                        <Flex style={{ width: '100%' }} className={styles.tabs_main} justify={'space-between'}>
                            <Tabs className={styles.Tabs} centered={true} items={customerMapped} onChange={onTabChange} />
                            <div></div>
                        </Flex>
                    </div>
                    <div className='container'>
                        <Flex style={{ flexDirection: 'column' }}>
                            <Flex gap={20} style={{ flexDirection: 'column' }}>
                                <h2 className={styles.secons_title}>FOR {activeCustomerTitle}</h2>
                                <p className={styles.text}>
                                    Our company's expertise extends beyond just cleaning services; we prioritize video satisfaction and tailor our approach to meet the unique needs of each client. Additionally, our commitment to sustainability sets us apart, as we strive to minimize our environmental footprint while delivering exceptional results. In Dubai's competitive market, our dedication to professionalism, eco-friendliness, and personalized service makes us the ideal partner for companies seeking reliable and environmentally conscious cleaning solutions.
                                </p>
                            </Flex>
                            <Flex className={styles.utils} align={'center'} justify={'space-between'}>
                                <div>
                                    <Button className={styles.btn} appearance='blue'>Application</Button>
                                </div>
                                <Flex gap={20} style={{ flexDirection: 'column' }}>
                                    <Flex justify={'flex-end'} gap={12}>
                                        <img src={instagram.src} alt="instagram" />
                                        <img src={telegram.src} alt="telegram" />
                                        <img src={whatsapp.src} alt="whatsapp" />
                                    </Flex>
                                    <div className={styles.contact}>Contact info: +971508648401</div>
                                </Flex>
                            </Flex>
                        </Flex>
                    </div>
                </>
            )}
        </>
    );
}

export default VideoSeries;
