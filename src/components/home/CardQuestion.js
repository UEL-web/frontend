import React, {useState} from 'react';
import {HiMinus, HiPlus} from "react-icons/hi";

export default function CardQuestion ({ question, answer }) {
    const [open, setOpen] = useState(false)


    return (
        <div
            className='relative mb-4 column-item'
            // onMouseOver={() => setOpen(true)}
            // onMouseOut={() => setOpen(false)}
        >
            <p
                className='relative p-4 text-[16px] card-question cursor-pointer z-10'
                // onClick={() => setOpen(!open)}
                onMouseOver={() => setOpen(true)}
                onMouseOut={() => setOpen(false)}
            >
                {question}
                <span className='absolute right-3 top-[50%] transform -translate-y-1/2 '>
                    {!open ? <HiPlus /> : <HiMinus />}
                </span>
            </p>
            {open && <p className='p-4 rounded-[14px] border-[#F74986] border-[1px] text-white bg-transparent hover:text-black hover:bg-white transition duration-100 ease-in-out mt-1 animate-slide-bottom'>
                Trả lời: {answer}
            </p>}
        </div>
    )
}