import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Stats } from "./components/Stats";
import { Pricing } from "./components/Pricing";
import { Hours } from "./components/Hours";
import { Trainers } from "./components/Trainers";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Services />
      <Stats />
      <Pricing />
      <Hours />
      <Trainers />
      <Contact />
      <Footer />
    </div>
  );
}