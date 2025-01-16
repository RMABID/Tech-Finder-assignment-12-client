import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import UpdateProductForm from "../../Form/UpdateProductForm";

const ProductUpdate = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { data: product = {} } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const { data } = await axiosSecure(`/product/${id}`);
      return data;
    },
  });

  return (
    <div>
      <UpdateProductForm product={product} />
    </div>
  );
};

export default ProductUpdate;
