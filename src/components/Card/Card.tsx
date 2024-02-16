import React from "react";
import { IProducts } from "../../types/IProduct";
interface CardProps {
  products: IProducts;
}

const Card: React.FC<CardProps> = ({ products }) => {
  return (
    <>
      {products.products.map((product) => (
        <div
          key={product.id}
          className="card glass w-96 m-6 bg-base-100 shadow-xl indicator"
        >
          <span className="indicator-item badge badge-primary">new</span>

          <div className="carousel rounded-box w-full">
            {product.images.map((image, index) => (
              <div
                key={index}
                id={`item${index + 1}`}
                className="carousel-item w-full"
              >
                <img src={image} className="w-full h-24 object-contain" />
              </div>
            ))}
          </div>
          {/* <div className="flex justify-center w-full py-2 gap-2">
            {product.images.map((_, index) => (
              <a key={index} href={`#item${index + 1}`} className="btn btn-xs">
                <div className="badge badge-primary badge-xs"></div>
              </a>
            ))}
          </div> */}
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
