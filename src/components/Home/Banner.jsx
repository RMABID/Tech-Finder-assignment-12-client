import banner from "../../assets/product-hunter banner.jpg";
const Banner = () => {
  return (
    <div className="relative">
      <img className="md:h-[600px] w-full object-fill" src={banner} alt="" />
      <div className=" absolute top-44 ml-8 md:w-6/12 lg:w-5/12">
        <h1 className="text-5xl font-bold text-white">
          Your Journey to Innovation Starts Here
        </h1>
        <p className="text-white">
          You must use Appropriate, Beautiful & Meaningful background images,
          images, and meaningful texts to decorate this section.{" "}
        </p>
      </div>
    </div>
  );
};

export default Banner;
