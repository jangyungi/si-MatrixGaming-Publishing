import { Header } from "@/common/components/Header";
import { Banner } from "../components/Banner";
import { CardSection } from "../components/CardSection";
import { MainCardSection } from "../components/MainCardSection";

export const DetailView = () => {
  return (
    <div>
      <Header />
      <main>
        <Banner />
        <MainCardSection />
        <CardSection />
      </main>
    </div>
  );
};
