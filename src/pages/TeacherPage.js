import BANNER from "../constants/banners";
import {CiSearch} from "react-icons/ci";
import {Swiper, SwiperSlide} from "swiper/react";
import {Link} from "react-router-dom";
import Pagination from "../components/Pagination";
import {MdKeyboardArrowRight} from "react-icons/md";

function TeacherPage() {
  return (
      <div className="container m-auto h-auto text-white">
          <section className="h-auto h-[300px] my-20 flex flex-col gap-5">
              <h1 className="text-4xl font-bold py-2"> CHUYÊN GIA CỦA CHÚNG TÔI </h1>
              <p className='w-1/2'>
                  Giảng viên tại Analytics là những người có ít nhất 5 năm kinh nghiệm trong lĩnh vực Data.
                  Giảng viên vừa trực tiếp làm việc tại các doanh nghiệp vừa song song giảng dạy tại Analytics.
                  Vì vậy, sinh viên Analytics sẽ được tiếp cận những kiến thức và nhu cầu thực tế nhất của ngành.
              </p>

              <div className='w-fit pt-5 flex justify-center cursor-pointer'>
                  <div className='text-white py-2 px-4 flex justify-center items-center rounded bg-gradient-to-r from-[#5E54F3] to-[#F74986]'>
                      <p className='text-xl font-medium'>Đăng ký ngay </p>
                      <MdKeyboardArrowRight size={30} />
                  </div>
              </div>
          </section>

          <section className="h-auto py-1">
              <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-8 py-10">
                      <h1 className="text-6xl font-bold"> ĐỘI NGŨ GIẢNG VIÊN </h1>
                  </div>
              </div>
          </section>

          <section className="h-auto pt-5">
              <div className="grid grid-cols-12 gap-5">
                  <TeacherCard />
                  <TeacherCard />
                  <TeacherCard />
                  <TeacherCard />
                  <TeacherCard />
                  <TeacherCard />
                  <TeacherCard />
                  <TeacherCard />
              </div>
          </section>

          <section className="h-auto pt-10 w-full flex items-center justify-center">
              <Pagination />
          </section>
      </div>
  );
}

export default TeacherPage;

function TeacherCard() {
    return (
        <div className="col-span-3 grid grid-rows-6 h-[500px] w-full cursor-pointer group">
            <div className="row-span-5 flex items-center w-full">
                <img src='/teacher.png' className='w-full h-full' />
            </div>

            <div className='line-clamp-2 w-full font-semibold pt-2 text-center'>
                Thầy <span className='text-[#5E54F3]'>Cao Kỹ Tùng</span>
                <p className='w-full font-light truncate'>Business Intelligence Leader tại Onpoint</p>
            </div>
        </div>
    )
}
