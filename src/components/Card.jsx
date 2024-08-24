import React from 'react'

function Card() {
    return (
        <div className='bg-white w-full p-4 space-y-2 shadow-md border-b rounded-b'>
            <h3 className='text-base font-bold'>20 พ.ค. 67 | 13.00 น.</h3>
            <div>
                <h3 className='text-lg font-bold'>โรคประจำตัว</h3>
                <p className='text-base text-neutral-500'>น.พ.คเชนทร์ชัย ใจกล้า</p>
            </div>
        </div>
    )
}

export default Card