import styles from "@/styles/page.module.scss";
import '@/styles/globals.scss'
import Navbar from "@/components/Navbar/Navbar";
import SectionTarget from "@/components/SectionTarget/SectionTarget";
import Service from "@/components/Service/Service";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="container">
        <Navbar />
      </div>
      <div className="section-target-container">
        <div className="section-target">
          <SectionTarget />
        </div>
      </div>
      <div className="container">
        <Service />
      </div>
    </main>
  );
}
