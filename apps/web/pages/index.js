import HomeBanner from "../components/index/banner";
import NavigationBar from "../components/navigation-bar";
import WhoWeAreBanner from "../components/index/whoweare-banner";
import ProgramScroll from "../components/index/program-scroll";

export default function Home() {
  return (
    <div>
      <NavigationBar pageTitle="Kezdőlap" currentPage="kezdolap" />
      <HomeBanner />
      <ProgramScroll />
      <WhoWeAreBanner />
    </div>
  );
}
