'use client'

import Loading from "@/components/Loading/Loading";
import { ServiceType } from "@/helpers/interfaces/service.interface";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import Benefits from "@/service_components/Benefits/Benefits";
import ExtraInfoService from "@/service_components/ExtraInfoService/ExtraInfoService";
import FaqCurtains from "@/service_components/FaqCurtains/FaqCurtains";
import OurService from "@/service_components/OurService/OurService";
import ServiceSectionInfo from "@/service_components/ServiceSectionInfo/ServiceSectionInfo";
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
        <div className='qwerty'>
            <ServiceSectionInfo service={service} />
            <ExtraInfoService service={service?.secondvideos_set} />
            <OurService service={service?.service_set} />
            <ExtraInfoService style={{ marginTop: 40 }} service={service?.videos_set} />
            <OurService service={service?.material_set} />
            <FaqCurtains service={service?.need_set} />
            <Benefits service={service?.benefits_set} />
        </div>
    );
}
