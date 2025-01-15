// import { useQuery } from "@tanstack/react-query";
// import { useParams } from "react-router-dom";
// import useAxiosSecure from "../../hooks/useAxiosSecure";

// const ProductDetails = () => {
//   const axiosSecure = useAxiosSecure();
//   const { id } = useParams();
//   const { data: product = {} } = useQuery({
//     queryKey: ["product", id],
//     queryFn: async () => {
//       const { data } = await axiosSecure(`/product/${id}`);
//       return data;
//     },
//   });

//   console.log(product);
//   return <div>ProductDetails</div>;
// };

// export default ProductDetails;
