'use client'

import React from 'react';
import styles from "./Widjet.module.scss"
import what from "@/assets/svgs/widjet/32px-WhatsApp.svg.png"

function Widjet() {
    const handleClick = () => {
        window.open('https://api.whatsapp.com/send/?phone=971508648401&text&type=phone_number&app_absent=0', '_blank');
    };

    return (
        <div className={styles.whatsapp_widget} onClick={handleClick}>
            <img src={what.src} alt="WhatsApp" />
        </div>
    );
}

export default Widjet