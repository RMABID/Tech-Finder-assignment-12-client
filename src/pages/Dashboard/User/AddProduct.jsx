import { useState } from "react";
import AddProductForm from "../../../components/Form/AddProductForm";
import imageUpload from "../../../api/utils";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

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
      owner_info: {
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
      },
    };
    console.table(newProduct);
    try {
      await axiosSecure.post("/products", newProduct);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Add Product</h1>
      <AddProductForm
        tags={tags}
        setTags={setTags}
        handleAddProduct={handleAddProduct}
      />
    </div>
  );
};

export default AddProduct;
