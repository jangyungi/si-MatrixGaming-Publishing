import { Footer } from "@/common/components/Footer";
import { Header } from "@/common/components/Header";
import Aos from "aos";
import { useEffect } from "react";
import { HomeSwiper } from "../components/HomeSwiper";
import { LatestNews } from "../components/LatestNews";
import { OnboardedGames } from "../components/OnboardedGames";
import { UpcomingGames } from "../components/UpcomingGames";

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
        <OnboardedGames />
        <UpcomingGames />
        <LatestNews />
        <Footer />
      </main>
    </div>
  );
};
