import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios';
import Cookies from 'universal-cookie';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function ProductEditPage() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [ProductData, setProductData] = useState({})
    const [userData, setUserData] = useState(null)

    let ck = new Cookies()
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

  const getProductData = async () => {
    try {
      const getproduct = await axios
        .get(`${import.meta.env.VITE_API_URL}/products/${id}`)
        .catch(() => null);

      if (!getproduct) return;

      console.log(getproduct.data);

      setProductData(getproduct.data.data);
    } catch (error) {
      console.error(error);
    }
  };

    useEffect(() => {
        getUserData()
        getProductData()
    }, [])


    async function updateData() {
        try {
            let token = ck.get("aona_token");
            const res = await axios.patch(`${import.meta.env.VITE_API_URL}/admin/products/${id}`, ProductData, {
                "headers": {
                    "Authorization": token
                }
            });
      
            console.log(res.data);
            return navigate(`/products/${id}`)
          } catch (error) {
            console.error(error);
          }
    }
    async function deleteData() {
        try {
            let token = ck.get("aona_token");
            const res = await axios.delete(`${import.meta.env.VITE_API_URL}/admin/products/${id}`, {
                "headers": {
                    "Authorization": token
                }
            });
      
            console.log(res.data);
            return navigate(`/products`)
          } catch (error) {
            console.error(error);
          }
    }

  return (
    <>
    <Navbar/>
    <div className="bg-white mt-8 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold">แก้ไขข้อมูล</h1>
        <div
          className="p-4 flex flex-col gap-4 w-1/4 bg-white  border shadow-md rounded-md mt-4"
        >
          <div className="h-full">
            <div className="space-y-2">
              <p className="text-base font-semibold">ชื่อสินค้า</p>
              <input
              value={ProductData.name}
              onChange={(e) => setProductData((prev) => ({...prev, name: e.target.value}))}
                type="text"
                name="name"
                id="name"
                className="shadow-sm border rounded w-full px-2 py-2 text-sm bg-white"
                placeholder="ชื่อสินค้า"
              />
            </div>
            <div className="space-y-2">
              <p className="text-base font-semibold mt-2">รายละเอียด</p>
              <input
              value={ProductData.description}
              onChange={(e) => setProductData((prev) => ({...prev, description: e.target.value}))}
                type="text"
                name="description"
                id="description"
                className="shadow-sm border rounded w-full px-2 py-2 text-sm bg-white"
                placeholder="description"
              />
            </div>
            <div className="space-y-2">
              <p className="text-base font-semibold mt-2">ราคา</p>
              <input
              value={ProductData.price}
              onChange={(e) => setProductData((prev) => ({...prev, price: e.target.value}))}
                type="number"
                name="price"
                id="price"
                className="shadow-sm border rounded w-full px-2 py-2 text-sm bg-white"
                placeholder="price"
              />
            </div>
            <div className="space-y-2">
              <p className="text-base font-semibold mt-2">สต็อก</p>
              <input
              value={ProductData.stock}
              onChange={(e) => setProductData((prev) => ({...prev, stock: e.target.value}))}
                type="number"
                name="stock"
                id="stock"
                className="shadow-sm border rounded w-full px-2 py-2 text-sm bg-white"
                placeholder="stock"
              />
            </div>
            <div className="space-y-2">
              <p className="text-base font-semibold mt-2">รูป</p>
              <p>กรุณาไปอัพโหลด<a className='underline'  target='_blank' href='https://cdn.aona.co.th/upload'>ที่นี่</a></p>
              <input
              value={ProductData.image}
              onChange={(e) => setProductData((prev) => ({...prev, image: e.target.value}))}
                type="text"
                name="image"
                id="image"
                className="shadow-sm border rounded w-full px-2 py-2 text-sm bg-white"
                placeholder="image"
              />
            </div>

          </div>
          <hr />
          <div>
            <button onClick={updateData} className="w-full mb-3 px-4 py-2 bg-[#ffe7cb] hover:bg-[#ffd6a8] transition shadow-md text-black rounded-md">
              แก้ไขข้อมูล
            </button>
            <button onClick={deleteData} className="w-full mb-3 px-4 py-2 bg-red-500 hover:bg-red-600 transition shadow-md text-white rounded-md">
              ลบสินค้า
            </button>

          </div>
        </div>
      </div>
    </>
  )
}

export default ProductEditPage