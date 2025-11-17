"use client";
import { useRef, useEffect, useState, FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "../../styles/silder.scss";
interface ProductSlider {
    dataProducts: { id: number, src: StaticImageData }[],
    ratioClass?: string;
    type?: "black" | "top",
    ref?: {
        prevRef?: React.RefObject<HTMLDivElement | null>,
        nextRef?: React.RefObject<HTMLDivElement | null>,
    },
    displayImage?: number
}
const Slider: FC<ProductSlider> = ({ dataProducts, type, ref, displayImage, ratioClass }) => {
    const [swiper, setSwiper] = useState<any>(null);

    useEffect(() => {
        if (!swiper) return;
        const prev = ref?.prevRef?.current;
        const next = ref?.nextRef?.current;

        if (!prev || !next) return;

        swiper.params.navigation.prevEl = prev;
        swiper.params.navigation.nextEl = next;

        swiper.navigation.destroy();
        swiper.navigation.init();
        swiper.navigation.update();
    }, [swiper, ref?.prevRef?.current, ref?.nextRef?.current]);
    return (
        <div className="slider-container">
            <Swiper
                modules={[Navigation]}
                // navigation={{
                //     prevEl: ref?.prevRef?.current,
                //     nextEl: ref?.nextRef?.current,
                // }}
                spaceBetween={10}
                navigation={{}}
                slidesPerView={displayImage || 1}
                onBeforeInit={(swiper: any) => {
                    swiper.params.navigation = {
                        ...swiper.params.navigation,
                        prevEl: ref?.prevRef?.current,
                        nextEl: ref?.nextRef?.current,
                    };
                }}
                onSwiper={(instance) => setSwiper(instance)}
                breakpoints={{
                    // 1024: { slidesPerView: 4 },
                    // 768: { slidesPerView: 4 },
                    // 480: { slidesPerView: 4 },
                    // 390: { slidesPerView: 4 },
                }}
                className={"top-products-slider"}
            >
                {dataProducts.map((item, index) => (
                    <SwiperSlide key={index} className={`top-products-slide ${ratioClass}`}>
                        <div className="image-wrapper">
                            <Image
                                src={item.src}
                                fill
                                // style={{ objectFit: "cover" }}
                                alt={`product-${index}`}
                                // height={type === "black" ? 240 : 245}
                                sizes="100vw" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );

}
export default Slider