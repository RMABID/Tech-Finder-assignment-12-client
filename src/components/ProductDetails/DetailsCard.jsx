import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { GoReport } from "react-icons/go";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";

const DetailsCard = ({ product, setRating, handleReview, refetch }) => {
  const axiosPublic = useAxiosPublic();
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };
  const {
    product_image,
    product_name,
    external_links,
    description,
    tag,
    vote,
    _id,
  } = product;

  const handleReport = async () => {
    const newReport = {
      post_id: _id,
      product_name,
    };
    try {
      const { data } = await axiosPublic.post("/reports", newReport);
      if (data.insertedId) {
        toast.success("Report send");
        refetch();
      } else {
        toast.error(data);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleVote = async () => {
    try {
      await axiosPublic.patch(`/featured/product/${_id}`);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="md:flex  gap-2">
      <div className="flex  justify-between md:w-8/12 border ">
        <div className="flex flex-col">
          <div className="flex md:gap-8 gap-3">
            <img className="w-40" src={product_image} alt={product_name} />
            <div>
              <h3 className="text-xl mt-3 font-bold">{product_name}</h3>

              <div className="flex  items-center gap-x-3">
                {tag?.map((item, index) => (
                  <Link key={index} className="underline">
                    {item.text}
                  </Link>
                ))}
              </div>
              <div className="flex my-14 md:gap-8">
                <Link to={external_links} className="btn">
                  <FaExternalLinkAlt />
                  Visit
                </Link>
                <button onClick={handleVote} className="btn">
                  Upvote {vote}
                </button>
              </div>
            </div>
          </div>
          <p>{description}</p>
        </div>
        <div className="">
          <button
            onClick={handleReport}
            className="btn -mt-52 text-xl text-red-500"
          >
            <GoReport />
          </button>
        </div>
      </div>
      <div className="md:w-4/12 border p-2">
        <form onSubmit={handleReview} className="flex flex-col gap-y-5">
          <textarea
            name="review"
            rows={6}
            required
            className="textarea w-full textarea-bordered"
            placeholder="Review Description"
          ></textarea>

          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />

          <button className="btn mt-5" type="submit">
            Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default DetailsCard;
