import React, {useCallback, useRef} from "react";
import CardArchi from "../components/home/CardArchi";
import CardFeedback from "../components/home/CardFeedback";
import {Swiper, SwiperSlide} from "swiper/react";
import { Link as LinkScroll } from 'react-scroll';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import {Pagination, Autoplay, Navigation} from 'swiper/modules';
import CardTech from "../components/home/CardTech";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa";
import CardQuestion from "../components/home/CardQuestion";

import { motion } from 'framer-motion';
import {fadeIn, staggerContainer, textVariant2} from "../utils/motion";

export default function HomePageNew () {

    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <main className='container m-auto text-white h-auto mt-5'>
            <section className='h-auto lg:px-20 lg:pb-20 p-2'>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className='grid grid-cols-12 gap-5'
                >
                    <motion.div
                        variants={fadeIn('right', 'tween', 0.2, 0.5)}
                        className='lg:col-span-6 col-span-12 pt-10 lg:order-1 order-last'
                    >
                        <div className='w-full h-full flex items-end'>
                            <div>
                                <h1 className='lg:text-6xl text-5xl font-bold mb-4'>
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
                                    <LinkScroll to="contact" spy={true} smooth={true} duration={500}
                                        type='button'
                                        className='uppercase py-2 cursor-pointer px-4 rounded-full bg-white font-semibold text-sm bg-gradient-to-r from-linear-first to-linear-second text-white'
                                    >
                                        Tư vấn ngay
                                    </LinkScroll>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('left', 'tween', 0.2, 0.5)}
                        className='lg:col-span-6 col-span-12 pt-3 flex justify-center items-center order-2'
                    >
                        <img
                            src="/banner1.png"
                            alt=""
                        />
                    </motion.div>
                </motion.div>
            </section>

            <motion.section
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className='h-auto lg:p-20 p-2'
            >
                <motion.h2
                    variants={textVariant2}
                    initial="hidden"
                    whileInView="show"
                    className='lg:text-6xl text-5xl font-bold lg:pb-9 mb-9 text-center'
                >
                    Thành tựu ấn tượng
                </motion.h2>

                <div className='container my-10 w-full h-auto'>
                    <div className='grid grid-cols-4 gap-10 lg:px-0 px-20'>
                        {
                            archiData.map((item, index) => (
                                <CardArchi key={index} index={index} title={item.title} content={item.content} />
                            ))
                        }
                    </div>
                </div>
            </motion.section>

            <section className='h-auto px-20 py-20'>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className='grid grid-cols-2 gap-10'
                >
                    <div className='col-span-1 w-full h-full flex flex-col justify-around items-center'>
                        <motion.div
                            variants={fadeIn('left', 'tween', 0.2, 0.5)}
                            className='grid grid-cols-2 gap-5'
                        >
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
                        </motion.div>
                    </div>
                    <motion.div
                        variants={fadeIn('right', 'tween', 0.2, 0.5)}
                        className='col-span-1 w-full h-full'
                    >
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
                    </motion.div>
                </motion.div>
            </section>

            <section className='h-auto px-20 py-20'>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className='grid grid-cols-3 gap-10'
                >
                    <motion.div
                        variants={fadeIn('left', 'tween', 0.2, 0.5)}
                        className='col-span-1'
                    >
                        <p className='text-[70px] font-bold'>
                            Cảm nhận học viên
                        </p>
                    </motion.div>

                    <motion.div
                        variants={fadeIn('right', 'tween', 0.2, 0.5)}
                        className='col-span-2'
                    >
                        <div className='w-full h-auto bg-white rounded-3xl text-black p-3 '>
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
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
                    </motion.div>
                </motion.div>
            </section>
            <motion.section
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className='w-full h-auto'
            >
                <motion.div
                    variants={fadeIn('up', 'tween', 0.3, 0.5)}
                    className='my-20 text-white bg-gradient-to-r from-[#5E54F3] from-17% to-[#D743FB] to-103% rounded-3xl'
                >
                    <motion.p
                        variants={fadeIn('down', 'tween', 0.8, 0.2)}
                        className='text-center text-[60px] font-bold'
                    >
                        Công nghệ sử dụng
                    </motion.p>
                    <div className='px-[200px] py-10 relative'>
                        <Swiper
                            ref={sliderRef}
                            slidesPerView={4}
                            spaceBetween={0}
                            // pagination={{
                            //     clickable: true,
                            // }}
                            // modules={[Pagination]}
                            className="mySwiper"
                        >
                            {imgTechList.map((tech, index) => (
                                <SwiperSlide key={index}>
                                    <CardTech
                                        index={index}
                                        url={tech}
                                    />
                                </SwiperSlide>
                            ))}
                            {/*{imgTechList.map((tech, index) => (*/}
                            {/*    <SwiperSlide key={index}>*/}
                            {/*        <CardTech*/}
                            {/*            url={tech}*/}
                            {/*        />*/}
                            {/*    </SwiperSlide>*/}
                            {/*))}*/}
                        </Swiper>
                        <motion.button
                            variants={fadeIn('center', 'tween', 0.8, 0.2)}
                            type='button'
                            className='absolute top-1/2 left-20 transform -translate-y-1/2 border-none outline-none bg-white rounded-full w-[50px] h-[50px] flex justify-center items-center text-black text-3xl text-[#5E54F3]'
                            onClick={handlePrev}
                        >
                            <FaAngleLeft
                                color={'#5E54F3'}
                            />
                        </motion.button>
                        <motion.button
                            variants={fadeIn('center', 'tween', 0.8, 0.2)}
                            type='button'
                            className='absolute top-1/2 right-20 transform -translate-y-1/2 border-none outline-none bg-white rounded-full w-[50px] h-[50px] flex justify-center items-center text-black text-3xl'
                            onClick={handleNext}
                        >
                            <FaAngleRight
                                color={'#5E54F3'}
                            />
                        </motion.button>
                    </div>
                </motion.div>
            </motion.section>

            <section className='h-auto px-20 py-20'>
                <p className='text-center text-[60px] font-bold mb-5'>
                    Câu hỏi thường gặp
                </p>
                <div className='w-full h-auto grid grid-cols-2 gap-10'>
                    <div className='col-span-1 '>
                        {questionsList1.map((question, index) => (
                            <CardQuestion
                                key={index}
                                question={question}
                            />
                        ))}
                    </div>

                    <div className='col-span-1 '>
                        {questionsList2.map((question, index) => (
                            <CardQuestion
                                key={index}
                                question={question}
                            />
                        ))}
                    </div>
                </div>
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

const imgTechList = [
    '/tech1.png',
    '/tech2.png',
    '/tech3.png',
    '/tech1.png',
    '/tech2.png',
    '/tech3.png',
]

const questionsList1 = [
    'Khóa học này dành cho ai?',
    'Tôi cần có kiến thức gì trước khi tham gia khóa học?',
    'Khóa học sẽ đào tạo những kỹ năng gì?',
    'Tôi cần bao nhiêu thời gian để hoàn thành khóa học?',
    // 'Sau khi hoàn thành khóa học, tôi có thể làm được gì?',
    // 'Khóa học có yêu cầu bằng cấp gì không?',
    // 'Học phí của khóa học là bao nhiêu?',
    // 'Khóa học có đảm bảo tuyển dụng không?'
]

const questionsList2 = [
    'Sau khi hoàn thành khóa học, tôi có thể làm được gì?',
    'Khóa học có yêu cầu bằng cấp gì không?',
    'Học phí của khóa học là bao nhiêu?',
    'Khóa học có đảm bảo tuyển dụng không?'
]
