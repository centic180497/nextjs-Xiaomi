"use client";
import "../../styles/bestsellingproduct.scss";
import Image from "next/image";
import oder1 from '../../../public/images/order1.webp'
import oder2 from '../../../public/images/order2.webp'
import oder3 from '../../../public/images/order3.webp'
import oder4 from '../../../public/images/order4.webp'

export default function BestSellingProducts() {
    const products = [
        { id: 1, rank: '1', name: 'Xiaomi Max 24', sales: '1,424,042', price: '$1,700,000', image: oder1 },
        { id: 2, rank: '2', name: 'Xiaomi Max 22', sales: '1,424,042', price: '$1,600,000', image: oder2 },
        { id: 3, rank: '3', name: 'Xiaomi Max 20', sales: '1,200,034', price: '$1,500,000', image: oder3 },
        { id: 4, rank: '4', name: 'Xiaomi Max 26', sales: '1,000,500', price: '$1,800,000', image: '' },
        { id: 5, rank: '5', name: 'Xiaomi Max 18', sales: '900,020', price: '$1,200,000', image: "" }
    ];

    return (
        <section className="bestSellingSection container">
            <div className="top-selling-products">
                <h2 className="sectionTitle">Top Best-Selling Products</h2>
            </div>
            <div className="table-wrapper">
                <table className="best-selling-table">
                    <thead>
                        <tr className="table-header">
                            <th className="no-column">No.</th>
                            <th className="no-column">Products</th>
                            <th className="right-column">Quantity</th>
                            <th className="right-column">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(a => {
                            return <tr className="padding" key={a.id}>
                                <td className="no-column">{a.image ? <Image src={a.image} alt="" width={40} height={40} /> : <div className="No">{a.id}</div>}</td>
                                <td className="product-column">{a.name}</td>
                                <td className="right-column">{a.sales}</td>
                                <td className="right-column"><span className="price-tag">{a.price}</span></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    );
}