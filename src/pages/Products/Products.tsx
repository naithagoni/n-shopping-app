import Card from "../../components/Card/Card";
import useFetchProducts from "../../hooks/useFetchProducts";

const Products = () => {
  const { products } = useFetchProducts();
  console.log("Products 1: ", products);

  return (
    <>
      <Card />
    </>
  );
};

export default Products;
