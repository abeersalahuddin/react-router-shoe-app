import React from 'react'
import { useParams } from 'react-router-dom';

export const ProductDetails = () => {
    const shoes = {

        "Trovec Navy Blue Canvas Shoes With Polka Dots":{
        name:"Trovec Navy Blue Canvas Shoes With Polka Dots",
        img:
        "https://images.yaoota.com/O_G5185U6gMkfdhs47OlX1HRgIM=/trim/yaootaweb-production-ke/media/crawledproductimages/bf70bf2a62af92246e27c7a1abbef70159c88272.jpg"
        },
        
        "Ladies Sports Paltform Side Zippe Sneaker":{
        name:"Ladies Sports Paltform Side Zippe Sneaker", 
        img:
        "https://i.pinimg.com/originals/7d/e5/27/7de527dd303a6bf5613220254d9fc70d.jpg"
        },
        
        "Trendy Fashionable Lightweight Lace-Up Sneakers For Women":{
        name:"Trendy Fashionable Lightweight Lace-Up Sneakers For Women",
        img:
        "https://rukminim1.flixcart.com/image/714/857/jyrl4sw0/shoe/7/4/z/hello-pink-41-41-come-shoe-pink-original-imafe49vyfhkfqaj.jpeg?q=50"
        },
        "Womens Flat Canvas Snow Sneakers":{
        name:"Womens Flat Canvas Snow Sneakers",
        img:
        "https://i.pinimg.com/564x/d4/8a/68/d48a688bb93c29713ae8ea15fec17a4d.jpg"
        }
        };

        const {productID} = useParams();
        const product = shoes[productID];
        const {name, img} = product;
    return (
        <div>
            <h4>{name}</h4>
            <img src={img} alt={name} />
        </div>
    )
}
