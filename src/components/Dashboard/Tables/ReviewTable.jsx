import { FaRegTrashAlt } from "react-icons/fa";
import { FcViewDetails } from "react-icons/fc";
import { FiEdit } from "react-icons/fi";
import { IoMdCheckmark } from "react-icons/io";

const ReviewTable = ({ item }) => {
  const { product_image, product_name, _id } = item;
  return (
    <tr>
      <td>{product_name}</td>
      <td><button className="btn"><FcViewDetails /></button></td>
      <td><button className="btn"><IoMdCheckmark /></button></td>
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

export default ReviewTable;
