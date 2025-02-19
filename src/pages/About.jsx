import about_img from "../assets/About-Page-768x403.png";

import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About - Historical Artifacts Tracker";
  }, []);
  return (
    <section className="py-14">
      <div className="flex justify-center">
        <img src={about_img} alt="" />
      </div>

      <div className="dark:text-white">
        <h1 className="text-4xl my-4 font-Garamond  mx-auto font-bold text-center">
          About Us
        </h1>
        <p className="text-lg font-light w-9/12 mx-auto">
          Welcome to Tech Finder, your ultimate companion for discovering,
          cataloging, and preserving historical treasures from around the world.
          Our platform is dedicated to connecting historians, collectors, and
          enthusiasts by providing a comprehensive system to track and document
          artifacts with precision and care. At Artifact Tracker, we believe
          that every artifact tells a story. Our mission is to empower users to
          explore and safeguard these stories by offering tools to record
          detailed information, including origin, condition, and historical
          significance. Whether you're a museum curator, a researcher, or a
          passionate collector, our platform simplifies the management and
          sharing of artifact data. Join us in our journey to preserve history
          for future generations. Together, we can keep the past alive and
          accessible to all.
        </p>
      </div>
    </section>
  );
};

export default About;
