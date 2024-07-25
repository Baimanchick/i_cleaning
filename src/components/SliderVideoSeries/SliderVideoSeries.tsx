'use client'

import React, { useEffect, useState } from 'react';
import { Carousel, Tabs } from "antd";
import styles from "@/components/VideoSeries/VideoSeries.module.scss";
import { Flex } from 'antd';
import Loading from '../Loading/Loading';
import { Button } from '../Button/Button';
import instagram from "@/assets/svgs/b2b_section/instagram.svg"
import telegram from "@/assets/svgs/b2b_section/telegram.svg"
import whatsapp from "@/assets/svgs/b2b_section/whatsapp.svg"
import { VideoType } from '@/helpers/interfaces/video.interface';
import { SliderVideoSeriesProps } from './SliderVideoSeries.props';

function SliderVideoSeries({ video, loading }: SliderVideoSeriesProps) {
    const [activeKey, setActiveKey] = useState<string | null>(null);

    useEffect(() => {
        if (video && video.length > 0) {
            setActiveKey(video[0].id?.toString() || null);
        }
    }, [video]);

    const handleRedirect = (url: string) => {
        window.open(url, '_blank');
    };

    const onTabChange = (key: string) => {
        setActiveKey(key);
    };

    if (loading) {
        return <Loading />;
    }

    if (!video || video.length === 0) {
        return <div>No videos available</div>;
    }


    const customerMapped = video?.map((video: VideoType) => ({
        key: video.id ? video.id.toString() : '',
        label: video.title,
        children: (
            <>
                <Carousel className={styles.carousel} >
                    {video.videos.map((vid: any, index: number) => (
                        <div className={styles.iFrameContainer} key={index}>
                            <iframe
                                className={styles.video_mobile}
                                src={vid.link}
                                data-cookieblock-src={vid.link}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                key={`video-main-${vid.id}`}
                                tabIndex={0}
                            ></iframe>
                        </div>
                    ))}
                </Carousel>
            </>
        )
    }));

    const activeCustomerTitle = video?.find((item: VideoType) => item.id?.toString() === activeKey)?.title;

    return (
        <div className={styles.videoComponent}>
            <div className='container'>
                <Flex className={styles.main_title_container} justify={'center'}>
                    <h2 className={styles.title}>VIDEO SERIES</h2>
                </Flex>
            </div>

            <div className={styles.tab_container}>
                <Flex style={{ width: '100%' }} className={styles.tabs_main} justify={'space-between'}>
                    <Tabs className={styles.Tabs} centered={true} items={customerMapped} onChange={onTabChange} />
                </Flex>
            </div>
            <div className='container'>
                <Flex style={{ flexDirection: 'column' }}>
                    <Flex gap={20} style={{ flexDirection: 'column' }}>
                        <h2 className={styles.secons_title}>{activeCustomerTitle}</h2>
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
                                <Flex onClick={() => handleRedirect('https://www.instagram.com/icleaning_dubai/')} align={'center'} style={{ cursor: 'pointer' }} gap={8}>
                                    <img src={instagram.src} alt="instagram" />
                                </Flex>
                                <Flex onClick={() => handleRedirect('https://t.me/icleaning_dubai')} align={'center'} style={{ cursor: 'pointer' }} gap={8}>
                                    <img src={telegram.src} alt="telegram" />
                                </Flex>
                                <Flex onClick={() => handleRedirect('https://api.whatsapp.com/send/?phone=971508648401&text&type=phone_number&app_absent=0')} align={'center'} style={{ cursor: 'pointer' }} gap={8}>
                                    <img src={whatsapp.src} alt="whatsapp" />
                                </Flex>
                            </Flex>
                            <div className={styles.contact}>Contact info: +971508648401</div>
                        </Flex>
                    </Flex>
                </Flex>
            </div>
        </div>
    );
}

export default SliderVideoSeries;
