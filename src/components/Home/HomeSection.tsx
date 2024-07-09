'use client'

import React, { useEffect } from 'react'
import Navbar from "@/components/Navbar/Navbar";
import SectionTarget from "@/components/SectionTarget/SectionTarget";
import Service from "@/components/Service/Service";
import SearchInput from "@/components/SearchInput/SearchInput";
import SectionInfo from "@/components/SectionInfo/SectionInfo";
import B2BSection from "@/components/B2BSection/B2BSection";
import FormEmail from "@/components/FormEmail/FormEmail";
import SolutionsList from "@/components/SolutionsList/SolutionsList";
import VideoSeries from "@/components/VideoSeries/VideoSeries";
import FAQSection from "@/components/FAQSection/FAQSection";
import TrustSection from "@/components/TrustSection/TrustSection";
import Footer from "@/components/Footer/Footer";
import styles from "./HomeSection.module.scss"
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { fetchServices } from '@/store/features/service/serviceSlice';
import { fetchCustomer } from "@/store/features/customer/customerSlice";
import { fetchVideo } from '@/store/features/video/videoSlice';
import useWindowSize from '@/hooks/useWindowSize';
import SliderVideoSeries from '../SliderVideoSeries/SliderVideoSeries';

function HomeSection() {
    const dispatch = useAppDispatch()

    const { service, loading: serviceLoading } = useAppSelector((state) => state.service)
    const { customer, loading: customerLoading } = useAppSelector((state) => state.customer)
    const { video, loading: videoLoading } = useAppSelector((state) => state.video)
    const windowSize = useWindowSize();
    const isMobile = windowSize.width && windowSize.width < 670;

    useEffect(() => {
        dispatch(fetchServices())
        dispatch(fetchCustomer())
        dispatch(fetchVideo())
    }, [dispatch])

    return (
        <div>
            <div className="container">
                <Navbar />
            </div>
            <div className="search-container">
                <SearchInput />
            </div>
            <div className="section-target-container">
                <div className="section-target">
                    <SectionTarget />
                </div>
            </div>
            <div className="container">
                <Service service={service} loading={serviceLoading} />
            </div>
            <SectionInfo
                title="HANDMADE CARPETS DELICATE CLEANING"
                text="Silk carpets could be easily damaged by washing machine so it should be cleaned by special delicated hand or chemical cleaning. "
                buttonTitle="Learn more"
                imageUrl="https://i.imgur.com/x3QRtc0.jpeg"
                style={{ height: 430, marginTop: 149 }}
            />

            <div className={styles.b2b_section}>
                <B2BSection customer={customer} loading={customerLoading} />
            </div>

            <div className={styles.form_main}>
                <div className={styles.form_container}>
                    <FormEmail />
                </div>
            </div>

            <SectionInfo
                title="REGULAR VACUUMING IS NOT ENOUGH"
                text="The average indoor carpet holds 200,000 bacteria per square inch. While regular vacuuming is essential, it’s not enough to keep your carpets truly clean. A clean carpet protects your health by improving air quality. It also improves the look and feel of a space."
                buttonTitle={false}
                imageUrl="https://i.imgur.com/n9NNDIt.jpeg"
                style={{ height: 430, marginTop: 149 }}
            />

            <div className={styles.solutionsMain}>
                <div className="container">
                    <SolutionsList />
                </div>
            </div>

            {isMobile ? (
                <div className={styles.video_series}>
                    <SliderVideoSeries video={video} loading={videoLoading} />
                </div>
            ) : (
                <div className={styles.video_series}>
                    <VideoSeries video={video} loading={videoLoading} />
                </div>
            )}



            <div className={styles.FAQSection}>
                <div className='container'>
                    <hr style={{ marginBottom: 10 }} className={styles.FAQhr} />
                    <FAQSection />
                    <hr style={{ marginTop: 10 }} className={styles.FAQhr} />
                </div>
            </div>

            <div className={styles.trustSection}>
                <div className='container'>
                    <TrustSection />
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default HomeSection;
