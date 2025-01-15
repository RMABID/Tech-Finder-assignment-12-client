import { useState } from "react";
import AddProductForm from "../../../components/Form/AddProductForm";
import imageUpload from "../../../api/utils";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import bg from "../../../assets/img/add product img.jpeg";

const AddProduct = () => {
  const { user } = useAuth();
  const [tags, setTags] = useState([]);
  const axiosSecure = useAxiosSecure();

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
      tags,
      vote: parseInt(0),
      owner_info: {
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
      },
    };
    // console.table(newProduct);
    try {
      await axiosSecure.post("/products", newProduct);
      toast.success("Product Successfully Added");
    } catch (error) {
      // console.log(error);
      toast.error(error.message);
    }
  };
  // className="w-full py-96" style={{ backgroundImage: `url(${bg})` }}
  return (
    <div className="flex justify-center items-center h-screen">
      <AddProductForm
        tags={tags}
        setTags={setTags}
        handleAddProduct={handleAddProduct}
      />
    </div>
  );
};

export default AddProduct;
