import { CiSearch } from "react-icons/ci";

const SearchBar = ({ setSearch }) => {
  return (
    <div className="text-primary  font-agu text-center">
      <div className="inline-flex w-6/12  items-center mt-6 justify-center border border-primary px-5 my-5 mx-3 rounded-full  sm:h-1/2">
        <input
          onChange={(event) => setSearch(event.target.value)}
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
    </div>
  );
};

export default SearchBar;
