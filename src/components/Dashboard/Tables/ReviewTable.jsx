import { FaRegTrashAlt } from "react-icons/fa";
import { FcViewDetails } from "react-icons/fc";
import { FiEdit } from "react-icons/fi";
import { IoMdCheckmark } from "react-icons/io";

const ReviewTable = ({ item, handleAcceptPost }) => {
  const { status, product_name, _id } = item;
  return (
    <tr>
      <td>{product_name}</td>
      <td>
        <button className="btn">
          <FcViewDetails />
        </button>
      </td>
      <td>
        <button className="btn">
          <IoMdCheckmark />
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
