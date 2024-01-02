import BANNER from "../constants/banners";
import { CiSearch } from "react-icons/ci";
import { Swiper, SwiperSlide } from 'swiper/react';
import { CiClock2 } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import 'swiper/css';
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import Pagination from "../components/Pagination";
import ConsultationForm from "../components/ConsultationForm";
import {useEffect, useState} from "react";
import {getCourseCategory, getCourses} from "../apis/api";
import {toast} from "react-toastify";
import Loading from "../components/Loading";
import {PATH} from "../constants/paths";
import {toastConfig} from "../config/toastConfig";
import {useDispatch} from "react-redux";
import {addToCart} from "../redux-action/cartAction";
import {getQueryVariable} from "../utils/getQuery";
import classnames from "classnames";
import {Link as LinkScroll} from "react-scroll";
import {MdKeyboardArrowRight} from "react-icons/md";

function CoursePage() {
    const [courses, setCourses] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)
    const [category, setCategory] = useState(null)
    const params = useParams()
    const location = useLocation()
    const [categoryName, setCategoryName] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        setCourses(null)
        getCourses(null, getQueryVariable('category')).then((res) => {
            if (!res.success) return toast.error(res.message, toastConfig)
            setCourses(res.data)
            setCurrentPage(res.current_page)
            setTotalPage(res.total_page)
            setCategoryName(res.category)
        }).catch((err) => {
            if (err.response.status === 404) return navigate('/404')
            setCourses([])
        })
    }, [params])

    useEffect(() => {
        getCourseCategory().then((res) => {
            if (!res.success) return toast.error(res.message, toastConfig)
            setCategory(res.data)
        }).catch((err) => {
            if (err.response.status === 404) return navigate('/404')
            setCategory([])
        })
    }, [])

    const handlePageChange = (pageNumber) => {
        if (pageNumber < 1 || pageNumber > totalPage) return
        if (pageNumber === currentPage) return
        getCourses(pageNumber).then((res) => {
            if (!res.success) return toast.error(res.message, toastConfig)
            setCourses(res.data)
            setCurrentPage(res.current_page)
            setTotalPage(res.total_page)
        })
    }

    return (
        <div className="container max-w-7xl mx-auto m-auto h-auto text-white px-5 md:px-0">
            <section className="h-auto relative z-0 w-full">
                <img src={BANNER.HOME} className='w-full'/>
                <LinkScroll className='absolute hidden md:block md:bottom-10 md:left-[40px] bottom-2 left-[10px] cursor-pointer' to="contact" spy={true} smooth={true} duration={500}>
                    <div className='text-white cursor-pointer md:py-2 md:px-4 py-1 px-2 flex justify-center items-center rounded bg-gradient-to-r from-[#5E54F3] to-[#F74986]'>
                        <p className='md:text-xl text-xs font-medium'> Đăng kí tư vấn ngay </p>
                        <MdKeyboardArrowRight size={30} />
                    </div>
                </LinkScroll>
            </section>

            <section className="h-auto py-1">
                <div className="md:grid flex flex-col grid-cols-12 gap-2">
                    <div className="col-span-8 md:py-10 py-3">
                        <h1 className="md:text-6xl text-3xl font-bold"> {categoryName} </h1>
                    </div>
                    <div className="col-span-4 hidden ml-auto py-3 md:flex justify-center items-center">
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
                    breakpoints={{
                        320: { slidesPerView: 2, spaceBetween: 5 },
                        480: { slidesPerView: 2, spaceBetween: 10 },
                        768: { slidesPerView: 3, spaceBetween: 10 },
                        1024: { slidesPerView: 4, spaceBetween: 10 },
                    }}
                >
                    {
                        category ? category.map((cate) => (
                                <SwiperSlide key={cate.name} className='bg-gradient-to-r from-[#F74986] to-white rounded-full p-[1.5px]'>
                                    <Link to={!getQueryVariable('category') || getQueryVariable('category') !== cate.slug ? '?category=' + cate.slug : PATH.COURSE} className='block bg-black rounded-full'>
                                        <p className={classnames("truncate py-3 px-4 text-center", {"text-secondary": getQueryVariable('category') === cate.slug})}>
                                            {cate?.name}
                                        </p>
                                    </Link>
                                </SwiperSlide>
                            )) :
                            <div className='h-[500px]'>
                                <Loading />
                            </div>
                    }
                </Swiper>
            </section>

            <section className="h-auto pt-5">
                <div className="grid grid-cols-12 gap-5">
                    {
                        courses && courses.length === 0
                        &&
                        <p className='text-2xl font-semibold text-center col-span-12 text-white'>
                            Không có khóa học nào
                        </p>
                    }
                    {
                        courses ? courses.map((course) => (
                            <CourseCard key={course.id} course={course} />
                        )) : <Loading />
                    }
                </div>
            </section>

            <section className="h-auto pt-10 w-full flex items-center justify-center">
                <Pagination currentPage={currentPage} totalPage={totalPage} onPageChange={handlePageChange} />
            </section>
        </div>
    );
}

export default CoursePage;

function CourseCard({course}) {
    const dispath = useDispatch();
    const handleAddToCart = () => {
        toast.success('Thêm vào giỏ hàng thành công', toastConfig)
        dispath(addToCart(course))
    }

    return (
        <div className="md:col-span-3 col-span-12 grid rounded-md overflow-hidden grid-rows-5 h-[400px] border border-gray-800 cursor-pointer">
            <div className="row-span-3 flex items-center">
                {
                    course?.course_img ? <img src={course?.course_img} className='w-full h-full object-cover' /> :
                        <img src='/default_img.png' className='w-full h-full object-cover' />
                }
            </div>

            <div className="row-span-2 px-2 flex flex-col items-start py-2 transition   ">
                <Link to={PATH.COURSE + "/" + course.slug} className='line-clamp-2 font-semibold hover:text-secondary leading-5'> {course?.name} </Link>
                <div className='pt-2 pb-1 flex gap-4'>
                    {
                        course.time &&
                        <div className='flex gap-1'>
                            <CiClock2 size={20} />
                            <span className='text-sm'> {course?.time} </span>
                        </div>
                    }

                    {
                        course.level &&
                        <div className='flex gap-1'>
                            <IoPersonOutline size={20} />
                            <span className='text-sm'> {course.level}  </span>
                        </div>
                    }

                </div>
                {
                    course.price && <p className='font-medium'> { course.price } </p>
                }
                <button onClick={handleAddToCart} className="mt-auto border px-3 mx-auto py-1 hover:opacity-80">Thêm vào giỏ hàng</button>
            </div>
        </div>
    )
}
