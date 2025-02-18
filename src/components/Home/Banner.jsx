import banner from "../../assets/product-hunter banner.jpg";
const Banner = () => {
  return (
    <div className="relative inset-0">
      <div
        className="md:h-[600px] h-[450px] flex justify-center bg-black items-center bg-cover bg-center bg-no-repeat opacity-955 w-full object-fill"
        style={{ backgroundImage: `url(${banner})` }}
      >
        
        <div className="text-white  text-center lg:w-4/12 md:w-8/12">
          <h1 className="md:text-5xl text-2xl font-bold ">
            Your Journey to Innovation Starts Here
          </h1>
          <p className="mt-4">
            You must use Appropriate, Beautiful & Meaningful background images,
            images, and meaningful texts to decorate this section.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
