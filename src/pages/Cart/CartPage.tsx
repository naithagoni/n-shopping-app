import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/cartStore";
import { removeProductFromCart } from "../../redux/features/cart/cartSlice";

const CartPage = () => {
  const products = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const removeProduct = (id: number) => {
    dispatch(removeProductFromCart(id));
  };

  return (
    <>
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle hover:bg-transparent shadow-2xl"
      >
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          <span className="badge badge-sm badge-accent indicator-item">
            {products.length}
          </span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="fixed mt-3 z-[1] card dropdown-content bg-base-100 shadow-xl w-screen max-w-md"
      >
        <div className="card-body px-6 py-6">
          <div className="overflow-y-auto ">
            <div className="flex items-start justify-between">
              <h2 className="font-bold text-lg">Shopping cart</h2>
            </div>
            <div className="mt-8">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-300">
                  {products.map((product) => (
                    <li key={product.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-300">
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

                          <div className="flex mr-1">
                            <select
                              className="select select-bordered rounded-md select-sm w-full max-w-xs"
                              defaultValue="1"
                            >
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                            </select>
                          </div>
                        </div>
                        <div className="flex flex-row self-start mt-1 text-sm text-gray-500">
                          <p className="pr-2">Black</p>
                          <p className="pl-2 border-l border-gray-400">Small</p>
                        </div>
                        <div className="text-base font-medium">
                          <p>€{product.discountPercentage}</p>
                        </div>

                        <div className="flex flex-1 items-end justify-between text-sm mt-4">
                          <p className="text-gray-500">Qty: 1</p>
                          <div className="flex">
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                              onClick={() => removeProduct(product.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-300 px-6 py-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <div>
                <p>€{products.length ? 262.0 : 0.0}</p>
              </div>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="btn btn-primary flex items-center justify-center rounded-md border border-transparent px-6 py-3 text-base font-medium shadow-sm"
              >
                Checkout
              </a>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                or{" "}
                <button type="button" className="font-medium text-info">
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
