import React from "react";
import CardArchi from "../components/home/CardArchi";
import CardFeedback from "../components/home/CardFeedback";
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default function HomePageNew () {
    return (
        <main className='container m-auto text-white h-auto mt-5'>
            <section className='h-auto px-20 py-20'>
                <div className='grid grid-cols-12 gap-5'>
                    <div className='col-span-6 pt-10 '>
                        <div className='w-full h-full flex items-end'>
                            <div>
                                <h1 className='text-6xl font-bold mb-4'>
                                    Được <span className='text-[#5E54F3]'>hơn 5000</span> <br/> học viên tin chọn
                                </h1>
                                <p className='leading-relaxed font-thin mb-9'>
                                    Đơn vị đào tạo Kỹ năng Phân tích dữ liệu kinh doanh hàng đầu tại Việt Nam, chúng tôi tự hào mang đến cho bạn những khóa học chất lượng và đội ngũ giảng viên giàu kinh nghiệm trong lĩnh vực này. Với tầm nhìn tiên phong và sự cam kết với chất lượng, chúng tôi tạo ra môi trường học tập đa dạng, tương tác và thú vị để bạn có thể nắm vững những kỹ năng quan trọng trong việc phân tích dữ liệu kinh doanh.
                                </p>
                                <form className='w-full h-auto flex items-center justify-between bg-gradient-to-b from-linear-first-rgba to-linear-second-rgba p-5 rounded-full'>
                                    <input
                                        type="email"
                                        placeholder="Email/ Số điện thoại"
                                        className='w-3/5 h-full bg-white outline-none text-black p-2 rounded-full'
                                    />
                                    <button
                                        type='button'
                                        className='uppercase py-2 px-4 rounded-full bg-white font-semibold text-sm bg-gradient-to-r from-linear-first to-linear-second text-white'
                                    >
                                        Tư vấn ngay
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-6 pt-3 flex justify-center items-center'>
                        <img
                            src="/banner1.png"
                            alt=""
                        />
                    </div>
                </div>
            </section>

            <section className='h-auto px-20 py-20'>
                <h2 className='text-6xl font-bold pb-9 mb-9 text-center'>
                    Thành tựu ấn tượng
                </h2>

                <div className='container my-10 w-full h-auto'>
                    <div className='grid grid-cols-4 gap-10'>
                        {
                            archiData.map((item, index) => (
                                <CardArchi key={index} title={item.title} content={item.content} />
                            ))
                        }
                    </div>
                </div>
            </section>

            <section className='h-auto px-20 py-20'>
                <div className='grid grid-cols-2 gap-10'>
                    <div className='col-span-1 w-full h-full flex flex-col justify-around items-center'>
                        <div className='grid grid-cols-2 gap-5'>
                            <div className='col-span-1 flex flex-col justify-around items-center gap-5'>
                                <div className='p-4 rounded-[24px] border-[#F74986] border-[1px]'>
                                    <p className='mb-1 text-[40px] font-bold'>
                                        01
                                    </p>
                                    <p className='text-[18px] font-thin'>
                                        Có được kiến thức nền tảng về Data vững chắc: Analytix chú trọng chất lượng đào tạo, cập nhật thường xuyên giúp sinh viên luôn được tiếp cận với những kiến thức mới.
                                    </p>
                                </div>

                                <div className='p-4 rounded-[24px] border-[#F74986] border-[1px] bg-white text-black'>
                                    <p className='mb-1 text-[40px] font-bold'>
                                        02
                                    </p>
                                    <p className='text-[18px] font-thin'>
                                        Sinh viên sẽ được đào tạo từ cơ bản đến chuyên sâu về Data và Business Intelligence,  70% THỜI LƯỢNG HỌC THỰC HÀNH đáp ứng đúng nhu cầu doanh nghiệp.
                                    </p>
                                </div>
                            </div>

                            <div className='col-span-1 flex flex-col justify-around items-center gap-5'>
                                <div className='p-4 rounded-[24px] border-[#F74986] border-[1px] bg-white text-black'>
                                    <p className='mb-1 text-[40px] font-bold'>
                                        03
                                    </p>
                                    <p className='text-[18px] font-thin'>
                                        Được cung cấp chứng chỉ sau khi hoàn thành các khóa học.
                                    </p>
                                </div>

                                <div className='p-4 rounded-[24px] border-[#F74986] border-[1px] bg-white text-black'>
                                    <p className='mb-1 text-[40px] font-bold'>
                                        04
                                    </p>
                                    <p className='text-[18px] font-thin'>
                                        Được học tập và trao đổi thông qua các GIỜ HỌC DOANH NGHIỆP TRỰC TIẾP mà Analytix đã kết nối, giúp sinh viên có cái nhìn thực tế hơn.
                                    </p>
                                </div>

                                <div className='p-4 rounded-[24px] border-[#F74986] border-[1px] bg-white text-black'>
                                    <p className='mb-1 text-[40px] font-bold'>
                                        05
                                    </p>
                                    <p className='text-[18px] font-thin'>
                                        100% sinh viên được nhà tuyển dụng chào đón.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1 w-full h-full'>
                        <div className='w-full h-auto flex justify-center items-center gap-2 font-bold bg-gradient-to-b from-[#F74986] to-[#fff] text-transparent bg-clip-text'>
                            <span className='text-[85px]'>
                                5
                            </span>
                            <p className='text-[30px]'>
                                LỢI ÍCH ĐẮT GIÁ KHI THAM GIA KHÓA HỌC CỦA ANALYTIX
                            </p>
                        </div>
                        <img src="/img.png" alt=""/>
                        <div className='w-full h-auto text-center'>
                            <button
                                type='button'
                                className='uppercase py-3 px-6 rounded-full bg-white font-semibold text-sm bg-gradient-to-b from-[#F74986] to-[#fff] text-white'
                            >
                                <span>
                                    Khám phá khóa học ngay
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='h-auto px-20 py-20'>
                <div className='grid grid-cols-3 gap-10'>
                    <div className='col-span-1'>
                        <p className='text-[70px] font-bold'>
                            Cảm nhận học viên
                        </p>
                    </div>

                    <div className='col-span-2'>
                        <div className='w-full h-auto bg-white rounded-3xl text-black p-3 '>
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={1}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                                pagination={true}
                                modules={[Pagination]}
                            >
                                <SwiperSlide>
                                    <CardFeedback
                                        name='Nguyễn Thị Hồng'
                                        student='Sinh viên Đại học Kinh tế-Luật'
                                        content='Khóa học rất hay, mình đã học và áp dụng được nhiều kiến thức trong công việc. Cảm ơn Analytix rất nhiều.'
                                        avatar='/avatar.png'
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <CardFeedback
                                        name='Nguyễn Thị Hồng'
                                        student='Sinh viên Đại học Kinh tế-Luật'
                                        content='Khóa học rất hay, mình đã học và áp dụng được nhiều kiến thức trong công việc. Cảm ơn Analytix rất nhiều.'
                                        avatar='/avatar.png'
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <CardFeedback
                                        name='Nguyễn Thị Hồng'
                                        student='Sinh viên Đại học Kinh tế-Luật'
                                        content='Khóa học rất hay, mình đã học và áp dụng được nhiều kiến thức trong công việc. Cảm ơn Analytix rất nhiều.'
                                        avatar='/avatar.png'
                                    />
                                </SwiperSlide>
                            </Swiper>

                        </div>
                    </div>
                </div>
            </section>

            <section className='my-20 text-white bg-gradient-to-r from-[#5E54F3] from-17% to-[#D743FB] to-103% rounded-3xl'>
                <p className='text-center text-[60px] font-bold mb-10'>
                    Công nghệ sử dụng
                </p>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    // pagination={true}
                    // modules={[Pagination]}
                >

                </Swiper>
            </section>
        </main>
    )
}

const archiData = [
    {
        title: '30+',
        content: 'Khóa học được khai giảng'
    },
    {
        title: '5000+',
        content: 'Học viên được đào tạo từ chương trình'
    },
    {
        title: '>90+',
        content: 'Học viên feedback tốt về chương trình'
    },
    {
        title: '10+',
        content: 'Trường Đại học hợp tác trên khắp cả nước'
    },
]
