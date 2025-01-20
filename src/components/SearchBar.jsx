import { CiSearch } from "react-icons/ci";
import { FiRefreshCcw } from "react-icons/fi";

const SearchBar = ({ setSearch, handleRefetch }) => {
  return (
    <div className="text-black flex items-center text-center">
      <div className="inline-flex lg:w-3/12 md:w-4/12 w-10/12  items-center mt-6 justify-center border border-primary px-5 my-5 mx-3 rounded-full  sm:h-1/2">
        <input
          onBlur={(event) => setSearch(event.target.value)}
          className="flex-1 p-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search Product"
          name=""
          id=""
        />
        <div className="inline w-3 text-xl pr-5 cursor-pointer">
          <CiSearch />
        </div>
      </div>
      <div>
        <button onClick={handleRefetch} className="btn bg-lime-300 text-xl">
          <FiRefreshCcw />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
