import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addProductToCart } from "@redux/features/cart/cartSlice";
import { IProducts, IProduct } from "@/interfaces/IProduct";
import Button from "../Button/Button";

interface CardProps {
  products: IProducts;
}

const Card: React.FC<CardProps> = ({ products }) => {
  const [activeIndexes, setActiveIndexes] = useState<{ [key: string]: number }>(
    {}
  );
  const dispatch = useDispatch();

  const handleIndicatorClick = (id: string, index: number) => {
    setActiveIndexes(() => ({ [id]: index }));
  };

  const addToBag = (product: IProduct) => {
    dispatch(addProductToCart(product));
  };

  return (
    <>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.products.map((product) => (
          <div
            key={product.id}
            className="card glass bg-base-100 shadow-xl indicator w-auto"
          >
            <Button
              classes="btn btn-ghost indicator-item translate-x-0 translate-y-0 hover:bg-transparent"
              hasIcon={true}
            />
            {/* <span className="indicator-item badge badge-secondary">new</span> */}
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
            <div className="card-body justify-between">
              <h4 className="text-sm font-normal">{product.brand}</h4>
              <h2 className="card-title font-title">{product.title}</h2>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-normal">
                  <sup className="font-normal">€</sup>
                  <span className="text-2xl font-semibold">
                    {product.discountPercentage.toString().includes(".")
                      ? product.discountPercentage.toString().split(".")[0]
                      : product.discountPercentage}
                  </span>
                  <sup className="text-md font-normal">
                    {product.discountPercentage.toString().includes(".")
                      ? product.discountPercentage.toString().split(".")[1]
                      : ""}
                  </sup>
                </h3>
                <span className="text-xs font-normal">
                  Avlb: {product.stock}
                </span>
              </div>
              <div className="card-actions">
                <Button
                  title="Add to bag"
                  classes="btn btn-primary w-full rounded-md"
                  onClick={() => addToBag(product)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
