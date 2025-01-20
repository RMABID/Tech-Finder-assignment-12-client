import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ReportTable from "../../../components/Dashboard/Tables/ReportTable";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import LoadingSpinier from "../../../components/Spiner/LoadingSpinier";

const ReportContent = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: reports = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["reports"],
    queryFn: async () => {
      const { data } = await axiosSecure("/reports");
      return data;
    },
  });

  if (isLoading) return <LoadingSpinier />;

  const handleDeleteReport = async (id, post_id) => {
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
          await axiosSecure.delete(`/product/delete/${post_id}`);
          refetch();
          await axiosSecure.delete(`/report/${id}`);
          toast.success("Report post delete successfully");
          refetch();
        }
      });
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <section>
      <div className="overflow-x-auto">
        {reports && reports.length === 0 ? (
          <p className="text-5xl text-center text-red-400 mt-16 ">No report Available</p>
        ) : (
          <table className="table border-lime-500 border">
            {/* head */}
            <thead className="h-16 bg-lime-300 text-[15px] ">
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
        )}
      </div>
    </section>
  );
};

export default ReportContent;
