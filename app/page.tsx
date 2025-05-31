import AiAgentAction from "./components/widgets/AiAgentAction";
import BrandSection from "./components/widgets/BrandSection";
import Comparision from "./components/widgets/Comparison";
import Faqs from "./components/widgets/Faqs";
import Features from "./components/widgets/Features";
import GetStarted from "./components/widgets/GetStarted";
import Hero from "./components/widgets/Hero";
import Industry from "./components/widgets/Industry";
import Integrations from "./components/widgets/Integrations";
import TestCall from "./components/widgets/TestCall";
import Testomonial from "./components/widgets/Testomonial";

const Home = () => {
  return (
    <>
      <Hero />
      <BrandSection />
      <TestCall />
      <Features />
      <Industry />
      <AiAgentAction />
      <GetStarted />
      <Comparision />
      <Integrations />
      <Testomonial />
      <Faqs />
    </>
  );
};

export default Home;
