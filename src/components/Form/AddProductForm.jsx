import useAuth from "../../hooks/useAuth";
import { WithContext as ReactTags } from "react-tag-input";
import "../Form/tag.css";
import Button from "../Shared/Button";
const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const AddProductForm = ({ handleAddProduct, setTags, tags }) => {
  const { user } = useAuth();

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

  return (
    <div className="">
      <form
        onSubmit={handleAddProduct}
        className="grid grid-cols-1 font-Garamond md:grid-cols-2 font-raleway-font px-4 md:px-36 mt-8  gap-6"
      >
        <div>
          <label className="block text-lg font-medium mb-2">
            Product Name :
          </label>
          <input
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
            required
            placeholder="please add Description"
            name="description"
            className="w-full  mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>

        {/* tag */}
        <div className="md:col-span-2">
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
          <input type="file" required name="image" className=" " />
        </div>
        <div className="md:col-span-2 text-xl font-rancho-font 2 text-center">
          <button
            type="submit"
           
            className="btn  bg-lime-500 text-white font-agu font-light text-xl hover:bg-secondary_primary hover:text-primary w-full "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
