import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import MusicCard from "../components/MusicCard";
import { useParams } from "react-router-dom";
import Cookies from "universal-cookie";

function ProductPage() {
    let ck = new Cookies()
    const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
    const [userData, setUserData] = useState(null)
    const { id } = useParams();

  async function getUserData() {
    try {
        let token = ck.get("aona_token");


        if (!token) return;


        const user = await axios.get(`${import.meta.env.VITE_API_URL}/@me`, {
            "headers": {
                "Authorization": token
            }
        });

        if (user.data.data) {
            setUserData(user.data.data)
            console.log(user.data.data)
        }

    } catch (error) {
        ck.remove("aona_token")
        console.log('Succes');
        navigate('/')
        console.error(error);
    }
  }

useEffect(() => {
    getUserData()
}, [])

  const getProduct = async () => {
    try {
      const getproduct = await axios
        .get(`${import.meta.env.VITE_API_URL}/products/${id}`)
        .catch(() => null);

      if (!getproduct) return;

      console.log(getproduct.data);

      setProduct(getproduct.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProduct();
    getProducts();
  }, []);

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
  return (
    <>
    <Navbar />
      <div className="container mx-auto p-4">
        <section className="container mx-auto pb-8 py-6">
          {/* <h1 className="text-2xl underline px-4 font-bold">Products</h1> */}
          {/* <p className="text-xl text-neutral-500 px-4 mb-2">สินค้าทั้งหมด</p> */}
          <div className="flex">
            <div className="w-1/2">
              <img src={product.image} className="w-full rounded-lg border" alt="" />
            </div>
            <div className="w-1/2 p-10">
              <h2 className="font-bold text-4xl">{product.name}</h2>
              <p className="text-neutral-500">{product.description}</p>
              <p className="text-neutral-500">คงเหลือ {product.stock} ชิ้น</p>
              { userData?.isAdmin && <a href={`/products/${product.id}/edit`} className="text-neutral-500 font-bold">แก้ไขข้อมูล</a>}
              <p className="text-red-500 text-center font-bold text-3xl mt-4">
                ฿{product.price}
              </p>
              <button className="w-full mt-3 px-4 py-2 bg-[#ffe7cb] hover:bg-[#ffd6a8] transition shadow-md text-black rounded-md">
                ซื้อสินค้า
              </button>
            </div>
          </div>
          <hr className="my-4" />
          <section className="w-full bg-[#fff]">
            <section className="container mx-auto pb-8">
              <h1 className="text-2xl underline px-4 font-bold">Other Products</h1>
              <p className="text-xl text-neutral-500 px-4 mb-2">สินค้าอื่น ๆ</p>
              <div className="grid grid-cols-5 gap-4 mt-4 px-4">
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
        </section>
      </div>
    </>
  );
}

export default ProductPage;
