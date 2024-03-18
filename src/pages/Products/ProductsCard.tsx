import { useDispatch } from "react-redux";
import Card from "@/components/Card/Card";
import { IProduct } from "@/interfaces/IProduct";
import { addProductToCart } from "@/redux/features/cart/cartSlice";

interface ProductCardProps {
  products: IProduct[];
}

const ProductCard = ({ products }: ProductCardProps) => {
  const dispatch = useDispatch();

  const addToBag = (product: IProduct) => {
    dispatch(addProductToCart(product));
  };

  return (
    <>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <Card
            key={product.id}
            product={product}
            onClick={() => addToBag(product)}
          />
        ))}
      </div>
    </>
  );
};

export default ProductCard;
