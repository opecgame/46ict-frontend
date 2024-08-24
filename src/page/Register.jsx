import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";

function RegisterPage() {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    prefix: "",
    firstname: "",
    lastname: "",
    phone_number: ""
  });
  const [checkPass, setCheckPass] = useState('')
  let ck =  new Cookies()



  const navigate = useNavigate();

  const register = async () => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/register`, userData, {});

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
      <div className="bg-white mt-0 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold">สมัครสมาชิก</h1>
        <div
          className="p-4 flex flex-col gap-4 w-1/2 bg-white  border shadow-md rounded-md mt-4"
        >
          <div className="flex items-center gap-2">
            <div className="space-y-2 w-1/6">
              <p className="text-base font-semibold ">คำนำหน้า</p>
              <select
              value={userData.prefix}
              onChange={(e) => setUserData((prev) => ({...prev, prefix: e.target.value}))}
                name="prefix"
                className="border shadow-sm rounded w-full px-2 py-2 text-sm bg-white"
              >
                <option value="" disabled selected>
                  -- เลือกคำนำหน้า --
                </option>
                <option value="ด.ช.">ด.ช.</option>
                <option value="ด.ญ.">ด.ญ.</option>
                <option value="นาย">นาย</option>
                <option value="นาง">นาง</option>
                <option value="น.ส.">น.ส.</option>
              </select>
            </div>
            <div className="space-y-2 w-3/6">
              <p className="text-base font-semibold">ชื่อจริง</p>
              <input
              value={userData.firstname}
              onChange={(e) => setUserData((prev) => ({...prev, firstname: e.target.value}))}
                type="text"
                name="firstname"
                id="firstname"
                className="shadow-sm border rounded w-full px-2 py-2 text-sm bg-white"
                placeholder="สมชาย"
              />
            </div>
            <div className="space-y-2 w-2/6">
              <p className="text-base font-semibold">นามสกุล</p>
              <input
              value={userData.lastname}
              onChange={(e) => setUserData((prev) => ({...prev, lastname: e.target.value}))}
                type="text"
                name="lastname"
                id="lastname"
                className="shadow-sm border rounded w-full px-2 py-2 text-sm bg-white"
                placeholder="ใจดี"
              />
            </div>
          </div>
          <div className="space-y-2 w-full">
            <p className="text-base font-semibold ">ชื่อผู้ใช้</p>
            <input
            value={userData.username}
            onChange={(e) => setUserData((prev) => ({...prev, username: e.target.value}))}
              type="text"
              name=""
              id=""
              className="shadow-sm border rounded w-full px-2 py-2 text-sm bg-white"
              placeholder="Username"
            />
          </div>
          <div className="space-y-2 w-full">
            <p className="text-base font-semibold ">เบอร์โทรศัพท์</p>
            <input
            value={userData.phone_number}
            onChange={(e) => setUserData((prev) => ({...prev, phone_number: e.target.value}))}
              type="text"
              name=""
              id=""
              className="shadow-sm border rounded w-full px-2 py-2 text-sm bg-white"
              placeholder="08xxxxxxxx"
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="space-y-2 w-1/2">
              <p className="text-base font-semibold">รหัสผ่าน</p>
              <input
              value={userData.password}
              onChange={(e) => setUserData((prev) => ({...prev, password: e.target.value}))}
                type="password"
                name=""
                id=""
                className="shadow-sm border rounded w-full px-2 py-2 text-sm bg-white"
                placeholder="Password"
              />
            </div>
            <div className="space-y-2 w-1/2">
              <p className="text-base font-semibold">ยืนยันรหัสผ่าน</p>
              <input
              value={checkPass}
              onChange={(e) => setCheckPass(e.target.value)}
                type="password"
                name=""
                id=""
                className="shadow-sm border rounded w-full px-2 py-2 text-sm bg-white"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <hr />
          <div>
            <button onClick={register} className="w-full mb-3 px-4 py-2 bg-[#ffe7cb] hover:bg-[#ffd6a8] transition shadow-md text-black rounded-md">
              สมัครสมาชิก
            </button>
            <p className="text-neutral-400 text-sm">
              มีบัญชีแล้ว?{" "}
              <a href="/login" className="underline hover:text-neutral-600">
                เข้าสู่ระบบ
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
