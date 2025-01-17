import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useParams } from "react-router-dom";

const ReviewPost = () => {
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  const { data: reviews = [], refetch } = useQuery({
    queryKey: ["reviews", id],
    queryFn: async () => {
      const { data } = await axiosPublic(`/review/${id}`);

      return data;
    },
  });
  return (
    <div className="my-20">
      <div className="mx-auto max-w-2xl md:text-center">
        {reviews?.length === 0 ? (
          ""
        ) : (
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            What Our Reviews Are Saying
          </h2>
        )}
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          "@2.50": {
            slidesPerView: 4,
            spaceBetween: 80,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {reviews.map((item, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col gap-3 gap-y-6 sm:gap-y-8"
          >
            <li>
              <div className="relative rounded-2xl  p-4 shadow my-4 ">
                <div className="relative">
                  <p className="text-lg tracking-tight text-slate-900">
                    {item?.review}
                  </p>
                </div>
                <div className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                  <div>
                    <div className="font-display text-base text-slate-900">
                      {item?.review_user?.name}
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-full ">
                    <img
                      alt=""
                      className="h-14 w-14 object-cover"
                      src={item?.review_user?.image}
                    />
                  </div>
                </div>
              </div>
            </li>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewPost;
