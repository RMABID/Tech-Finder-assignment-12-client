import { FaRegTrashAlt } from "react-icons/fa";
import { FcViewDetails } from "react-icons/fc";
import { Link } from "react-router-dom";

const ReportTable = ({ item, handleDeleteReport }) => {
  const { product_name, post_id, _id } = item;
  return (
    <tr>
      <td>{product_name}</td>
      <td>
        <Link to={`/product-details/${post_id}`} className="btn btn-ghost text-xl">
          <FcViewDetails />
        </Link>
      </td>
      <td>
        <button
          onClick={() => handleDeleteReport(_id, post_id)}
          className="btn text-red-400 btn-ghost text-xl"
        >
          <FaRegTrashAlt />
        </button>
      </td>
    </tr>
  );
};

export default ReportTable;
