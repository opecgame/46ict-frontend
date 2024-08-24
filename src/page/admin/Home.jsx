import React from 'react'
import Navbar from '../../components/Navbar'
import Card from '../../components/Card'
import RequestCard from '../../components/RequestCard'
import AppointmentCard from '../../components/AppointmentCard'

function AdminHomePage() {
    return (
        <div className='bg-neutral-100'>
            <Navbar />
            <main className='w-full bg-neutral-100 mt-12'>
                <section className='w-3/4 mx-auto pb-8'>
                    <div className='flex gap-4'>
                        <div className='w-2/3 bg-white border rounded p-4 overflow-y-hidden'>
                            <h1 className='text-xl font-semibold'>การนัดพบผู้ป่วย</h1>
                            <hr className='my-2' />
                            <div className='flex flex-col gap-2 overflow-y-auto h-96 p-2 pb-2'>
                                <AppointmentCard />
                                <AppointmentCard />
                                <AppointmentCard />
                            </div>
                        </div>
                        <div className='w-1/3 bg-white border rounded p-4'>
                            <h1 className='text-lg font-semibold'>การติดต่อแพทย์ทางออนไลน์</h1>
                            <hr className='my-2' />
                            <div className='flex flex-col gap-2 overflow-y-auto h-96 p-2 pb-2'>
                                <RequestCard />
                                <RequestCard />
                                <RequestCard />
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 w-full bg-white border rounded p-4 overflow-y-hidden'>
                        <h1 className='text-xl font-semibold'>ประวัติการรักษา</h1>
                        <hr className='my-2' />
                        <div className='flex flex-col gap-2 overflow-y-auto h-96 p-2 pb-2'>
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>
                </section>

            </main>
        </div>
    )
}

export default AdminHomePage