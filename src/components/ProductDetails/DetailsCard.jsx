import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const DetailsCard = ({ product, setRating, handleReview }) => {
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };
  const {
    product_image,
    product_name,
    external_links,
    description,
    tags,
    vote,
  } = product;
  return (
    <div className="flex  gap-2">
      <div className="flex w-8/12 border flex-col">
        <div className="flex gap-8">
          <img className="w-40" src={product_image} alt={product_name} />
          <div>
            <h3 className="text-xl mt-3 font-bold">{product_name}</h3>
            <div className="flex items-center gap-x-3">
              {tags?.map((item, index) => (
                <Link key={index} className="underline">
                  {item.text}
                </Link>
              ))}
            </div>
            <div className="flex my-14 gap-8">
              <Link to={external_links} className="btn">
                <FaExternalLinkAlt />
                Visit
              </Link>
              <button className="btn">Upvote {vote}</button>
            </div>
          </div>
        </div>
        <p>{description}</p>
      </div>
      <div className="w-4/12 border p-2">
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
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DetailsCard;
