import { Header } from "@/common/components/Header";
import { Banner } from "../components/Banner";
import { CardSection } from "../components/CardSection";
import { MainCardSection } from "../components/MainCardSection";
import { useDetailView } from "./useDetailView";

export const DetailView = () => {
  const { result } = useDetailView();
  return (
    <div>
      <Header />
      <main>
        <Banner props={result.banner} />
        <MainCardSection props={result.main} />
        <CardSection props={result.contents} />
      </main>
    </div>
  );
};
