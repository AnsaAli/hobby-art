import React, { useEffect, useState } from "react";

const Cards = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        "https://raw.githubusercontent.com/AnsaAli/art-data/refs/heads/main/artData.json"
      );
      const data = await result.json();

      setItems(data);
    };
    fetchData();
  }, []);

  const ViewProducts=(index)=>{

  }

  return (
    <div className="bg-[#00000051] md:p-10 p-5">
      <h2 className="text-2xl md:text-4xl font-semibold md:mt-10 md:mb-5 mt-5 font-mono text-[#000000]  text-center relative">
        Artist's Favourite
      </h2>
      <div className="relative p-10 flex flex-wrap gap-6  ">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="bg-[#000000c5] w-60 h-[400px] md:w-80 md:h-[500px] rounded-md shadow-md p-4 flex flex-col justify-between"
          >
            {/* Image */}
            <img
              src={item.img[0]} //
              alt={item.name}
              className="mx-auto rounded h-[150px] w-full md:h-[200px]"
            />
            {/* Product Details */}
            <h3 className="font-bold text-slate-200 text-center mt-auto  md:text-lg ">
              {item.name}
            </h3>
            <p className="text-slate-300 text-sm mt-auto  md:text-lg ">
              {item.details.split(" ").slice(0, 10).join(" ")}....
            </p>
            <div className="flex justify-between mt-auto">
              <p className="text-slate-100">RS.{item.price}</p>
              {/* ⭐ Star Rating Section */}
              <div className="text-yellow-500 mt-2 flex">
                {/* Full Stars */}
                {Array.from({ length: Math.floor(item.star_rating) }).map(
                  (_, index) => (
                    <span key={index}>★</span> // Full stars
                  )
                )}

                {/* Half Star (only if the rating is something like 4.5, 3.5) */}
                {item.star_rating % 1 >= 0.3 && item.star_rating % 1 <= 0.7 && (
                  <span>⭐</span>
                )}

                {/* Empty Stars (to maintain a 5-star layout) */}
                {Array.from({ length: 5 - Math.round(item.star_rating) }).map(
                  (_, index) => (
                    <span key={index} className="text-gray-300">
                      ★
                    </span> // Empty stars
                  )
                )}
              </div>
            </div>
            {/* view product  */}
            <button className=" text-slate-100 bg-[#dd3e1aea] p-2 rounded-lg text-sm md:text-lg mt-auto" onClick={ViewProducts(index)}>
              View Product
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
