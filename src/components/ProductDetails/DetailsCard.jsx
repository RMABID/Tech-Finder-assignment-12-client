import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { GoReport } from "react-icons/go";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import Button from "../Shared/Button";

const DetailsCard = ({ product, setRating, handleReview, refetch }) => {
  const { user } = useAuth();
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
    owner_info,
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

  return (
    <div className="md:flex  gap-2">
      <div className="flex  justify-between md:w-8/12 ">
        <div className="flex flex-col">
          <div className="flex md:gap-8 gap-1">
            <img className="md:w-40 w-24" src={product_image} alt={product_name} />
            <div>
              <h3 className="text-xl mt-3 font-bold">{product_name}</h3>

              <div className="flex items-center gap-x-3">
                {tag?.map((item, index) => (
                  <Link key={index} className="underline">
                    {item.text}
                  </Link>
                ))}
              </div>
              <div className="flex mt-14  md:gap-8">
                <Link to={external_links}>
                  <Button small text={"Visit"} icon={FaExternalLinkAlt} />
                </Link>
                <Button small text={vote} onClick={handleVote} className="btn">
                  Upvote
                </Button>
              </div>
            </div>
          </div>
          <p className="px-2 py-2">{description}</p>
        </div>
        <div className="">
          <button
            title="Report this post"
            onClick={handleReport}
            className="btn -mt-50 text-xl text-red-500"
          >
            <GoReport />
          </button>
        </div>
      </div>
      <div className="md:w-4/12 lg:py-14 shadow border rounded-sm p-2">
        <form
          onSubmit={handleReview}
          className="flex flex-col justify-between gap-y-16"
        >
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
