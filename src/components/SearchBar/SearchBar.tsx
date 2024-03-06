const SearchBar = () => {
  return (
    <>
      {/* <div className="form-control flex-1 mr-2">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-full rounded-md"
          />
        </div> */}
      <div className="join flex-1 mr-2">
        <div className="w-full">
          <div>
            <input
              type="text"
              className="input input-bordered w-full rounded-md join-item"
              placeholder="Search"
            />
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
          <button className="btn rounded-md join-item">Search</button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
