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
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={1}
          navigation={true}
          pagination={false}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
          }}
        >
          {latestProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="latest-product-card text-center">
                <Link to={`/products/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-60 mx-auto rounded-md transition-transform duration-300 hover:scale-105"
                  />
                </Link>
                <Link to={`/products/${product.id}`}>
                  <h3 className="latest-product-title text-lg font-semibold mt-2 hover:text-blue-500">
                    {product.title}
                  </h3>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default LatestProducts;
