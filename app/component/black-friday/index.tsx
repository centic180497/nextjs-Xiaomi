"use client";
import Image from "next/image";
import Slider from '../slider'
import "../../styles/black-friday.scss"
import BlackImage from '../../../public/images/blackfriday.webp'
import NewProductImg from "../../../public/images/newproduct.webp";
import SalesImg from "../../../public/images/sales.webp";
import Arrow from "../../../public/images/Arrow.webp";
import Prev from "../../../public/images/Prev.webp";
import { useRef } from "react";
export default function BlackFriday() {
    const prevRef = useRef<HTMLDivElement>(null);
    const nextRef = useRef<HTMLDivElement>(null);
    return (
        <div className="black-new-sale container">
            <section className="black-friday">
                <div className="top-products-header">
                    <h2 className="top-products-title">Black Friday</h2>
                    <div className="top-products-nav">
                        <div ref={prevRef} className="swiper-button"> <Image src={Arrow} alt={`arrow`} width={30} height={30} /></div>
                        <div ref={nextRef} className="swiper-button"><Image src={Prev} alt={`prev`} width={30} height={30} /></div>
                    </div>
                </div>
                <Slider displayImage={1} dataProducts={[{ id: 1, src: BlackImage }]} ratioClass="ratio-banner" />
            </section>
            <div className="wraper-product">
                <section className="new-products">
                    <h2 className="title-new-product">NEW PRODUCTS</h2>
                    <Image
                        src={NewProductImg}
                        style={{ objectFit: "cover" }}
                        alt={`new-product`}
                    />
                </section>
                <section className="sales">
                    <h2 className="title-sale-product">SALES</h2>
                    <Image
                        src={SalesImg}
                        style={{ objectFit: "cover" }}
                        alt={`new-product`}
                    />
                </section>
            </div>
        </div>
    );
}