import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

const UserProductTable = ({ item }) => {
  const { product_image, product_name, _id, status } = item;
  return (
    <tr>
      <td>
        <div className="mask mask-squircle h-12 w-12">
          <img src={product_image} alt={product_name} />
        </div>
      </td>
      <td>{product_name}</td>
      <td>5</td>
      <td>{status}</td>
      <th>
        <div className="flex items-center justify-start">
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
