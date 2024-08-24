import React from 'react'

function DashboardItem({ title, amount, content, description, isOrder, addLink, editLink, deleteData }) {
    return (
        <div className='bg-white w-full p-4 space-y-2 shadow-md border-b rounded-b'>
            <div>
                <div className="flex justify-between items-center">
                    <h3 className='text-lg font-bold'>{title}</h3>
                    <a href={addLink} className='text-sm px-2 py-1 bg-emerald-500 hover:bg-emerald-600 transition text-white shadow-md rounded-md'>เพิ่มข้อมูล</a>
                </div>
                <p className='text-base text-neutral-500'>ทั้งหมด {amount || 0} รายการ</p>
                <hr className='my-1' />
                <div className='grid grid-cols-4 mt-4'>
                    <div className='p-2 border rounded shadow-md bg-neutral-50'>
                        <p className='font-medium'>{content}</p>
                        <p className='text-neutral-500 text-sm'>{description}</p>
                        <hr className='my-1' />
                        <div className='flex justify-end gap-2'>
                            <button onClick={deleteData} className='text-xs px-2 py-1 bg-red-500 hover:bg-red-600 transition text-white shadow-md rounded-md'>ลบข้อมูล</button>
                            {!isOrder && <a href={editLink} className='text-xs px-2 py-1 bg-yellow-500 hover:bg-yellow-600 transition text-white shadow-md rounded-md'>แก้ไขข้อมูล</a>}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DashboardItem