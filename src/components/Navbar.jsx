import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie'

function Navbar() {
    const navigate = useNavigate();
    
    
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
        getUserData()
    }, [])

    const logout = async () => {
        let ck =  new Cookies()
        try {
            ck.remove("aona_token")
            console.log('Succes');
            navigate('/');
            setUserData(null)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <nav className='bg-white px-12 py-6  mx-auto sticky top-0'>
            <div className='flex justify-between items-center'>
                <a href="/" className='font-bold text-2xl inline-flex items-center gap-4'><img src='/assets/img/music.svg' />Music Shop</a>
                <div className='flex gap-4 items-center'>
                    <a href="/products" className='hover:font-bold hover:drop-shadow-lg transition-all'>สินค้าทั้งหมด</a>
                    {!userData &&<a href="/login" className='hover:font-bold hover:drop-shadow-lg transition-all'>เข้าสู่ระบบ</a>}
                    {userData && <p className='hover:font-bold hover:drop-shadow-lg transition-all'>สวัสดี, {userData.firstname}</p>}
                    {userData && <a onClick={logout} className='cursor-pointer hover:font-bold hover:drop-shadow-lg transition-all text-red-500'>ออกจากระบบ</a>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar