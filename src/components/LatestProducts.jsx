import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import useFetchProducts from "../hooks/FetchProducts";
import { Link } from "react-router-dom";

const LatestProducts = () => {
  const { products, loading, error } = useFetchProducts();
  const latestProducts = products.slice(-5).reverse();

  return (
    <div className="latest-products-container">
      <h2 className="latest-products-title">Nyheter</h2>

      {error && <p className="text-center text-red-500">{error}</p>}
      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : (
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}
          pagination={false}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
          }}
        >
          {latestProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="latest-product-card">
                <Link to={`/products/${product.id}`}>
                  <img src={product.image} alt={product.title} className="product-image" />
                </Link>
                <div className="product-info">
                  <Link to={`/products/${product.id}`}>
                    <h3 className="product-title">{product.title}</h3>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default LatestProducts;
