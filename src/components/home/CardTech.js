import React from 'react';

export default function CardTech ({ url }) {
    return (
        <div className='bg-transparent flex justify-center items-center'>
            <div className='p-6 bg-white min-w-[200px] min-h-[100px] flex justify-center items-center rounded-3xl shadow-2xl'>
                <img
                    src={url}
                    alt=""
                    className='w-[110px] h-[110px] object-contain'
                />
            </div>
        </div>
    )
}