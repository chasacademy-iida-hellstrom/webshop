import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import useFetchProducts from "../hooks/FetchProducts";

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
          spaceBetween={50}
          centeredSlides={true}
          slidesPerView={"auto"}
          navigation={true}
          pagination={false}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
          }}
        >
          {latestProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="latest-product-card">
                <img src={product.image} alt={product.title} />
                <h3 className="latest-product-title">{product.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default LatestProducts;
