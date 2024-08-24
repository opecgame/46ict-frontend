import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  let ck =  new Cookies()



  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/login`, userData, {});

      console.log(res.data);
      let token = res.data.data.token;
      if (token) {
        ck.set("aona_token", token)
        navigate('/')
      }
      else console.log("WHY ??")
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    
    if (ck.get("aona_token")) {
      navigate('/')
    }
    
  }, [])

  useEffect(() => {
    console.log(userData);
  }, [userData])
  return (
    <>
    <Navbar />
      <div className="bg-white mt-8 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold">เข้าสู่ระบบ</h1>
        <div
          className="p-4 flex flex-col gap-4 w-1/4 bg-white  border shadow-md rounded-md mt-4"
        >
          <div className="h-full">
            <div className="space-y-2">
              <p className="text-base font-semibold">ชื่อผู้ใช้</p>
              <input
              value={userData.username}
              onChange={(e) => setUserData((prev) => ({...prev, username: e.target.value}))}
                type="text"
                name="username"
                id="username"
                className="shadow-sm border rounded w-full px-2 py-2 text-sm bg-white"
                placeholder="Username"
              />
            </div>
            <div className="space-y-2">
              <p className="text-base font-semibold mt-2">รหัสผ่าน</p>
              <input
              value={userData.password}
              onChange={(e) => setUserData((prev) => ({...prev, password: e.target.value}))}
                type="password"
                name="password"
                id="password"
                className="shadow-sm border rounded w-full px-2 py-2 text-sm bg-white"
                placeholder="Password"
              />
            </div>
          </div>
          <hr />
          <div>
            <button onClick={login} className="w-full mb-3 px-4 py-2 bg-[#ffe7cb] hover:bg-[#ffd6a8] transition shadow-md text-black rounded-md">
              เข้าสู่ระบบ
            </button>
            <p className="text-neutral-400 text-sm text-right">
              <a href="" className="underline hover:text-neutral-600">
                ลืมรหัสผ่าน?
              </a>
            </p>
            <p className="text-neutral-400 text-sm text-right">
              ยังไม่มีบัญชี?{" "}
              <a href="/register" className="underline hover:text-neutral-600">
                สมัครสมาชิก
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
