import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@redux/store";
import {
  fetchFilteredProducts,
  selectFilteredProducts,
} from "@redux/features/products/filteredProductsSlice";
import { IProduct, IProducts } from "@/interfaces/IProduct";
import useDebounce from "@hooks/useDebounce";
import Button from "../Button/Button";

const SearchBar = () => {
  const dispatch: AppDispatch = useDispatch();
  const { filteredProducts }: { filteredProducts: IProducts } = useSelector(
    selectFilteredProducts
  );
  const [inputValue, setInputValue] = useState("");
  const debouncedSearch = useDebounce(inputValue);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    if (debouncedSearch.length) {
      dispatch(fetchFilteredProducts(debouncedSearch));
    }
  }, [debouncedSearch, dispatch]);

  return (
    <>
      <div className="join flex-1 mr-2">
        <div className="w-full">
          <div>
            <div className="dropdown block rounded-none">
              <input
                type="text"
                className="input input-bordered w-full rounded-md join-item"
                placeholder="Search"
                onChange={handleInputChange}
              />
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] p-2 shadow-2xl bg-base-100 rounded-bl-md rounded-br-md w-full max-w-md divide-y divide-gray-300"
              >
                {filteredProducts.products.length === 0 && (
                  <li className="px-4 py-2">Items not found!</li>
                )}

                {filteredProducts.products.length > 0 && (
                  <>
                    <div className="overflow-y-auto ">
                      <div>
                        <div className="flow-root">
                          {filteredProducts.products.map(
                            (product: IProduct) => (
                              <li key={product.id} className="flex px-4 py-2">
                                <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-300">
                                  <img
                                    src={product.thumbnail}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div className="flex flex-1 items-center justify-between text-base font-medium">
                                    <h3>
                                      <a href="#">{product.title}</a>
                                    </h3>
                                  </div>
                                </div>
                              </li>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
        <select
          className="select select-bordered join-item"
          defaultValue="Filter"
        >
          <option>Filter</option>
          <option>Sci-fi</option>
          <option>Drama</option>
          <option>Action</option>
        </select>
        <div>
          <Button title="Search" classes="btn rounded-md join-item" />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
