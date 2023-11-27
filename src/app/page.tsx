import FeaturesPage from "@/components/FeaturesPage";
import LandingPage from "@/components/LandingPage";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import StepsPage from "@/components/StepsPage";
import SuccessStories from "@/components/SuccessStories";
import NewsLetter from "@/components/NewsLetter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <LandingPage />
      <FeaturesPage />
      <StepsPage />
      <SuccessStories />
      <NewsLetter />
      <Footer />
    </MaxWidthWrapper>
  );
}
