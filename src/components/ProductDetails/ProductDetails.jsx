import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaExternalLinkAlt } from "react-icons/fa";
import DetailsCard from "./DetailsCard";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import ReviewPost from "./ReviewPost";
import toast from "react-hot-toast";
import LoadingSpinier from "../Spiner/LoadingSpinier";

const ProductDetails = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const [rating, setRating] = useState(0);

  const {
    data: product = {},
    refetch,
    isLoading,
    isPending,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const { data } = await axiosSecure(`/product/${id}`);
      return data;
    },
  });

  if (loading) return <LoadingSpinier />;
  if (isPending) return <LoadingSpinier />;
  if (isLoading) return <LoadingSpinier />;

  const handleReview = async (event) => {
    event.preventDefault();
    const form = event.target;
    const review = form.review.value;
    const newReview = {
      product_id: id,
      review,
      rating,
      review_user: {
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
      },
    };

    try {
      await axiosSecure.post("/review", newReview);
      toast.success("Your Commit Send");
      refetch();
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="w-10/12 shadow mx-auto my-14 border p-3">
      <DetailsCard
        handleReview={handleReview}
        setRating={setRating}
        product={product}
        refetch={refetch}
      />
      <ReviewPost />
    </div>
  );
};

export default ProductDetails;
