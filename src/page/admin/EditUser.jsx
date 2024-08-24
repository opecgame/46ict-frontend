import React from 'react'

function EditUserPage() {
    return (
        <div className='bg-neutral-100 h-screen flex flex-col justify-center items-center'>
            <h1 className='text-2xl font-bold'>แก้ไขข้อมูลผู้ใช้</h1>
            <form action="" className='p-4 flex flex-col gap-4 w-1/2 bg-white  border shadow-md rounded-md mt-4'>
                <div className='flex items-center gap-2'>
                    <div className='space-y-2 w-1/6'>
                        <p className='text-base font-semibold '>คำนำหน้า</p>
                        <select name="" className='border shadow-sm rounded w-full px-2 py-2 text-sm bg-white'>
                            <option value="" disabled selected>-- เลือกคำนำหน้า --</option>
                            <option value="ด.ช.">ด.ช.</option>
                            <option value="ด.ญ.">ด.ญ.</option>
                            <option value="นาย">นาย</option>
                            <option value="นาง">นาง</option>
                            <option value="น.ส.">น.ส.</option>
                        </select>
                    </div>
                    <div className='space-y-2 w-3/6'>
                        <p className='text-base font-semibold'>ชื่อจริง</p>
                        <input type="text" name="" id="" className='shadow-sm border rounded w-full px-2 py-2 text-sm bg-white' placeholder='สมชาย' />
                    </div>
                    <div className='space-y-2 w-2/6'>
                        <p className='text-base font-semibold'>นามสกุล</p>
                        <input type="text" name="" id="" className='shadow-sm border rounded w-full px-2 py-2 text-sm bg-white' placeholder='ใจดี' />
                    </div>
                </div>
                <div className='space-y-2 w-full'>
                    <p className='text-base font-semibold '>เบอร์โทรศัพท์</p>
                    <input type="text" name="" id="" className='shadow-sm border rounded w-full px-2 py-2 text-sm bg-white' placeholder='08xxxxxxxx' />
                </div>
                <div className='space-y-2 w-full'>
                    <p className='text-base font-semibold'>เลขบัตรประจำตัวประชาชน</p>
                    <input type="text" name="" id="" className='shadow-sm border rounded w-full px-2 py-2 text-sm bg-white' placeholder='1xxxxxxxxxxxx' />
                </div>
                <div className='flex items-center gap-2'>
                    <div className='space-y-2 w-1/2'>
                        <p className='text-base font-semibold'>รหัสผ่าน</p>
                        <input type="password" name="" id="" className='shadow-sm border rounded w-full px-2 py-2 text-sm bg-white' placeholder='...' />
                    </div>
                    <div className='space-y-2 w-1/2'>
                        <p className='text-base font-semibold'>ยืนยันรหัสผ่าน</p>
                        <input type="password" name="" id="" className='shadow-sm border rounded w-full px-2 py-2 text-sm bg-white' placeholder='กรอกรหัสอีกครั้ง' />
                    </div>
                </div>
                <hr />
                <div>
                    <button className='w-full mb-3 px-4 py-2 bg-yellow-500 hover:bg-yellow-700 transition shadow-md text-white rounded-md'>แก้ไขข้อมูล</button>
                </div>
            </form>
        </div>
    )
}

export default EditUserPage