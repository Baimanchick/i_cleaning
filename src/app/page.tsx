import React from "react";
import { Tabs } from "antd";
import styles from "@/styles/page.module.scss";
import '@/styles/globals.scss'
import Navbar from "@/components/Navbar/Navbar";
import SectionTarget from "@/components/SectionTarget/SectionTarget";
import Service from "@/components/Service/Service";
import SearchInput from "@/components/SearchInput/SearchInput";
import SectionInfo from "@/components/SectionInfo/SectionInfo";
import B2BSection from "@/components/B2BSection/B2BSection";

export default function Home() {

  return (
    <main className={styles.main}>
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
        <Service />
      </div>
      <SectionInfo
        title="HANDMADE CARPETS DELICATE CLEANING"
        text="Silk carpets could be easily damaged by washing machine so it should be cleaned by special delicated hand or chemical cleaning. "
        buttonTitle="Learn more"
        imageUrl="https://i.imgur.com/x3QRtc0.jpeg"
        style={{ height: 430, marginTop: 149 }}
      />

      <div className={styles.b2b_section}>
        <B2BSection />
      </div>


    </main>
  );
}
