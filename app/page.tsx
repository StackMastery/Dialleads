import BrandSection from "./components/widgets/BrandSection";
import Features from "./components/widgets/Features";
import Hero from "./components/widgets/Hero";
import Industry from "./components/widgets/Industry";
import TestCall from "./components/widgets/TestCall";

const Home = () => {
  return (
    <>
      <Hero />
      <BrandSection />
      <TestCall />
      <Features />
      <Industry />
    </>
  );
};

export default Home;
