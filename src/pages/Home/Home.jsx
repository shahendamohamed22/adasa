import { useEffect } from "react";
import Categories from "./Categories";
import ChoosenArticles from "./ChoosenArticles";
import HeroSection from "./HeroSection";
import RecentArticles from "./RecentArticles";
import Subscripion from "./Subscripion";

export default function Home() {
   useEffect(() => {
    window.scrollTo({
      top:0 ,
      behavior: "smooth"
    })
  });
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
