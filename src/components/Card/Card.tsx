const Card = () => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl indicator">
      <span className="indicator-item badge badge-primary">new</span>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          <div className="badge badge-primary badge-xs"></div>
        </a>
        <a href="#item2" className="btn btn-xs">
          <div className="badge badge-primary badge-xs"></div>
        </a>
        <a href="#item3" className="btn btn-xs">
          <div className="badge badge-primary badge-xs"></div>
        </a>
        <a href="#item4" className="btn btn-xs">
          <div className="badge badge-primary badge-xs"></div>
        </a>
      </div>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
