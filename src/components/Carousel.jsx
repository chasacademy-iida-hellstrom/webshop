import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    console.log("Carousel loaded!");

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products?limit=5") // Hämtar 5 produkter
            .then(response => response.json())
            .then(data => {
                console.log("Fetched products:", data);
                setProducts(data);
            })
            .catch(error => console.error("Error fetching products:", error));
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="w-full max-w-4xl mx-auto">
            <Slider {...settings}>
                {products.length > 0 ? (
                    products.map(product => (
                        <div key={product.id} className="text-center">
                            <img src={product.image} alt={product.title} className="w-full h-64 object-contain mx-auto" />
                            <h3 className="mt-2 text-lg font-semibold">{product.title}</h3>
                        </div>
                    ))
                ) : (
                    <p className="text-center">Laddar produkter...</p>
                )}
            </Slider>
        </div>
    );
};

export default Carousel;