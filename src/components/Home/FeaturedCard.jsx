import { FaExternalLinkAlt } from "react-icons/fa";
import { MdOutlineHowToVote } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../Shared/Button";

const FeaturedCard = ({ item, handleVote }) => {
  const {
    product_name,
    product_image,
    tag,
    vote,
    _id,
    external_links,
    owner_info,
  } = item;

  return (
    <section className="flex border-b gap-3 justify-between group hover:rounded-2xl hover:bg-gray-300  border-gray-700 p-2">
      <Link to={`/product-details/${_id}`} className="flex gap-x-3">
        <img
          className="w-20 h-20 rounded-xl object-cover"
          src={product_image}
          alt={product_name}
        />
        <div>
          <Link
            to={external_links}
            className="text-xl flex gap-x-1 group-hover:text-red-400 group-hover:underline font-bold"
          >
            {product_name}{" "}
            <span className="hidden group-hover:flex">
              <FaExternalLinkAlt />
            </span>{" "}
          </Link>
          <div className="flex gap-x-3">
            {tag?.map((item, index) => (
              <Link key={index} className="underline">
                {item?.text}
              </Link>
            ))}
          </div>
        </div>
      </Link>
      <div className="flex justify-end">
        <Button
          text={vote}
          small={true}
          icon={MdOutlineHowToVote}
          onClick={() => handleVote(_id, owner_info)}
          className="btn w-10 rounded-full flex justify-end"
        ></Button>
      </div>
    </section>
  );
};

export default FeaturedCard;
