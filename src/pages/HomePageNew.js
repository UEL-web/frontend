import React from "react";
import CardArchi from "../components/home/CardArchi";

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
                                <div className='w-full h-auto flex items-center justify-between bg-gradient-to-b from-linear-first-rgba to-linear-second-rgba p-5 rounded-full'>
                                    <input
                                        type="email"
                                        placeholder="Email/ Số điện thoại"
                                        className='w-3/5 h-full bg-white outline-none text-white p-2 rounded-full'
                                    />
                                    <button
                                        type='button'
                                        className='uppercase py-2 px-4 rounded-full bg-white font-semibold text-sm bg-gradient-to-r from-linear-first to-linear-second text-white'
                                    >
                                        Tư vấn ngay
                                    </button>
                                </div>
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