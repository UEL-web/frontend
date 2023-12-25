import React from 'react';

export default function CardQuestion ({ question }) {
    return (
        <div className='p-4 text-[16px] card-question mb-4'>
            {question}
        </div>
    )
}