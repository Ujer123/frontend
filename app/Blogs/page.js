import React from 'react'
import Image from 'next/image'
import Blog from "@/public/images/eros.jpg"
import { getBlogs } from '@/lib/getBlogs';
import Link from 'next/link';

export default async function Blogs() {

    const blogs = await getBlogs();

    return (
        <div className='ms-5 me-5 mt-10 mb-10 pt-16 px-4 grid grid-cols-1 gap-6 md:grid-cols-4 sm:grid-cols-2'>

{blogs.map((item) => (
            <Link href="/PaymentPage" key={item.id}>
            <div className='p-2 border rounded-lg bg-gray-200'>
                    <Image
                        src={Blog}
                        // width={350}
                        // height={100}
                        style={{maxHeight: '250px'}}
                        alt={item.title}
                        className='rounded-lg w-full'
                        priority
                    />
                    <div className='w-16 text-center mt-2 '>
                        <p className='text-white rounded-md bg-purple-800'>Article</p>
                    </div>
                <div className="mt-2">
                        <h5 className="mb-1 text-xl font-bold tracking-tight text-black">{item.title}</h5>
                        <p className='text-slate-700'>{item.description}</p>
                        <div className='mt-3'>
                        <p className='font-bold text-black'>Jese Loes</p>
                        <p className='text-slate-700'>Aug 15, 2024 - 16 min read</p>
                        </div>
            </div>
            </div>
                        </Link>
                        ))}


                        

        </div>
    );

}