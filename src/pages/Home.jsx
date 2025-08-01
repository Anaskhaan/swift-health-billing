import { About } from "../components/Home/About";
import Hero from "../components/Home/Hero";
import Service2 from "../components/Home/Service2";
import Services from "../components/Home/Services";
import { WhyHire } from "../components/Home/WhyHire";

export const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Service2 />
      <WhyHire />
    </div>
  );
};
