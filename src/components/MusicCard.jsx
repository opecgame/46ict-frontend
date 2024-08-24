import React from "react";

function MusicCard({name, brand, price, img, id}) {
  return (
    <div className="relative hover:-translate-y-1 transition hover:shadow-lg max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      
      <a href={`/products/${id}`}>
        <img className="rounded-t-lg" src={img} alt="" />
      <div className="p-5">
          <h5 className=" text-base font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <div className="flex justify-between items-baseline">
            <h5 className="mb-2 text-xs tracking-tight text-neutral-500 dark:text-white">
              {brand}
            </h5>
            <p className="text-red-500 font-bold">฿{price.toLocaleString()}</p>
          </div>
      </div>
      </a>
    </div>
  );
}

export default MusicCard;
