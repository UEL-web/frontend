import React from "react";

export default function CardArchi ({ title, content }) {
    return (
        <div className='lg:col-span-1 col-span-4 w-full h-auto p-4 bg-white rounded-2xl custom-shadow'>
            <p className='text-5xl font-bold text-[#5E54F3] mb-3'>
                {title}
            </p>
            <p className='text-3xl text-black mb-4'>
                {content}
            </p>
        </div>
    )
}