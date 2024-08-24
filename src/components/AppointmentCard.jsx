import React from 'react'

function AppointmentCard() {
    return (
        <div className='bg-white w-full p-4 space-y-2 shadow-md border-b rounded-b'>
            <h3 className='text-base font-bold'>20 พ.ค. 67 | 13.00 น.</h3>
            <div>
                <h3 className='text-lg font-bold'>นายคเชนทร์ชัย ใจกล้า</h3>
                <p className='text-base text-neutral-500'>น.พ.คเชนทร์ชัย ใจกล้า</p>
            </div>
            <div className='flex justify-end gap-2'>
                <button className='text-sm px-2 py-1 bg-red-500 hover:bg-red-600 transition text-white shadow-md rounded-md'>ยกเลิกการนัด</button>
                <button className='text-sm px-2 py-1 bg-emerald-500 hover:bg-emerald-600 transition text-white shadow-md rounded-md'>การนัดเสร็จสมบูรณ์ </button>
            </div>
        </div>
    )
}

export default AppointmentCard