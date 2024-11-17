import Header from "@/app/components/header";
import Hero from "@/app/components/hero";
import Info from "@/app/components/info";
import Footer from "@/app/components/footer";
import Faq from "@/app/components/faq";
import About from "@/app/components/about";
import Image from "next/image";
import upperImage from "../app/images/bg/hero-min.png";

export default function Home() {
  return (
    <div className="main-page">
      <div className="main-page__upper">
        <div className="main-page__bg">
          <Image src={upperImage} alt={"Bg"} />
        </div>

        <Header />
        <Hero />
      </div>

      <About />
      <Info
        position={"right"}
      />
      <Info
        position={"left"}
      />
      <Info
        position={"right"}
      />

      <Faq />

      <Footer />
    </div>
  );
}
