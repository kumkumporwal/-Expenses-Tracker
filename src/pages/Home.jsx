import Head from "../components/hade";
import Card from "../components/card";
import ShortBox from "../components/shortbox";
import Searchbox from "../components/searchbox";
import TextPage from "../components/text";
import Blogpage from "../components/blogpage";
import CookbookSection from "../components/CookbookSection";
import AboutSection from "../components/AboutSection";
import FooterSection from "../components/FooterSection";

import SaladImage from "../img/hn1.png";
import SaladImage1 from "../img/hn2.png";
import SaladImage2 from "../img/hn3.png";
import SaladImage3 from "../img/hn4.png";

function Home() {
  const button = ["Quick And Easy", "Dinner", "Instant Pot", "Meal Prep"];

  return (
    <>
      <Head />
      <div className="d-flex justify-content-center align-items-center gap-4">
        <Card img={SaladImage} button={button[0]} />
        <Card img={SaladImage1} button={button[1]} />
        <Card img={SaladImage2} button={button[2]} />
        <Card img={SaladImage3} button={button[3]} />
      </div>
      <ShortBox />
      <Searchbox />
      <TextPage />
      <AboutSection />
      <CookbookSection />
      <FooterSection />
    </>
  );
}

export default Home;

