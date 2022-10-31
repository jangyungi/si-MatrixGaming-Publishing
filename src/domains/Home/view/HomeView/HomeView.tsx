import { Footer } from "@/common/components/Footer";
import { Header } from "@/common/components/Header";
import { HomeSwiper } from "../components/HomeSwiper";
import { LatestNews } from "../components/LatestNews";
import { OnboardedGames } from "../components/OnboardedGames";
import { UpcomingGames } from "../components/UpcomingGames";

export const HomeView = () => {
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
