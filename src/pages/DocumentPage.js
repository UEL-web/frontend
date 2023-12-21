import BANNER from "../constants/banners";
import {CiClock2, CiSearch} from "react-icons/ci";
import {Swiper, SwiperSlide} from "swiper/react";
import {Link} from "react-router-dom";
import Pagination from "../components/Pagination";
import ConsultationForm from "../components/ConsultationForm";
import {IoPersonOutline} from "react-icons/io5";

function DocumentPage() {
  return (
    <div>
        <div className="container m-auto h-auto text-white">
            <section className="h-auto">
                <img src={BANNER.DOCUMENT}/>
            </section>

            <section className="h-auto py-1">
                <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-8 py-10">
                        <h1 className="text-6xl font-bold"> TÀI LIỆU </h1>
                    </div>
                    <div className="col-span-4 py-3 flex justify-center items-center">
                        <div className="h-fit ml-auto grid grid-cols-12 gap-2 bg-white py-2 px-4 rounded-xl">
                            <input className='col-span-10 text-black' placeholder='Tìm kiếm'/>
                            <CiSearch className='col-span-2 text-secondary m-auto cursor-pointer' size={20} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="h-auto py-1">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={10}
                >
                    <SwiperSlide className='bg-gradient-to-r from-[#F74986] to-white rounded-full p-[1.5px]'>
                        <Link to='/course/1' className='block bg-black rounded-full'>
                            <p className='truncate py-3 px-4'>
                                Data Analysis with Pandas and Python
                            </p>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className='bg-gradient-to-r from-pink-500 via-[#F74986] to-white rounded-full p-[1.5px]'>
                        <Link to='/course/1' className='block bg-black rounded-full'>
                            <p className='truncate py-3 px-4'>
                                Data Analysis with Pandas and Python
                            </p>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className='bg-gradient-to-r from-pink-500 via-[#F74986] to-white rounded-full p-[1.5px]'>
                        <Link to='/course/1' className='block bg-black rounded-full'>
                            <p className='truncate py-3 px-4'>
                                Data Analysis with Pandas and Python
                            </p>
                        </Link>
                    </SwiperSlide>

                </Swiper>
            </section>

            <section className="h-auto pt-5">
                <div className="grid grid-cols-12 gap-5">
                    <DocumentCard />
                    <DocumentCard />
                    <DocumentCard />
                    <DocumentCard />
                    <DocumentCard />
                    <DocumentCard />
                    <DocumentCard />
                    <DocumentCard />
                </div>
            </section>

            <section className="h-auto pt-10 w-full flex items-center justify-center">
                <Pagination />
            </section>


        </div>
    </div>
  );
}

export default DocumentPage;

function DocumentCard() {
    return (
        <div className="col-span-3 p-4 grid gap-2 grid-rows-5 h-[310px] border border-gray-800 cursor-pointer group">
            <div className="row-span-3 flex items-center">
                <img src='/default_img.png' className='w-full h-full object-cover' />
            </div>

            <div className="row-span-2 gap-2 flex flex-col items-start py-2 transition">
                <span className='text-sm bg-[#5E54F3] bg-opacity-20 text-[#5E54F3] rounded-full px-2 py-1'>Case study</span>
                <p className='line-clamp-2 font-semibold group-hover:text-secondary leading-5'> Ultimate AWS Certified Solutions Architect Associate SAA-C03  </p>
            </div>

            <span className='w-fit m-auto text-white bg-[#5E54F3] rounded-full px-3 py-1'>Xem ngay</span>

        </div>
    )
}
