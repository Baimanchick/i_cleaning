import React from "react";
import styles from "@/styles/page.module.scss";
import '@/styles/globals.scss'
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

      <div className={styles.video_series}>
        <VideoSeries />
      </div>

      <div className={styles.FAQSection}>
        <div className='container'>
          <hr style={{ marginBottom: 10 }} className={styles.FAQhr} />
          <FAQSection />
          <hr style={{ marginTop: 10 }} className={styles.FAQhr} />
        </div>
      </div>

    </main>
  );
}
