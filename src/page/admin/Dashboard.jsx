import React from 'react'
import Navbar from '../../components/Navbar'
import Card from '../../components/Card'
import DashboardItem from '../../components/DashboardItem'

function DashboardPage() {
    return (
        <div className='bg-neutral-100 min-h-screen'>
            <Navbar />
            <main className='w-full bg-neutral-100 mt-12'>
                <section className='w-3/4 mx-auto pb-8'>
                    <div className='mt-4 w-full bg-white border rounded p-4 overflow-y-hidden'>
                        <h1 className='text-xl font-semibold'>ข้อมูลต่าง ๆ</h1>
                        <hr className='my-2' />
                        <div className='flex flex-col gap-2 overflow-y-auto h-96 p-2 pb-2'>
                            <DashboardItem title={'แพทย์'} content={'น.พ.ฟหกห ฟหกหก'} description={'จักษุแพทย์'} editLink={'/admin/edit/doctor'} addLink={'/admin/doctor'} />
                            <DashboardItem title={'ผู้ใช้'} content={'นายฟหกห ฟหกหก'} description={'ทำการนัดแล้ว 2 ครั้ง'} editLink={'/admin/edit/user'} addLink={'/admin/user'} />
                            <DashboardItem title={'การนัด'} content={'นายฟหกห ฟหกหก'} description={'สถานะ'} addLink={'/admin/doctor'} isOrder />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default DashboardPage