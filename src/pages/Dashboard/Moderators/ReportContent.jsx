import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ReportTable from "../../../components/Dashboard/Tables/ReportTable";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const ReportContent = () => {
  const axiosSecure = useAxiosSecure();
  const { data: reports = [], refetch } = useQuery({
    queryKey: ["reports"],
    queryFn: async () => {
      const { data } = await axiosSecure("/reports");
      return data;
    },
  });

  const handleDeleteReport = async (id, post_id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your post has been deleted.",
            icon: "success",
          });
          axiosSecure.delete(`/product/delete/${post_id}`);
          refetch();
          axiosSecure.delete(`/report/${id}`);
          toast.success("Report post delete successfully");
          refetch();
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section>
      <div className="overflow-x-auto">
        <table className="table border">
          {/* head */}
          <thead className="h-16 text-[15px] ">
            <tr>
              <th>Name</th>
              <th>Detail</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text- ">
            {reports.map((item, index) => (
              <ReportTable
                key={index}
                item={item}
                handleDeleteReport={handleDeleteReport}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ReportContent;
