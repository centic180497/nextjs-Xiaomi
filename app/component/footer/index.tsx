"use client";
import Image from "next/image";
import "../../styles/footer.scss"
import LinkImg from '../../../public/images/link.webp'
import Img18 from '../../../public/images/18plus.webp'
import ImgSSl from '../../../public/images/ssl.webp'
import ImgVisa from '../../../public/images/visa.webp'
import Imgmaster from '../../../public/images/mastercard.webp'
import Imgastropay from '../../../public/images/astropay.webp'
import ImgInter from '../../../public/images/InteracLogo.webp'
import ImgJeton from '../../../public/images/jetonbank.webp'

export default function BlackFriday() {
    return (
        <footer className="footer">
            <div className="footer__top container">
                <div className="footer__col">
                    <h4>ABOUT US</h4>
                    <ul>
                        <li>Company Details</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Affiliate</li>
                    </ul>
                </div>

                <div className="footer__col">
                    <h4>HELP</h4>
                    <ul>
                        <li>F.A.Q (Frequently Asked Questions)</li>
                        <li>AML/KYC Policy</li>
                        <li>Refund Policy</li>
                        <li>Dispute Resolution</li>
                    </ul>
                </div>

                <div className="footer__col">
                    <h4>OUR PRODUCTS</h4>
                    <ul>
                        <li>Product</li>
                        <li>Contact</li>
                        <li>Price</li>
                        <li>Sales</li>
                    </ul>
                </div>

                <div className="footer__col">
                    <h4>CONTACT US</h4>
                    <ul>
                        <li>support@xiaomi.email</li>
                        <li>affiliate@xiaomi.com</li>
                    </ul>

                    <button className="footer__app-btn">
                        <Image src={LinkImg} alt="Link_download" width={120} height={40} />
                    </button>
                </div>
            </div>

            <div className="footer__note container">
                <div className="footer__secure">
                    <div className="img-secure">
                        <Image src={Img18} alt="18+" width={31} height={30} />
                        <Image src={ImgSSl} alt="secure" width={88} height={30} />
                    </div>
                    <p>
                        For designated models of Xiaomi smartphone, you can enjoy the warranty services for your device at designated Xiaomi.
                    </p>
                </div>
                <p className="footer__text">
                    Customers should provide a valid purchase proof and warranty card. After inspected by the Xiaomi authorizedservice center and confirmed that the smartphone meets the warranty conditions, you can enjoy the in-warranty service for free².Warranty determination rules are subjected to the local service center.
                </p>
                <div className="footer__input">
                    <p>© Copyright 2025. All Rights Reserved</p>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__payments">
                    <Image src={ImgVisa} alt="18+" height={24} />
                    <Image src={Imgmaster} alt="secure" height={24} />
                    <Image src={Imgastropay} alt="secure" height={24} />
                    <Image src={ImgInter} alt="secure" height={24} />
                    <Image src={ImgJeton} alt="secure" height={24} />
                </div>
            </div>
        </footer>
    );
}