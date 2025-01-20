import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import FeaturedCard from "../../components/Home/FeaturedCard";
import SearchBar from "../../components/SearchBar";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import LoadingSpinier from "../../components/Spiner/LoadingSpinier";
import No_Data_img from "../../assets/logo/No data-bro.png";
const AllProducts = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [itemPages, setItemPages] = useState(4);
  const [search, setSearch] = useState("");

  const { data: count = [] } = useQuery({
    queryKey: ["all-products", currentPage],
    queryFn: async () => {
      const { data } = await axiosPublic(`/all-product-count`);
      return data;
    },
  });

  const {
    data: all_products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all-products", search, currentPage],
    queryFn: async () => {
      const { data } = await axiosPublic(
        `/products?search=${search}&page=${currentPage}`
      );
      return data;
    },
  });

  console.log(all_products);

  const totalCount = count?.count || 0;
  const numberOfPage = Math.ceil(totalCount / itemPages);
  const pages = [...Array(numberOfPage).keys()];
  console.log(pages);

  if (isLoading) return <LoadingSpinier />;

  const handleVote = async (_id, owner_info) => {
    if (!user?.email) {
      return navigate("/login");
    }
    if (user?.email === owner_info.email) {
      return toast.error("You can't vote on your own product!");
    }
    try {
      await axiosPublic.patch(`/featured/product/${_id}`);
      refetch();
    } catch (error) {
      toast.error(error);
    }
  };

  const handlePrev = async (e) => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = async (e) => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleRefetch = async () => {
    setSearch("");
    setItemPages(4);
    setCurrentPage(0);
  };
  return (
    <section className="w-10/12 relative mx-auto">
      <SearchBar handleRefetch={handleRefetch} setSearch={setSearch} />
      {all_products && all_products?.length === 0 ? (
        <div className="flex justify-center">
          <img className="lg:w-[60%]" src={No_Data_img} alt="" />
        </div>
      ) : (
        <div>
          <div className="grid my-6 gap-8 lg:grid-cols-2">
            {all_products
              ?.filter((item) => item.status === "Accepted")
              .map((item, index) => (
                <FeaturedCard handleVote={handleVote} key={index} item={item} />
              ))}
          </div>

          <div className="join bottom-0">
            <button onClick={handlePrev} className="join-item btn">
              «
            </button>
            {pages.map((page, index) => (
              <button
                onClick={() => setCurrentPage(page)}
                className={`flex space-x-3 top-0 btn  ${
                  currentPage === page ? "selected" : ""
                }`}
                key={index}
              >
                {page}
              </button>
            ))}
            <button onClick={handleNext} className="join-item btn ">
              »
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default AllProducts;
