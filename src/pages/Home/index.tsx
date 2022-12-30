import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import SliderComponent from "../../components/SliderComponent";
import { Footer } from "../Footer";
import { Sobre } from "../Sobre";

export function Home() {
  return (
    <div className="container mx-auto text-lg font-bold  ">
      <Header />
      <Main />
      <Sobre />
      <SliderComponent />
      <Footer />
    </div>
  );
}
