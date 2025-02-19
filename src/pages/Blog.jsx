const Blog = () => {
  const blogVideo = [
    {
      video: "https://www.youtube.com/embed/aegYfHTp4xo?si=v2v2l6E_YGeofNGU",
    },
    {
      video: "https://www.youtube.com/embed/gLaZxZ10x1o?si=OFz_Ji8c0STFgwYy",
    },
    {
      video: "https://www.youtube.com/embed/YEsmfenLhRQ?si=8fVgHe1KxCAYORWM",
    },
    {
      video: "https://www.youtube.com/embed/IeUZmBVPmDg?si=x7206kp8z7sGDwLJ",
    },
  ];
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-center my-6 text-3xl font-medium ">
        Welcome Tech Finder Blog Section
      </h1>
      <div className="grid grid-cols-2 my-24 gap-8">
        {blogVideo?.map((item) => (
          <iframe
            className="rounded-lg w-full shadow-lg"
            height="315"
            src={item?.video}
            title="Learn the Alphabet"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ))}
      </div>
    </div>
  );
};

export default Blog;
