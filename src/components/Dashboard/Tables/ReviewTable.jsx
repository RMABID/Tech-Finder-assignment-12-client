import { FaRegTrashAlt } from "react-icons/fa";
import { FcViewDetails } from "react-icons/fc";
import { IoMdCheckmark } from "react-icons/io";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const ReviewTable = ({ item, handleAcceptPost, handleAddFeatured }) => {
  const { status, product_name, _id, featured } = item;
  return (
    <tr>
      <td>{product_name}</td>
      <td>
        <Link to={`/product-details/${_id}`} className="btn text-xl">
          <FcViewDetails />
        </Link>
      </td>

      <td>
        <button onClick={() => handleAddFeatured(_id)} className="btn">
          {featured && featured === "Added" ? (
            <span className="text-green-600 text-xl">
              <IoCheckmarkDoneSharp />
            </span>
          ) : (
            <span>
              <IoMdCheckmark />
            </span>
          )}
        </button>
      </td>
      <th>
        <div className="flex items-center gap-x-2 justify-center">
          <button
            disabled={status === "Accepted"}
            onClick={() => handleAcceptPost(_id, "Accepted")}
            className="btn disabled:cursor-not-allowed btn-ghost bg-green-400 "
          >
            Accept
          </button>
          <button
            disabled={status === "Rejected"}
            onClick={() => handleAcceptPost(_id, "Rejected")}
            className="btn btn-ghost disabled:cursor-not-allowed text-white bg-red-500"
          >
            Reject
          </button>
        </div>
      </th>
    </tr>
  );
};

export default ReviewTable;
