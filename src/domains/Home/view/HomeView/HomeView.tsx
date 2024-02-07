import { Footer } from "@/common/components/Footer";
import { Header } from "@/common/components/Header";
import Aos from "aos";
import { useEffect } from "react";
import { HomeSwiper } from "../components/HomeSwiper";
import { AboutUs } from "../components/AboutUs";
import { OnboardedGames } from "../components/OnboardedGames";
import { UpcomingGames } from "../components/UpcomingGames";
import { ContactUs } from "../components/ContactUs";

export const HomeView = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div>
      <Header />
      <main>
        <HomeSwiper />
        <AboutUs />
        <OnboardedGames />
        <UpcomingGames />
        <ContactUs />
        <Footer />
      </main>
    </div>
  );
};
