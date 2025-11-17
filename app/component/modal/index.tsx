"use client";
import { useEffect, useState } from "react";
import "../../styles/modal.scss";
import Image from "next/image";

import imageSilde from "../../../public/images/SlideMobile.webp";
import imageClose from "../../../public/images/close.webp";

export default function PromoModal() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setOpen(true);
            document.body.style.overflow = "hidden";
        }, 150);

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    if (!open) return null;

    const handleClose = () => {
        setOpen(false);
        document.body.style.overflow = "auto";
    };

    return (
        <div className="promo-overlay">
            <div className="promo-modal">
                <button className="close-btn" onClick={handleClose}>
                    <Image src={imageClose} alt="close" />
                </button>
                <div className="image-box">
                    <Image
                        src={imageSilde}
                        alt="modal-product"
                        className="modal-image"
                        fill
                    />
                </div>
                <button className="btn-see-more">SEE MORE</button>

            </div>
        </div>
    );
}