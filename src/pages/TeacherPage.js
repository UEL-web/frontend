
import Pagination from "../components/Pagination";
import {MdKeyboardArrowRight} from "react-icons/md";
import {useEffect, useState} from "react";
import {getTeacher} from "../apis/api";
import {toast} from "react-toastify";
import {toastConfig} from "../config/toastConfig";
import Loading from "../components/Loading";
import { Link as LinkScroll } from 'react-scroll';
import BANNER from "../constants/banners";

function TeacherPage() {
    const [teachers, setTeachers] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)

    useEffect(() => {
        setTeachers(null)
        getTeacher().then((res) => {
            if (!res.success) return toast.error(res.message, toastConfig)
            setTeachers(res.data)
            setCurrentPage(res.current_page)
            setTotalPage(res.total_page)
        })
    }, [])

    const handlePageChange = (pageNumber) => {
        if (pageNumber < 1 || pageNumber > totalPage) return
        if (pageNumber === currentPage) return
        getTeacher(pageNumber).then((res) => {
            if (!res.success) return toast.error(res.message, toastConfig)
            setTeachers(res.data)
            setCurrentPage(res.current_page)
            setTotalPage(res.total_page)
        })
    }

  return (
      <div className="container max-w-7xl mx-auto m-auto h-auto text-white px-5 md:px-0">
          <section className="h-auto relative">
              <img src={BANNER.TEACHER} className='w-full'/>
              <LinkScroll className='absolute hidden md:block md:bottom-10 md:left-[40px] bottom-2 left-[10px] cursor-pointer' to="contact" spy={true} smooth={true} duration={500}>
                  <div className='text-white cursor-pointer md:py-2 md:px-4 py-1 px-2 flex justify-center items-center rounded bg-gradient-to-r from-[#5E54F3] to-[#F74986]'>
                      <p className='md:text-xl text-xs font-medium'> Đăng kí tư vấn ngay </p>
                      <MdKeyboardArrowRight size={30} />
                  </div>
              </LinkScroll>
          </section>

          <section className="h-auto py-1">
              <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-8 py-0 md:py-10">
                      <h1 className="md:text-6xl text-2xl font-bold"> ĐỘI NGŨ GIẢNG VIÊN </h1>
                  </div>
              </div>
          </section>

          <section className="h-auto pt-5">
              <div className="grid grid-cols-12 gap-5">
                  {
                      teachers ? teachers?.map((teacher) => (
                          <TeacherCard teacher={teacher} key={teacher.name} />
                      )) :
                      <div className='h-[500px] flex justify-center items-center col-span-12'>
                          <Loading />
                      </div>
                  }
              </div>
          </section>

          <section className="h-auto pt-10 w-full flex items-center justify-center">
              <Pagination currentPage={currentPage} totalPage={totalPage} onPageChange={handlePageChange} />
          </section>
      </div>
  );
}

export default TeacherPage;

function TeacherCard({teacher}) {
    return (
        <div className="md:col-span-4 col-span-6 grid grid-rows-6 md:h-[550px] h-[350px] w-full cursor-pointer group">
            <div className="row-span-5 flex items-center w-full">
                {
                    teacher?.avatar ? <img src={teacher?.avatar} className='w-full h-full rounded' /> :
                        <img src='/default_img.png' className='w-full h-full rounded' />
                }
            </div>

            <div className='line-clamp-2 w-full font-semibold pt-2 text-center'>
                <span className='text-[#5E54F3]'>{teacher?.name}</span>
                <p className='w-full font-light truncate'> {teacher?.title} </p>
            </div>
        </div>
    )
}
