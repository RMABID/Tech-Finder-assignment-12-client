import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

const UserProductTable = ({ item }) => {
  const { product_image, product_name, _id, status, vote } = item;
  return (
    <tr>
      <td>{product_name}</td>
      <td>{vote}</td>
      <td
        className={`${
          status && status === "Accepted" ? "text-green-400" : "text-red-600"
        }`}
      >
        {status}
      </td>
      <th>
        <div className="flex items-center justify-center">
          <button className="btn btn-ghost ">
            <FiEdit />
          </button>
          <button className="btn btn-ghost ">
            <FaRegTrashAlt />
          </button>
        </div>
      </th>
    </tr>
  );
};

export default UserProductTable;
