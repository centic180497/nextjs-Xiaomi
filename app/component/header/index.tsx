"use client";
import Image from "next/image";
import "../../styles/header.scss";
import Logo from '../../../public/images/logo.webp'
import Imgxiaomi from '../../../public/images/xiaomi.webp'
import ImgmenuMobile from '../../../public/images/menumobile.webp'
import ImgmenuClose from '../../../public/images/close.webp'
import { usePathname } from "next/navigation";
import Button from '../button'
import { useState } from "react";
export default function Header() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    return (
        <header className="header container">
            <div className="header-inner">
                <div className="left">
                    <div className="menu-mobile">
                        <Image src={open ? ImgmenuClose : ImgmenuMobile} alt="Xiaomi Logo" height={19} onClick={() => setOpen(!open)} />
                    </div>
                    <div className="logo-mobile">
                        <Image src={Imgxiaomi} alt="Xiaomi Logo" width={38} height={40} />
                    </div>
                    <div className="logo">
                        <Image src={Logo} alt="Xiaomi Logo" width={120} height={40} />
                    </div>
                    <nav className="nav">
                        <a href="/" className={pathname === "/" ? "active setAtive" : ""}>Home</a>
                        <a href="#">Product</a>
                        <a href="#">contact</a>
                        <a href="#">price</a>
                    </nav>
                </div>
                <div className="actions">
                    <Button children="SIGN UP" />
                    <Button children="LOG IN" type="Secondary" />
                    <select className="select-eng">
                        <option value={"eng"}>ENG</option>
                    </select>
                </div>
            </div>
            <div className={`mobileMenu ${open ? "open" : ""}`}>
                <ul>
                    <li className={pathname === "/" ? "activebg" : ""}><a href="/" className={pathname === "/" ? "active activebg" : ""}>HOME</a></li>
                    <li><a href="#">PRODUCT</a></li>
                    <li><a href="#">CONTACT</a></li>
                    <li><a href="#">PRICE</a></li>
                </ul>
            </div>
        </header>
    );
}