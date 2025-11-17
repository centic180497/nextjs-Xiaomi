import Image from "next/image";
import "./styles/home.scss"
import PromoModal from "./component/modal"
import Header from "./component/header"
import Slider from "./component/xiaomitv"
import BestSellingProduct from "./component/best-selling"
import TopProductsSlider from "./component/swiper"
import BlackFriday from "./component/black-friday"
import Footer from "./component/footer"
export default function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <BestSellingProduct />
      <TopProductsSlider />
      <BlackFriday />
      <Footer />
      <PromoModal />
    </div>
  );
}
