import EmailSubscribtion from "../components/index/email-subsciption"
import HomeBanner from "../components/index/banner"
import NavigationBar from "../components/navigation-bar"
import WhoWeAreBanner from "../components/index/whoweare-banner"

export default function Home() {
  return (
    <div>
      <NavigationBar pageTitle='Kezdőlap' currentPage='kezdolap'/>
      <HomeBanner/>
      <WhoWeAreBanner/>
      <EmailSubscribtion/>
    </div>
  )
}
