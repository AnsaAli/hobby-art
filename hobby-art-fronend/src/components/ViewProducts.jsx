import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchProducts } from "./customeHook/useFetchProducts";
import { useSelector } from "react-redux";
import { TfiArrowCircleLeft } from "react-icons/tfi";
import { TfiArrowCircleRight } from "react-icons/tfi";

const ViewProducts = () => {
  const { id } = useParams();
  const { items, loading, error } = useSelector((state) => state.products);

  //find the item with the id
  const product = items.find((item) => item.id.toString() === id);

  //setting the image
  const [mainImage, setMainImage] = useState(product.img[0]);

  if (loading === "pending") {
    return <p>Loading...</p>;
  }

  if (loading === "failed") {
    return <p>Error: {error}</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }
  return (
    <div className=" relative p-10  ">
      <div className="bg-[#0000006a] md:p-20 rounded-lg">
        <div className="md:flex md:justify-start">
          {/* main image */}
          <div className="bg-white rounded-t-3xl rounded-b-sm">
            <img src={mainImage} className="w-full h-80 rounded-t-3xl md:w-96" />
          </div>

          {/* side bar image */}
          <div className="flex gap-2 p-5 md:flex-col ">
            {product.img.map((img, index) => (
              <div key={index}>
                <img
                  src={img}
                  className="w-48 h-16 rounded-md md:w-52 md:h-20 "
                  onClick={() => setMainImage(img)}
                />
              </div>
            ))}
          </div>

          {/* prodct details  */}
          <div className="md:mx-96 md:mt-10">
            <h3 className=" text-black font-bold  text-xl md:text-2xl">
              {" "}
              {product.name}
            </h3>

            {/* ⭐ Star Rating Section */}
            <div className="text-yellow-500 flex ">
              {/* Full Stars */}
              {Array.from({ length: Math.floor(product.star_rating) }).map(
                (_, index) => (
                  <span key={index} className="md:text-2xl text-xl">
                    ★
                  </span> // Full stars
                )
              )}

              {/* Half Star */}
              {product.star_rating % 1 >= 0.3 &&
                product.star_rating % 1 <= 0.7 && (
                  <span className="md:text-2xl text-xl">⭐</span>
                )}

              {/* Empty Stars */}
              {Array.from({ length: 5 - Math.round(product.star_rating) }).map(
                (_, index) => (
                  <span
                    key={index}
                    className="text-gray-300 md:text-2xl text-xl"
                  >
                    ★
                  </span>
                )
              )}
            </div>
            <p className="font-semibold md:text-xl"> {product.details}</p>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-green-600 p-2 text-white rounded-md mt-4 md:text-xl md:px-5 md:mt-5">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewProducts;
