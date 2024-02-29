import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="px-16 py-16">
      <div className="mockup-browser border bg-base-300">
        <div className="mockup-browser-toolbar">
          <Link className="ml-2" to="/">Home</Link>
          <div className="input">https://n-shop.com</div>
        </div>
        <div className="flex justify-center px-4 py-16 bg-base-200">
          404 Not Found!
        </div>
      </div>
    </div>
  );
};

export default NotFound;
