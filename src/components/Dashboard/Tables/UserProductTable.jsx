import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const UserProductTable = ({ item, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const { product_name, _id, status, vote } = item;

  const handleDeletePost = async () => {
    try {
      Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your post has been deleted.",
            icon: "success",
          });
          await axiosSecure.delete(`/product/delete/${_id}`);
          toast.success("Post delete successfully");
          refetch();
        }
      });
    } catch (error) {
      toast.error(error);
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
          <Link
            to={`/dashboard/my-product/${_id}`}
            className="btn text-lg btn-ghost hover:bg-lime-400 "
          >
            <FiEdit />
          </Link>
          <button
            onClick={handleDeletePost}
            className="btn text-red-500 hover:bg-red-500 hover:text-white text-lg btn-ghost "
          >
            <FaRegTrashAlt />
          </button>
        </div>
      </th>
    </tr>
  );
};

export default UserProductTable;
