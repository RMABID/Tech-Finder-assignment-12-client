import { useState } from "react";
import AddProductForm from "../../../components/Form/AddProductForm";
import imageUpload from "../../../api/utils";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AddProduct = () => {
  const { user } = useAuth();
  const [tags, setTags] = useState([]);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  // const result = tags.map((item) => item.text);

  // console.log({result});

  const handleAddProduct = async (event) => {
    event.preventDefault();
    const form = event.target;
    const product_name = form.product_name.value;
    const external_links = form.external_links.value;
    const description = form.description.value;
    const image = form.image.files[0];
    const product_image = await imageUpload(image);

    const newProduct = {
      product_name,
      product_image,
      external_links,
      description,
      tag: tags,
      vote: parseInt(0),
      status: "Pending",
      featured: "Pending",
      owner_info: {
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
      },
    };
    // console.table(newProduct);
    try {
      const { data } = await axiosPublic.post("/products", {
        newProduct,
        email: user?.email,
      });

      if (data?.insertedId) {
        toast.success("Product Successfully Added");
      } else {
        toast.error(data);
      }
      // navigate("/dashboard/my-product");
    } catch (error) {
      // console.log(error.response.data);
      toast.error(error.message);
    }
  };
  // className="w-full py-96" style={{ backgroundImage: `url(${bg})` }}
  return (
    <div className="flex justify-center items-center ">
      <AddProductForm
        tags={tags}
        setTags={setTags}
        handleAddProduct={handleAddProduct}
      />
    </div>
  );
};

export default AddProduct;
