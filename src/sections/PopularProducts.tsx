import { PopularCard } from "../components";

import { products } from "../constants";

function PopularProducts() {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="">
        <h2 className="font-palanquin text-4xl font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="mt-8 font-montserrat text-slate-gray lg:max-w-lg">
          Experince top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product, index) => (
          <PopularCard
            imgURL={product.imgURL}
            name={product.name}
            price={product.price}
            rating={product.rating}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}

export default PopularProducts;
