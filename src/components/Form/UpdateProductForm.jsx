import useAuth from "../../hooks/useAuth";
import { WithContext as ReactTags } from "react-tag-input";
import "../Form/tag.css";
import { useState } from "react";
import imageUpload from "../../api/utils";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const UpdateProductForm = ({ product }) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();
  const {
    product_name,
    product_image,
    external_links,
    description,
    tag,
    vote,
    status,
    _id,
  } = product;
  const [tags, setTags] = useState([]);
  //react input tag
  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };
  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };
  const handleDrag = (tag, currPos, newPos) => {
    const newTags = [...tags];
    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);
    setTags(newTags);
  };

  //updated
  const handleUpdate = async (event) => {
    event.preventDefault();
    const form = event.target;
    const product_name = form.product_name.value;
    const external_links = form.external_links.value;
    const description = form.description.value;
    const image = form.image.files[0];
    const product_image = await imageUpload(image);
    const updateProduct = {
      product_name,
      product_image,
      external_links,
      description,
      tag: tags,
      vote: vote,
      status: status,
      owner_info: {
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
      },
    };
    try {
      await axiosSecure.put(`/product/${_id}`, updateProduct);
      toast.success("Product Updated Successfully");
      navigate("/dashboard/my-product");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section>
      <form
        onSubmit={handleUpdate}
        className="grid grid-cols-1 font-Garamond md:grid-cols-2 font-raleway-font px-4 md:px-36 mt-8  gap-6"
      >
        <div>
          <label className="block text-lg font-medium mb-2">
            Product Name :
          </label>
          <input
            defaultValue={product_name && product_name}
            required
            type="text"
            name="product_name"
            placeholder="Enter your product name"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Owner Name :</label>
          <input
            required
            type="text"
            name="owner_name"
            defaultValue={user?.displayName}
            readOnly
            placeholder="Enter "
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">
            Owner Email :
          </label>
          <input
            required
            type="email"
            defaultValue={user?.email}
            readOnly
            name="owner_email"
            placeholder="Enter Your Email"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">
            External Links :
          </label>
          <input
            required
            type="url"
            defaultValue={external_links && external_links}
            name="external_links"
            placeholder="Enter Your External Links"
            className="input input-bordered w-full"
          />
        </div>

        {/* Historical Context */}
        <div className="md:col-span-2">
          <label className="block text-lg font-medium text-gray-700">
            Description :
          </label>
          <textarea
            rows={4}
            defaultValue={description && description}
            required
            placeholder="please add Description"
            name="description"
            className="w-full  mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>

        {/* tag */}
        <div className="">
          <label className="block text-lg font-medium mb-2">Tags input :</label>
          <ReactTags
            tags={tags}
            delimiters={delimiters}
            handleDelete={handleDelete}
            handleAddition={handleAddition}
            handleDrag={handleDrag}
            inputFieldPosition="bottom"
            autocomplete
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">
            Product Image :
          </label>
          <input type="file" name="image" className=" " />
        </div>
        <div className="md:col-span-2 text-xl font-rancho-font 2 text-center">
          <button
            type="submit"
            className="btn bg-[#dfc39f] font-agu font-light text-xl hover:bg-secondary_primary hover:text-primary text-[#331A15] w-full "
          >
            Updated
          </button>
        </div>
      </form>
    </section>
  );
};

export default UpdateProductForm;
