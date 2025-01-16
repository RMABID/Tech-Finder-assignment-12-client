import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const UserProductTable = ({ item, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const { product_name, _id, status, vote } = item;
  const handleDeletePost = async () => {
    console.log(_id);
    try {
      await axiosSecure.delete(`/product/delete/${_id}`);
      toast.success("Post delete successfully");
      refetch();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <tr>
      <td>{product_name}</td>
      <td>{vote}</td>
      <td
        className={`${
          status && status === "Accepted" ? "text-green-400" : "text-red-600"
        } ${status && status === "Pending" ? "text-purple-400" : ""}`}
      >
        {status}
      </td>
      <th>
        <div className="flex items-center justify-center">
          <button className="btn btn-ghost ">
            <FiEdit />
          </button>
          <button onClick={handleDeletePost} className="btn btn-ghost ">
            <FaRegTrashAlt />
          </button>
        </div>
      </th>
    </tr>
  );
};

export default UserProductTable;
