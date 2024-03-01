import React, { useState } from "react";
import { IProducts } from "../../types/IProduct";

interface CardProps {
  products: IProducts;
}

const Card: React.FC<CardProps> = ({ products }) => {
  const [activeIndexes, setActiveIndexes] = useState<{ [key: string]: number }>(
    {}
  );

  const handleIndicatorClick = (id: string, index: number) => {
    setActiveIndexes(() => ({ [id]: index }));
  };

  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.products.map((product) => (
            <div key={product.id} className="card glass bg-base-100 shadow-xl">
              {/* <span className="indicator-item badge badge-primary">new</span> */}
              <div className="carousel rounded-box rounded-b-none w-full">
                {product.images.map((image, imageIndex) => {
                  const id = `${product.id}-${imageIndex + 1}`;
                  const activeIndex = activeIndexes[id] || 0;

                  return (
                    <div
                      key={imageIndex}
                      id={id}
                      className={`carousel-item aspect-h-1 aspect-w-1 w-full overflow-hidden bg-base-100 lg:aspect-none group-hover:opacity-75 lg:h-80 ${
                        imageIndex === activeIndex ? "active" : ""
                      }`}
                    >
                      <img
                        src={image}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        alt={`Image ${imageIndex + 1}`}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center w-full py-2 gap-2">
                {product.images.map((_, imageIndex) => {
                  const id = `${product.id}-${imageIndex + 1}`;
                  const activeIndex = activeIndexes[id];
                  const isActive = imageIndex === activeIndex;

                  return (
                    <a
                      key={imageIndex}
                      href={`#${id}`}
                      onClick={() => handleIndicatorClick(id, imageIndex)}
                      className={`btn btn-xs ${isActive ? "btn-primary" : ""}`}
                    >
                      {imageIndex + 1}
                    </a>
                  );
                })}
              </div>
              <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p className="font-title text-xs font-light">
                  {product.description}
                </p>
                <div className="flex justify-between">
                  <span className="font-title text-xl font-medium xl:text-xl">
                    €{product.discountPercentage}
                  </span>
                  <span className="font-title text-xs font-light">
                    Avlb: {product.stock}
                  </span>
                </div>
                <div className="card-actions">
                  <button className="btn btn-primary w-full">Add to bag</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
