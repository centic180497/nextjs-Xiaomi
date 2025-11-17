"use client";
import { useRef, useEffect, useState, FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "../../styles/swiper.scss";
import Arrow from "../../../public/images/Arrow.webp";
import Prev from "../../../public/images/Prev.webp";
import Product1 from "../../../public/images/product1.webp";
import Product2 from "../../../public/images/product2.webp";
import Product3 from "../../../public/images/product3.webp";
import Product4 from "../../../public/images/product4.webp";
import Product5 from "../../../public/images/product5.webp";
import Slider from '../slider'
interface ProductSlider { }
const ProductSlider: FC<ProductSlider> = ({ }) => {
    const prevRef = useRef<HTMLDivElement>(null);
    const nextRef = useRef<HTMLDivElement>(null);

    return (
        <div className={"top-products-wrapper container"}>
            <div className="top-products-header">
                <h2 className="top-products-title">TOP PRODUCTS</h2>
                <div className="top-products-nav">
                    <div ref={prevRef} className="swiper-button"> <Image src={Arrow} alt={`arrow`} width={30} height={30} /></div>
                    <div ref={nextRef} className="swiper-button"><Image src={Prev} alt={`prev`} width={30} height={30} /></div>
                </div>
            </div>
            <Slider
                dataProducts={[{ id: 1, src: Product1 }, { id: 2, src: Product2 }, { id: 3, src: Product3 }, { id: 4, src: Product4 }, { id: 5, src: Product5 }, { id: 6, src: Product1 }, { id: 1, src: Product1 }, { id: 2, src: Product2 }, { id: 3, src: Product3 }, { id: 4, src: Product4 }, { id: 5, src: Product5 }, { id: 6, src: Product1 }]}
                ref={{
                    nextRef: nextRef,
                    prevRef: prevRef
                }}
                displayImage={6}
                ratioClass="ratio-product"
            />
        </div>
    );
}
export default ProductSlider