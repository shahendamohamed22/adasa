import Categories from "./Categories";
import ChoosenArticles from "./ChoosenArticles";
import HeroSection from "./HeroSection";
import RecentArticles from "./RecentArticles";
import Subscripion from "./Subscripion";

export default function Home() {
  return (
  <>
    <HeroSection />
    <ChoosenArticles />
    <Categories />
    <RecentArticles />
    <Subscripion />
  </>
  )
}
