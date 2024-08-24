import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import MusicCard from "../components/MusicCard";
import Cookies from "universal-cookie";

function ProductsPage() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const allProducts = await axios
        .get(`${import.meta.env.VITE_API_URL}/products?limit=200&page=0`)
        .catch(() => null);

      if (!allProducts) return;

      console.log(allProducts.data);

      setProducts(allProducts.data.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  let ck = new Cookies()
    const [userData, setUserData] = useState(null)
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
    getProducts();
    getUserData()
  }, []);
  return (
    <>
    <Navbar />
      <div className="container mx-auto p-4">
          <section className="container mx-auto pb-8 py-6">
            <h1 className="text-2xl underline px-4 font-bold">Products</h1>
            <p className="text-xl text-neutral-500 px-4 mb-2">สินค้าทั้งหมด</p>
            { userData?.isAdmin && <a href="/products/add" className="text-xl text-neutral-500 px-4 mb-2">เพิ่มสินค้าใหม่</a>}
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
      </div>
    </>
  );
}

export default ProductsPage;
