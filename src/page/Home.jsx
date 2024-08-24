import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import MusicCard from "../components/MusicCard";
import axios from "axios";
import Footer from "../components/Footer";

function HomePage() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const allProducts = await axios
        .get(`${import.meta.env.VITE_API_URL}/products?limit=5&page=0`)
        .catch(() => null);

      if (!allProducts) return;

      console.log(allProducts.data);

      setProducts(allProducts.data.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Navbar />

      <div className="bg-neutral-100">
        <section className="w-full bg-[#ffe7cb]">
          <section className="container mx-auto pb-8 py-6">
            <div className="flex justify-between">
              <img src="/assets/img/main.png" alt="" />
              <div className="gap-4 hidden md:flex">
                <div className=" w-40 py-4  flex flex-col items-center gap-8 h-full">
                  <img src="/assets/img/guitar.svg" className="w-1/2" />
                  <p className="font-bold text-xl">Guitar</p>
                  <p className="">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit
                  </p>
                </div>
                <div className=" w-40 py-4 flex flex-col items-center gap-8 h-full">
                  <img src="/assets/img/piano.svg" className="w-1/2" />
                  <p className="font-bold text-xl">Piano</p>
                  <p className="">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit
                  </p>
                </div>
                <div className=" w-40 py-4 flex flex-col items-center gap-8 h-full">
                  <img src="/assets/img/drum.svg" className="w-1/2" />
                  <p className="font-bold text-xl">Drum</p>
                  <p className="">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-4 md:hidden bg-white">
              <div className=" w-40 py-4  flex flex-col items-center gap-8 h-full">
                <img src="/assets/img/guitar.svg" className="w-1/2" />
                <p className="font-bold text-xl">Guitar</p>
                <p className="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit
                </p>
              </div>
              <div className=" w-40 py-4 flex flex-col items-center gap-8 h-full">
                <img src="/assets/img/piano.svg" className="w-1/2" />
                <p className="font-bold text-xl">Piano</p>
                <p className="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit
                </p>
              </div>
              <div className=" w-40 py-4 flex flex-col items-center gap-8 h-full">
                <img src="/assets/img/drum.svg" className="w-1/2" />
                <p className="font-bold text-xl">Drum</p>
                <p className="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit
                </p>
              </div>
            </div>
          </section>
        </section>
        <section className="w-full bg-[#fff0df]">
          <section className="w-2/3 mx-auto pb-8 py-6 flex gap-2 justify-center items-center">
            <h3 className="text-lg w-1/2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              aliquid quidem adipisci et perspiciatis veritatis repudiandae,
            </h3>
            <button className="border bg-white font-bold border-black rounded-lg px-4 h-fit py-4 w-fit">
              Join us now!
            </button>
          </section>
        </section>
        <section className="w-full bg-[#fff]">
          <section className="container mx-auto pb-8 py-6">
            <h1 className="text-2xl underline px-4 font-bold">
              Recommend Products
            </h1>
            <p className="text-xl text-neutral-500 px-4 mb-2">สินค้าแนะนำ</p>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4 px-4">
              {products.map((product, idx) => (
                <MusicCard
                  key={idx}
                  name={product.name}
                  brand={product.description}
                  img={product.image}
                  price={product.price}
                  id={product.id}
                />
              ))}
            </div>
          </section>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
