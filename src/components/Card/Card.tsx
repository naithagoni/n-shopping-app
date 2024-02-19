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
      {products.products.map((product) => (
        <div
          key={product.id}
          className="card glass w-96 m-6 bg-base-100 shadow-xl indicator"
        >
          <span className="indicator-item badge badge-primary">new</span>
          <div className="carousel rounded-box w-full">
            {product.images.map((image, imageIndex) => {
              const id = `${product.id}-${imageIndex + 1}`;
              const activeIndex = activeIndexes[id] || 0;

              return (
                <div
                  key={imageIndex}
                  id={id}
                  className={`carousel-item w-full ${
                    imageIndex === activeIndex ? "active" : ""
                  }`}
                >
                  <img
                    src={image}
                    className="w-full aspect-square object-contain mix-blend-multiply"
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
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
