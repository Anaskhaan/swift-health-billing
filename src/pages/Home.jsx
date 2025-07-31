import { About } from "../components/Home/About";
import Hero from "../components/Home/Hero";
import Service2 from "../components/Home/Service2";
import Services from "../components/Home/Services";

export const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Service2 />
    </div>
  );
};
