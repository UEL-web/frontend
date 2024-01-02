import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import TimeAgo from "javascript-time-ago";
import vi from "javascript-time-ago/locale/vi";
import SuggestBlogs from "../components/SuggestBlogs";
import {getBlogDetail} from "../apis/api";
import {toast} from "react-toastify";
import {toastConfig} from "../config/toastConfig";
import HtmlParse from "../components/HtmlParse";

TimeAgo.addDefaultLocale(vi)

// Create formatter (English).
const timeAgo = new TimeAgo('vi-VN')
function PolicyPage01(){
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);
    return (
        <div className="container max-w-7xl mx-auto m-auto text-white h-auto py-5">
            <div className='py-3 px-5 md:px-5 border-t border-secondary'>
                <p className="text-3xl font-semibold"> CHÍNH SÁCH VÀ QUY ĐỊNH CHUNG </p>
            </div>
            <div className="md:grid flex flex-col grid-cols-12 gap-4 h-auto">
                <div className='col-span-9 p-5 no-tailwindcss-base'>
                    <p><strong>I. NGUY&Ecirc;N TẮC CHUNG</strong><br />
                        <br />
                        Webvsite &ldquo;https://analytix.com&rdquo; thuộc quyền sử hữu v&agrave; vận h&agrave;nh của C&ocirc;ng ty TNNN Analytix (Gọi tắt l&agrave; Analytix)</p>

                    <p>Học vi&ecirc;n l&agrave; c&aacute;c c&aacute; nh&acirc;n/tổ chức đ&atilde; mua v&agrave; thanh to&aacute;n tiền mua Kh&oacute;a học online được đăng tải tr&ecirc;n website của AnalytiX.</p>

                    <p><strong>II. QUY ĐỊNH CHUNG</strong><br />
                        <br />
                        C&aacute;c từ ngữ được sử dụng trong b&agrave;i viết n&agrave;y được hiểu v&agrave; định nghĩa như sau:</p>

                    <p>Kh&oacute;a học: L&agrave; tập hợp c&aacute;c B&agrave;i giảng theo một chủ đề nhất định được b&aacute;n bởi AnalytiX.</p>

                    <p>Gi&aacute; b&aacute;n của Kh&oacute;a học: Ch&iacute;nh l&agrave; khoản tiền Học vi&ecirc;n cần phải thanh to&aacute;n cho AnalytiX để mua quyền học online của 01 Kh&oacute;a học. Gi&aacute; b&aacute;n của Kh&oacute;a học được đăng tr&ecirc;n &ldquo;https://analytix.com&rdquo; đ&atilde; bao gồm Thuế gi&aacute; trị gia tăng.</p>

                    <p>Giảng vi&ecirc;n/ Chuy&ecirc;n gia: L&agrave; những người c&oacute; kinh nghiệm v&agrave; chứng chỉ chuy&ecirc;n m&ocirc;n. Họ sẽ l&agrave; người hỗ trợ Học vi&ecirc;n, giải đ&aacute;p c&aacute;c vấn đề li&ecirc;n quan tới Kh&oacute;a học v&agrave; l&agrave; người k&yacute; hợp đồng với C&ocirc;ng ty để cung cấp, chịu tr&aacute;ch nhiệm về chất lượng của Kh&oacute;a học.</p>

                    <p><strong>III. T&Agrave;I KHOẢN ĐĂNG NHẬP CỦA HỌC VI&Ecirc;N</strong><br />
                        <br />
                        Sau khi mua Kh&oacute;a học, Học vi&ecirc;n cần lập t&agrave;i khoản tr&ecirc;n website &ldquo;https://analytix.com&rdquo; để c&oacute; thể truy cập v&agrave; học Kh&oacute;a học. Học vi&ecirc;n phải cung cấp đầy đủ v&agrave; ch&iacute;nh x&aacute;c th&ocirc;ng tin c&aacute; nh&acirc;n của m&igrave;nh như: T&ecirc;n, Email, Số điện thoại,&hellip; Đ&acirc;y l&agrave; những th&ocirc;ng tin bắt buộc để x&aacute;c thực v&agrave; li&ecirc;n quan đến việc hỗ trợ Học vi&ecirc;n trong qu&aacute; tr&igrave;nh sử dụng Kh&oacute;a học Online tr&ecirc;n website &ldquo;https://analytix.com&rdquo;.</p>

                    <p>T&agrave;i khoản đăng nhập của Học vi&ecirc;n l&agrave; t&agrave;i khoản c&aacute; nh&acirc;n v&agrave; chỉ một c&aacute; nh&acirc;n n&agrave;y mới c&oacute; th&ocirc;ng tin x&aacute;c nhận đăng k&yacute; tr&ecirc;n website &ldquo;https://analytix.com&rdquo;.</p>

                    <p>Học vi&ecirc;n c&oacute; nghĩa vụ tự bảo mật v&agrave; quản l&yacute; mật khẩu của m&igrave;nh. Nếu học vi&ecirc;n qu&ecirc;n mật khẩu c&oacute; thể truy cập v&agrave;o đường dẫn &ldquo;https://analytix.com/password/email&rdquo; để đặt lại mật khẩu. Học vi&ecirc;n cần điền đ&uacute;ng Email đ&atilde; đăng k&yacute; tr&ecirc;n website &ldquo;https://analytix.com&rdquo; để được cấp quyền c&agrave;i lại mật khẩu.</p>

                    <p>C&ocirc;ng ty kh&ocirc;ng hỗ trợ trường hợp Học vi&ecirc;n muốn đổi Email trong t&agrave;i khoản đ&atilde; c&oacute; Kh&oacute;a học được k&iacute;ch hoạt th&agrave;nh c&ocirc;ng.</p>

                    <p><strong>IV. ĐẢM BẢO AN TO&Agrave;N GIAO DỊCH</strong><br />
                        <br />
                        Người mua/Học vi&ecirc;n tuyệt đối kh&ocirc;ng được sử dụng bất kỳ c&ocirc;ng cụ hoặc h&igrave;nh thức n&agrave;o kh&aacute;c để can thiệp v&agrave;o hệ thống v&agrave; l&agrave;m thay đổi cấu tr&uacute;c dữ liệu của website &ldquo;https://analytix.com&rdquo;.</p>

                    <p>Nghi&ecirc;m cấm việc ph&aacute;t t&aacute;n, truyền b&aacute; hay cổ vũ cho bất kỳ hoạt động n&agrave;o với mục đ&iacute;ch can thiệp, ph&aacute; hoại hay x&acirc;m nhập hệ thống website &ldquo;https://analytix.com&rdquo;. Mọi vi phạm sẽ bị xử l&yacute; theo quyết định của AnalytiX v&agrave; quy định của ph&aacute;p luật.</p>

                    <p>C&aacute;c th&ocirc;ng đăng k&yacute; mua h&agrave;ng của Học vi&ecirc;n sẽ được bảo mật bằng c&aacute;ch sử dụng c&ocirc;ng nghệ m&atilde; h&oacute;a an to&agrave;n SSL &ndash; Secure Sockets Layer. Kh&ocirc;ng c&oacute; phương ph&aacute;p truyền qua Internet, hoặc phương ph&aacute;p lưu trữ điện tử v&agrave; an to&agrave;n 100%.</p>

                    <p>Mọi th&ocirc;ng tin giao dịch sẽ được bảo mật, trừ trường hợp bắt buộc phải cung cấp theo y&ecirc;u cầu của Cơ quan nh&agrave; nước c&oacute; thẩm quyền.</p>

                    <p><strong>V. ĐIỀU KHOẢN &Aacute;P DỤNG</strong><br />
                        <br />
                        C&aacute;c Ch&iacute;nh s&aacute;ch v&agrave; quy định c&oacute; hiệu lực kể từ thời điểm được MDA đăng l&ecirc;n website &ldquo;https://analytix.com&rdquo;. MDA c&oacute; quyền điều chỉnh v&agrave; thay đổi nội dung của Ch&iacute;nh s&aacute;ch/Quy định cho ph&ugrave; hợp với thực tiễn hoạt động.</p>

                    <p>C&oacute; tr&aacute;ch nhiệm th&ocirc;ng b&aacute;o đến Học Vi&ecirc;n trước khi &aacute;p dụng bằng h&igrave;nh thức đăng tải c&ocirc;ng khai l&ecirc;n website &ldquo;https://analytix.com&rdquo;. Ch&iacute;nh s&aacute;ch/Quy định sửa đổi/bổ sung c&oacute; hiệu lực sau 2 giờ kể từ giờ được đăng tải l&ecirc;n website &ldquo;https://analytix.com&rdquo;. Việc Học vi&ecirc;n tiếp tục sử dụng Kh&oacute;a học sau khi Quy chế sửa đổi được c&ocirc;ng bố v&agrave; c&oacute; hiệu lực đồng nghĩa với việc Học vi&ecirc;n đ&atilde; chấp nhận Ch&iacute;nh s&aacute;ch/Quy định sửa đổi n&agrave;y.</p>

                    <p>Th&ocirc;ng tin li&ecirc;n lạc ch&iacute;nh thức của AnalytiX:</p>

                    <p>C&ocirc;ng ty: TNHH AnalytiX<br />
                        Hotline: 0909 887 6578<br />
                        Email: anlytixsupport@gmail.com<br />
                        Địa chỉ: Số 669, Quốc lộ 1, Khu phố 3, phường Linh Xu&acirc;n, Thủ Đức, Tp.Hồ Ch&iacute; Minh</p>
                </div>

                <div className='col-span-3 '>
                    <div className='col-span-4 p-4  border border-gray-800 h-auto'>
                        <p className='text-secondary font-bold text-xl border-b border-gray-500'>Nên đọc</p>
                        <div className='col-span-4 h-fit gap-5 flex flex-col py-2'>
                            <SuggestBlogs/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default PolicyPage01;