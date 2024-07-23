import { useState } from "react";

import Footer from "../HomePage/Footer";
import { SupabaseClient } from "@supabase/supabase-js";
import { supabase } from "../supabaseClient";
import { Constants } from "../utilis/constants";
import Navbar from "../HomePage/Navbar";

const Create = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [tittle, setTittle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image || !tittle || !description || !price) {
      setFormError("please fill in all the fields");
      return;
    }
  };
  const { data, error } = supabase
    .from("market")
    .insert([{ name, tittle, description, price,image }]);

  if (error) {
    console.log(error);
    setFormError("please fill in all the fields");
  }
  if (data) {
    console.log(data);
    setFormError(null);
  }

  return (
    <div>
      <Navbar />
      <>
        <div className="  ml-64 rounded-md sm:items-center ">
          <form
            onSubmit={handleSubmit}
            className=" flex flex-row  place-content-center shadow-2xl  mt-6  bg-green w-4/6  rounded-3xl"
          >
            <div className="mt-7">
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Name of Seller
                  </label>
                </div>

                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    type="text"
                    value={name}
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Product Name
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="tittle"
                    value={tittle}
                    type="text"
                    onChange={(e) => setTittle(e.target.value)}
                  />
                </div>
              </div>

              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Description of Product
                  </label>
                </div>

                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    type="text"
                    value={description}
                    id="description"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    {Constants.price}
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="price"
                    value={price}
                    type="number"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>
              <div className="ml-96">
                <input
                  id="image"
                  value={image}
                  type="file"
                  onChange={(e) => setImage(e, target.value)}
                />
              </div>

              <div className="md:flex md:items-center ">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                  <button
                    onClick={handleSubmit}
                    className="shadow border-white  font-bold py-2 px-4 rounded"
                    type="button"
                  >
                    Create Order
                  </button>
                </div>
              </div>
            </div>
            {formError && <p className="error">{formError}</p>}
          </form>
        </div>
        <Footer />
      </>
    </div>
  );
};
export default Create;
