'use client'

import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import Benefits from "@/service_components/Benefits/Benefits";
import ExtraInfoService from "@/service_components/ExtraInfoService/ExtraInfoService";
import FaqCurtains from "@/service_components/FaqCurtains/FaqCurtains";
import OurService from "@/service_components/OurService/OurService";
import PriceSection from "@/service_components/PriceSection/PriceSection";
import Process from "@/service_components/Process/Process";
import ServiceSectionInfo from "@/service_components/ServiceSectionInfo/ServiceSectionInfo";
import Subscription from "@/service_components/Subscription/Subscription";
import WhatWeRemove from "@/service_components/WhatWeRemove/WhatWeRemove";
import { fetchOneService } from "@/store/features/service/serviceSlice";
import { Spin } from "antd";
import { useEffect } from "react";

export default function Page({ params }: { params: { id: string } }) {
    const dispatch = useAppDispatch();
    const { service, loading } = useAppSelector((state) => state.service);

    useEffect(() => {
        if (params.id) {
            dispatch(fetchOneService(Number(params.id)));
        }
    }, [params.id, dispatch]);

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh', position: 'absolute', zIndex: 100, top: 0, background: 'rgba(245, 249, 252, 1)' }}>
                <Spin size="large" style={{ color: '#E1A304' }} />
            </div>
        )
    }

    console.log(service);

    return (
        <>
            <ServiceSectionInfo service={service?.mainimages_set} />
            <ExtraInfoService service={service?.secondvideos_set} />
            <OurService service={service?.service_set} />
            <ExtraInfoService style={{ marginTop: 40 }} service={service?.videos_set} />
            <OurService service={service?.material_set} />
            <FaqCurtains service={service?.need_set} />
            <Benefits service={service?.benefits_set} />
            <WhatWeRemove service={service?.carousel_set} />
            <Subscription service={service?.bigimage_set} />
            <PriceSection service={service?.card_set} />
            <Process service={service?.process_set} />
        </>
    );
}
