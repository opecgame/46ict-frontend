import React from 'react'

function RequestCard() {
    return (
        <div className='bg-white w-full p-4 space-y-2 shadow-md border-b rounded-b'>
            <h3 className='text-base font-bold'>20 พ.ค. 67 | 13.00 น.</h3>
            <div>
                <h3 className='text-lg font-bold'>นายคเชนทร์ชัย ใจกล้า</h3>
                <h3 className='text-base font-medium'>ติดต่อ จักษุแพทย์</h3>
                <hr className='my-1' />
                <p className='text-base underline'>โรคหรืออาการที่พบ</p>
                <p className='text-sm pl-2 text-neutral-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus ut dicta impedit ipsum. Ea quo dolorem, harum sapiente unde odio earum commodi doloremque. Suscipit possimus consectetur officia nesciunt error unde?</p>
                <div className='flex justify-end'>
                    <button className='px-2 py-1 bg-emerald-500 hover:bg-emerald-600 transition text-white shadow-md rounded-md'>ตอบรับคำขอ</button>
                </div>
            </div>
        </div>
    )
}

export default RequestCard