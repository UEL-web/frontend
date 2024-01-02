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
function PolicyPage02(){
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return (
        <div className="container max-w-7xl mx-auto m-auto text-white h-auto py-5">
            <div className='py-3 px-5 md:px-5 border-t border-secondary'>
                <p className="text-3xl font-semibold"> CHÍNH SÁCH VỀ QUYỀN RIÊNG TƯ </p>
            </div>
            <div className="md:grid flex flex-col grid-cols-12 gap-4 h-auto">
                <div className='col-span-9 p-5 no-tailwindcss-base'>
                    <p><span><strong>Ch&iacute;nh s&aacute;ch về quyền ri&ecirc;ng tư</strong></span></p>

                    <h2><span><strong>I. Ch&uacute;ng t&ocirc;i thu thập những th&ocirc;ng tin g&igrave;?</strong></span></h2>

                    <p><span>Ch&uacute;ng t&ocirc;i thu nhập th&ocirc;ng tin từ bạn khi bạn đăng k&yacute; tr&ecirc;n trang web của ch&uacute;ng t&ocirc;i. Dữ liệu c&aacute; nh&acirc;n m&agrave; </span><span><em>analytix.com</em></span><span> c&oacute; thể thu thập bao gồm, nhưng kh&ocirc;ng giới hạn:</span></p>

                    <ul>
                        <li><span>Họ t&ecirc;n;</span></li>
                        <li><span>Địa chỉ email;</span></li>
                        <li><span>Ng&agrave;y sinh;</span></li>
                        <li><span>Địa chỉ thanh to&aacute;n;</span></li>
                        <li><span>T&agrave;i khoản ng&acirc;n h&agrave;ng v&agrave; th&ocirc;ng tin thanh to&aacute;n;</span></li>
                        <li><span>Số điện thoại;</span></li>
                        <li><span>Giới t&iacute;nh;</span></li>
                        <li><span>Th&ocirc;ng tin được gửi bởi hoặc li&ecirc;n quan đến (c&aacute;c) thiết bị được sử dụng để truy cập v&agrave;o C&aacute;c Dịch vụ hoặc Nền tảng của ch&uacute;ng t&ocirc;i.</span></li>
                        <li><span>Bất kỳ th&ocirc;ng tin n&agrave;o kh&aacute;c về người d&ugrave;ng khi người d&ugrave;ng đăng nhập để sử dụng C&aacute;c Dịch Vụ hoặc Nền tảng của ch&uacute;ng t&ocirc;i</span></li>
                        <li><span>Dữ liệu tổng hợp về nội dung người d&ugrave;ng sử dụng.</span></li>
                    </ul>

                    <p><span>Bạn c&oacute; thể tự chỉnh sửa được t&ecirc;n trong trang quản l&yacute; t&agrave;i khoản. Nếu cần đổi email đăng nhập hoặc số điện thoại, bạn cần gửi y&ecirc;u cầu cho ch&uacute;ng t&ocirc;i v&agrave; trải qua c&aacute;c bước x&aacute;c thực.</span></p>

                    <h2><span><strong>II. Ch&uacute;ng t&ocirc;i sẽ l&agrave;m g&igrave; với th&ocirc;ng tin của bạn?</strong></span></h2>

                    <p><span>Analytix sử dụng th&ocirc;ng tin ch&uacute;ng t&ocirc;i thu thập cho c&aacute;c mục đ&iacute;ch:</span></p>

                    <ul>
                        <li><span>Để xem x&eacute;t v&agrave;/hoặc xử l&yacute; đơn đăng k&yacute;/giao dịch; đăng k&yacute; email của bạn với ch&uacute;ng t&ocirc;i.</span></li>
                        <li><span>Để quản l&yacute; việc bạn sử dụng dịch vụ của ch&uacute;ng t&ocirc;i.</span></li>
                        <li><span>Để đ&aacute;p ứng, xử l&yacute;, giải quyết hoặc ho&agrave;n tất một giao dịch v&agrave;/hoặc đ&aacute;p ứng c&aacute;c y&ecirc;u cầu của bạn đối với c&aacute;c sản phẩm v&agrave; dịch vụ nhất định v&agrave; th&ocirc;ng b&aacute;o cho bạn về c&aacute;c vấn đề dịch vụ v&agrave; c&aacute;c hoạt động t&agrave;i khoản bất thường;</span></li>
                        <li><span>Để thực thi c&aacute;c Điều Khoản Dịch Vụ của ch&uacute;ng t&ocirc;i.</span></li>
                        <li><span>Để bảo vệ sự an to&agrave;n c&aacute; nh&acirc;n v&agrave; c&aacute;c quyền, t&agrave;i sản hoặc sự an to&agrave;n của người kh&aacute;c;</span></li>
                        <li><span>Để nhận dạng v&agrave;/hoặc x&aacute;c minh;</span></li>
                        <li><span>Để giải quyết hoặc tạo điều kiện dịch vụ kh&aacute;ch h&agrave;ng, thực hiện c&aacute;c khiếu nại của bạn, giải quyết hoặc trả lời bất kỳ thắc mắc n&agrave;o được gửi bởi (hoặc nhằm được gửi bởi) bạn hoặc thay mặt bạn;</span></li>
                        <li><span>Để li&ecirc;n hệ với bạn hoặc li&ecirc;n lạc với bạn qua điện thoại, tin nhắn văn bản, email nhằm mục đ&iacute;ch quản trị quan hệ của bạn với ch&uacute;ng t&ocirc;i</span></li>
                        <li><span>Để gửi th&ocirc;ng b&aacute;o tới bạn qua tr&igrave;nh duyệt ;</span></li>
                        <li><span>Để tiến h&agrave;nh c&aacute;c hoạt động nghi&ecirc;n cứu, ph&acirc;n t&iacute;ch v&agrave; ph&aacute;t triển (bao gồm, nhưng kh&ocirc;ng giới hạn ở, ph&acirc;n t&iacute;ch dữ liệu, khảo s&aacute;t, ph&aacute;t triển v&agrave;/hoặc lập đặc t&iacute;nh sản phẩm v&agrave; dịch vụ), để ph&acirc;n t&iacute;ch c&aacute;ch thức bạn sử dụng C&aacute;c Dịch Vụ của ch&uacute;ng t&ocirc;i, để cải thiện C&aacute;c Dịch Vụ hoặc sản phẩm của ch&uacute;ng t&ocirc;i v&agrave;/hoặc để cải thiện trải nghiệm kh&aacute;ch h&agrave;ng của bạn</span></li>
                        <li><span>V&igrave; mục đ&iacute;ch tiếp thị, gửi cho bạn qua email, th&ocirc;ng tin v&agrave; t&agrave;i liệu tiếp thị v&agrave; quảng b&aacute; li&ecirc;n quan đến c&aacute;c sản phẩm v&agrave;/hoặc dịch vụ. Bạn c&oacute; thể hủy đăng k&yacute; nhận c&aacute;c th&ocirc;ng tin tiếp thị tại bất cứ thời điểm n&agrave;o bằng c&aacute;ch sử dụng chức năng hủy đăng k&yacute; email.</span></li>
                        <li><span>Để ngăn chặn hoặc điều tra bất kỳ hoạt động gian lận, phi ph&aacute;p, thiếu s&oacute;t hay h&agrave;nh vi sai tr&aacute;i n&agrave;o, cho d&ugrave; c&oacute; li&ecirc;n quan đến việc bạn sử dụng C&aacute;c Dịch Vụ của ch&uacute;ng t&ocirc;i.</span></li>
                        <li><span>V&igrave; mục đ&iacute;ch tiếp thị, gửi cho bạn qua email, th&ocirc;ng tin v&agrave; t&agrave;i liệu tiếp thị v&agrave; quảng b&aacute; li&ecirc;n quan đến c&aacute;c sản phẩm v&agrave;/hoặc dịch vụ. Bạn c&oacute; thể hủy đăng k&yacute; nhận c&aacute;c th&ocirc;ng tin tiếp thị tại bất cứ thời điểm n&agrave;o bằng c&aacute;ch sử dụng chức năng hủy đăng k&yacute; email.</span></li>
                        <li><span>Để ngăn chặn hoặc điều tra bất kỳ hoạt động gian lận, phi ph&aacute;p, thiếu s&oacute;t hay h&agrave;nh vi sai tr&aacute;i n&agrave;o, cho d&ugrave; c&oacute; li&ecirc;n quan đến việc bạn sử dụng C&aacute;c Dịch Vụ của ch&uacute;ng t&ocirc;i.</span></li>
                    </ul>

                    <h2><span><strong>III. Bảo mật</strong></span></h2>

                    <p><span>Bảo mật th&ocirc;ng tin c&aacute; nh&acirc;n của bạn l&agrave; rất quan trọng với ch&uacute;ng t&ocirc;i. C&aacute;c th&ocirc;ng đăng k&yacute; mua h&agrave;ng của bạn sẽ được bảo mật bằng c&aacute;ch sử dụng c&ocirc;ng nghệ m&atilde; h&oacute;a an to&agrave;n SSL &ndash; Secure Sockets Layer. Kh&ocirc;ng c&oacute; phương ph&aacute;p truyền qua Internet, hoặc phương ph&aacute;p lưu trữ điện tử, l&agrave; 100% an to&agrave;n. V&igrave; vậy, trong khi ch&uacute;ng t&ocirc;i cố gắng sử dụng phương tiện m&atilde; h&oacute;a an to&agrave;n để bảo vệ th&ocirc;ng tin c&aacute; nh&acirc;n của bạn, ch&uacute;ng t&ocirc;i kh&ocirc;ng thể đảm bảo an ninh tuyệt đối.</span></p>

                    <h2><span><strong>IV. Cookies v&agrave; c&ocirc;ng nghệ ph&acirc;n t&iacute;ch dữ liệu kh&aacute;c</strong></span></h2>

                    <p><span>Cookies l&agrave; một lượng nhỏ dữ liệu, được gửi tới tr&igrave;nh duyệt của bạn từ một trang web v&agrave; được lưu trữ tr&ecirc;n ổ đĩa cứng của m&aacute;y t&iacute;nh. Cookies cho ph&eacute;p trang web hoặc hệ thống của c&aacute;c b&ecirc;n cung cấp dịch vụ nhận diện tr&igrave;nh duyệt của bạn v&agrave; lưu lại một số th&ocirc;ng tin nhất định. Ch&uacute;ng t&ocirc;i d&ugrave;ng cookies để hiểu v&agrave; lưu trữ hoạt động của bạn v&agrave; đ&aacute;p ứng c&aacute;c nhu cầu của bạn tốt hơn cho lần truy cập sau.</span></p>

                    <p><span>Ch&uacute;ng t&ocirc;i sử dụng Google Analytics như được m&ocirc; tả trong &ldquo;C&aacute;ch Google sử dụng dữ liệu khi bạn sử dụng trang web hoặc ứng dụng của c&aacute;c đối t&aacute;c của ch&uacute;ng t&ocirc;i&rdquo;. Bạn c&oacute; thể ngăn chặn dữ liệu của bạn kh&ocirc;ng cho Google Analytics sử dụng tr&ecirc;n trang web bằng c&aacute;ch c&agrave;i đặt tr&igrave;nh bổ sung tr&igrave;nh duyệt kh&ocirc;ng tham gia Google Analytics tại đ&acirc;y. Ch&uacute;ng t&ocirc;i cũng sử dụng che dấu địa chỉ IP, một kỹ thuật được sử dụng để chặn c&aacute;c địa chỉ IP được thu thập bởi Google Analytics v&agrave; lưu trữ ch&uacute;ng dưới dạng viết tắt để ngăn chặn bị truy t&igrave;m lại với người d&ugrave;ng c&aacute; nh&acirc;n. Một số trang web của ch&uacute;ng t&ocirc;i cũng c&oacute; thể sử dụng Google Analytics cho Nh&agrave; quảng c&aacute;o Hiển thị H&igrave;nh ảnh bao gồm DoubleClick hoặc Tiếp thị lại động cung cấp quảng c&aacute;o dựa tr&ecirc;n sở th&iacute;ch dựa tr&ecirc;n lượt truy cập của bạn v&agrave;o trang web n&agrave;y hoặc c&aacute;c trang web kh&aacute;c. Bạn c&oacute; thể sử dụng C&agrave;i đặt Quảng c&aacute;o để quản l&yacute; quảng c&aacute;o Google m&agrave; bạn nh&igrave;n thấy v&agrave; chọn kh&ocirc;ng tham gia quảng c&aacute;o dựa tr&ecirc;n sở th&iacute;ch.</span></p>

                    <h2><span><strong>V. Ch&uacute;ng t&ocirc;i c&oacute; cung cấp th&ocirc;ng tin cho b&ecirc;n kh&aacute;c kh&ocirc;ng?</strong></span></h2>

                    <p><span>Ch&uacute;ng t&ocirc;i kh&ocirc;ng b&aacute;n, trao đổi, hoặc sử dụng c&aacute;c h&igrave;nh thức thương mại kh&aacute;c với những th&ocirc;ng tin c&aacute; nh&acirc;n của bạn.</span></p>

                    <h2><span><strong>VI. Truy cập, cập nhật v&agrave; x&oacute;a dữ liệu c&aacute; nh&acirc;n của bạn</strong></span></h2>

                    <p><span>Bạn c&oacute; thể truy cập v&agrave; cập nhật dữ liệu c&aacute; nh&acirc;n m&agrave; AnalytiX thu thập v&agrave; lưu giữ của bạn theo c&aacute;ch sau đ&acirc;y:</span></p>

                    <ul>
                        <li><span>Để cập nhật dữ liệu m&agrave; bạn trực tiếp cung cấp, h&atilde;y đăng nhập v&agrave;o t&agrave;i khoản của bạn v&agrave; cập nhật t&agrave;i khoản bất kỳ l&uacute;c n&agrave;o.</span></li>
                        <li><span>Nếu bạn gặp kh&oacute; khăn trong việc chấm dứt t&agrave;i khoản, vui l&ograve;ng li&ecirc;n hệ với Hotline </span><span><strong>0961 48 66 48</strong></span><span> của ch&uacute;ng t&ocirc;i.</span></li>
                    </ul>

                    <ul>
                        <li><span>Xin lưu &yacute;: ngay cả sau khi t&agrave;i khoản của bạn bị chấm dứt, một số hoặc tất cả dữ liệu của bạn vẫn c&oacute; thể hiển thị cho những người kh&aacute;c, bao gồm nhưng kh&ocirc;ng giới hạn ở bất kỳ dữ liệu n&agrave;o đ&atilde; được (a) sao ch&eacute;p, lưu trữ hoặc phổ biến bởi những người d&ugrave;ng kh&aacute;c (bao gồm cả b&igrave;nh luận tr&ecirc;n nội dung); (b) được bạn hoặc những người kh&aacute;c chia sẻ hoặc phổ biến (kể cả trong nội dung được chia sẻ của bạn); hoặc (c) được đăng l&ecirc;n nền tảng của b&ecirc;n thứ ba. Ngay cả sau khi t&agrave;i khoản của bạn bị chấm dứt, ch&uacute;ng t&ocirc;i vẫn lưu giữ dữ liệu của bạn trong khoảng thời gian ch&uacute;ng t&ocirc;i c&oacute; mục đ&iacute;ch hợp ph&aacute;p để l&agrave;m như vậy (v&agrave; ph&ugrave; hợp với luật hiện h&agrave;nh), bao gồm hỗ trợ việc thực hiện c&aacute;c nghĩa vụ ph&aacute;p l&yacute;, giải quyết tranh chấp v&agrave; thực thi c&aacute;c thỏa thuận của ch&uacute;ng t&ocirc;i. Ch&uacute;ng t&ocirc;i c&oacute; thể giữ lại v&agrave; tiết lộ dữ liệu đ&oacute; theo Ch&iacute;nh s&aacute;ch về quyền ri&ecirc;ng tư n&agrave;y sau khi t&agrave;i khoản của bạn bị chấm dứt.</span></li>
                        <li><span>Để y&ecirc;u cầu truy cập, chỉnh sửa hoặc x&oacute;a dữ liệu c&aacute; nh&acirc;n của bạn, vui l&ograve;ng li&ecirc;n hệ với Hotline 0961 48 66 48.</span></li>
                    </ul>

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

export default PolicyPage02;