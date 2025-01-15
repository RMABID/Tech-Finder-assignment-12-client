import { FaExternalLinkAlt } from "react-icons/fa";
import { MdOutlineHowToVote } from "react-icons/md";
import { Link } from "react-router-dom";

const FeaturedCard = ({ item, handleVote }) => {
  const { product_name, product_image, tags, vote, _id } = item;
  console.log(vote);
  return (
    <section>
      <div className="flex gap-3 justify-between group hover:rounded-2xl hover:bg-gray-300 border-2 border-gray-700 p-2">
        <div className="flex gap-x-3">
          <img
            className="w-20 h-20 object-cover"
            src={product_image}
            alt={product_name}
          />
          <div>
            <Link className="text-xl flex gap-x-1 group-hover:text-red-400 group-hover:underline font-bold">
              {product_name}{" "}
              <span className="hidden group-hover:flex">
                <FaExternalLinkAlt />
              </span>{" "}
            </Link>
            <div className="flex gap-x-3">
              {tags.map((item, index) => (
                <Link key={index} className="underline">
                  {item?.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => handleVote(_id)}
            className="btn flex justify-end"
          >
            {vote} <MdOutlineHowToVote />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCard;
