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
function PolicyPage03(){
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);
    return (
        <div className="container max-w-7xl mx-auto m-auto text-white h-auto py-5">
            <div className='py-3 px-5 md:px-5 border-t border-secondary'>
                <p className="text-3xl font-semibold"> CHÍNH SÁCH BẢO MẬT </p>
            </div>
            <div className="md:grid flex flex-col grid-cols-12 gap-4 h-auto">
                <div className='col-span-9 p-5 no-tailwindcss-base'>
                    <h1><span><strong>1. Ch&iacute;nh s&aacute;ch về quyền ri&ecirc;ng tư tr&ecirc;n mạng</strong></span></h1>

                    <p><span>AnalytiX cam kết đảm bảo an to&agrave;n th&ocirc;ng tin của kh&aacute;ch h&agrave;ng qua cổng th&ocirc;ng tin n&agrave;y. Vui l&ograve;ng đọc &ldquo;Ch&iacute;nh s&aacute;ch về quyền ri&ecirc;ng tư tr&ecirc;n mạng&rdquo; để hiểu về c&aacute;ch m&agrave; ch&uacute;ng t&ocirc;i nỗ lực x&acirc;y dựng niềm tin nơi kh&aacute;ch h&agrave;ng cũng như ch&iacute;nh s&aacute;ch bảo mật của website.</span><br />
                        <span>Ch&iacute;nh s&aacute;ch về quyền ri&ecirc;ng tư tr&ecirc;n mạng &aacute;p dụng cho kh&aacute;ch h&agrave;ng truy cập trang web </span><a href="https://analytix.com"><span><strong>https://analytix.com</strong></span></a><span>, trang facebook v&agrave; c&aacute;c trang c&oacute; li&ecirc;n quan.</span></p>

                    <h1><span><strong>2. Thu thập th&ocirc;ng tin</strong></span></h1>

                    <p><span>C&aacute;c cấp độ th&ocirc;ng tin được thu thập qua trang web rất đa dạng t&ugrave;y theo nhu cầu cung cấp th&ocirc;ng tin của kh&aacute;ch h&agrave;ng. Việc thu thập c&aacute;c th&ocirc;ng tin n&agrave;y được thiết kế nhằm ph&ugrave; hợp với định hướng của người d&ugrave;ng v&agrave; gi&uacute;p cho ch&uacute;ng t&ocirc;i c&oacute; thể cung cấp dịch vụ tốt hơn cho họ. Một số loại th&ocirc;ng tin m&agrave; trang web của AnalytiX c&oacute; thể thu thập nếu người d&ugrave;ng đồng &yacute;: T&ecirc;n kh&aacute;ch h&agrave;ng, Số CMND, Th&ocirc;ng tin li&ecirc;n lạc (Số điện thoại, địa chỉ thư điện tử), địa chỉ, h&igrave;nh ảnh&hellip;</span></p>

                    <h1><span><strong>3. Quyền sử dụng th&ocirc;ng tin</strong></span></h1>

                    <p><span>Th&ocirc;ng tin m&agrave; AnalytiX thu thập sẽ được d&ugrave;ng cho việc trả lời c&aacute;c c&acirc;u hỏi thắc mắc hoặc c&aacute;c mối quan t&acirc;m từ kh&aacute;ch h&agrave;ng đăng k&yacute; l&agrave; th&agrave;nh vi&ecirc;n tại c&aacute;c sự kiện do AnalytiX t&agrave;i trợ v&agrave;/hoặc kịp thời cung cấp c&aacute;c th&ocirc;ng tin khi được y&ecirc;u cầu. Bằng việc sử dụng trang web của ch&uacute;ng t&ocirc;i, AnalytiX c&oacute; thể lấy được c&aacute;c th&ocirc;ng tin chung mang t&iacute;nh thống k&ecirc; v&iacute; dụ như: t&ecirc;n miền, địa chỉ IP hoặc loại tr&igrave;nh duyệt của những người sử dụng trang web của ch&uacute;ng t&ocirc;i. C&aacute;c th&ocirc;ng tin lấy được từ tập tin nhật k&yacute; kh&ocirc;ng chứa đựng c&aacute;c th&ocirc;ng tin gi&uacute;p x&aacute;c định danh t&iacute;nh c&aacute; nh&acirc;n, như t&ecirc;n, địa chỉ, điện thoại, v.v&hellip; v&agrave; chỉ được sử dụng cho mục đ&iacute;ch thống k&ecirc; chung.</span></p>

                    <h1><span><strong>4. C&aacute;c trang Web kh&ocirc;ng thuộc AnalytiX</strong></span></h1>

                    <p><span>AnalytiX kh&ocirc;ng chịu tr&aacute;ch nhiệm về c&aacute;c ch&iacute;nh s&aacute;ch về quyền ri&ecirc;ng tư cũng như nội dung của bất cứ trang web n&agrave;o tr&ecirc;n mạng Internet c&oacute; thể c&oacute; đường dẫn đến trang web của AnalytiX. Xin được lưu &yacute; rằng khi bạn bấm chuột v&agrave;o c&aacute;c trang web ngo&agrave;i trang web </span><a href="https://analytix.com"><span><strong>https://analytix.com</strong></span></a><span>, bạn đ&atilde; được chuyển sang một trang web kh&aacute;c c&oacute; thể kh&ocirc;ng thuộc quyền quản l&yacute; của AnalytiX. Ch&uacute;ng t&ocirc;i khuyến nghị bạn n&ecirc;n đọc c&aacute;c ch&iacute;nh s&aacute;ch về quyền ri&ecirc;ng tư của c&aacute;c trang web được dẫn đến đ&oacute; v&igrave; c&aacute;c ch&iacute;nh s&aacute;ch về quyền ri&ecirc;ng tư của họ c&oacute; thể kh&aacute;c với ch&iacute;nh s&aacute;ch của ch&uacute;ng t&ocirc;i.</span></p>

                    <h1><span><strong>5. Chia sẻ c&aacute;c th&ocirc;ng tin được thu thập</strong></span></h1>

                    <p><span>Trang web AnalytiX được thiết kế để cung cấp cho c&aacute;c kh&aacute;ch h&agrave;ng hiện hữu, c&aacute;c kh&aacute;ch h&agrave;ng tiềm năng của ch&uacute;ng t&ocirc;i v&agrave; những người viếng thăm trang web của ch&uacute;ng t&ocirc;i, một phương thức bảo mật để c&oacute; được c&aacute;c th&ocirc;ng tin về C&ocirc;ng ty ch&uacute;ng t&ocirc;i, c&aacute;c dịch vụ v&agrave; sản phẩm của ch&uacute;ng t&ocirc;i, v&agrave; để giao dịch với ch&uacute;ng t&ocirc;i qua Internet. Trang web của ch&uacute;ng t&ocirc;i sẽ chỉ thu thập c&aacute;c th&ocirc;ng tin m&agrave; bạn tự nguyện cung cấp để gi&uacute;p ch&uacute;ng t&ocirc;i đ&aacute;p ứng c&aacute;c y&ecirc;u cầu của bạn. Nếu bạn đ&atilde; cung cấp c&aacute;c th&ocirc;ng tin c&aacute; nh&acirc;n tr&ecirc;n trang web của ch&uacute;ng t&ocirc;i để y&ecirc;u cầu được tư vấn, hoặc để y&ecirc;u cầu ch&uacute;ng t&ocirc;i trả lời c&aacute;c c&acirc;u hỏi&hellip; ch&uacute;ng t&ocirc;i c&oacute; thể phải chia sẻ c&aacute;c th&ocirc;ng tin đ&oacute; cho c&aacute;c b&ecirc;n được ủy th&aacute;c, nếu cần thiết, để phục vụ c&aacute;c y&ecirc;u cầu của bạn. Bảo vệ c&aacute;c th&ocirc;ng tin thu thập v&agrave; bảo đảm an to&agrave;n th&ocirc;ng tin C&aacute;c th&ocirc;ng tin c&aacute; nh&acirc;n bạn đ&atilde; cung cấp sẽ được tiếp cận bởi một số nh&acirc;n vi&ecirc;n v&agrave; đại l&yacute; của AnalytiX, những người cần biết c&aacute;c th&ocirc;ng tin đ&oacute; để phục vụ c&aacute;c y&ecirc;u cầu của bạn. AnalytiX duy tr&igrave; c&aacute;c biện ph&aacute;p v&agrave; quy tr&igrave;nh bảo vệ th&ocirc;ng tin tu&acirc;n thủ c&aacute;c quy định của ph&aacute;p luật nhằm bảo vệ c&aacute;c th&ocirc;ng tin c&aacute; nh&acirc;n của bạn. AnalytiX sẽ lưu giữ c&aacute;c th&ocirc;ng tin thu thập được trong thời gian ph&aacute;p luật y&ecirc;u cầu hoặc cho ph&eacute;p.</span></p>

                    <h1><span><strong>6. Th&ocirc;ng b&aacute;o về c&aacute;c thay đổi</strong></span></h1>

                    <p><span>Ch&iacute;nh S&aacute;ch Về Quyền Ri&ecirc;ng Tư Tr&ecirc;n Internet n&agrave;y c&oacute; thể được sửa đổi v&agrave;o từng thời điểm. Nếu Ch&iacute;nh S&aacute;ch Về Quyền Ri&ecirc;ng Tư tr&ecirc;n Internet thay đổi, ch&uacute;ng t&ocirc;i sẽ cập nhật c&aacute;c thay đổi đ&oacute; tr&ecirc;n trang web n&agrave;y tại địa chỉ </span><a href="https://analytix.com"><span><strong>https://analytix.com</strong></span></a><span>. Bạn c&oacute; thể v&agrave;o trang web n&agrave;y thường xuy&ecirc;n để đọc bản cập nhật mới nhất của Ch&iacute;nh S&aacute;ch Về Quyền Ri&ecirc;ng Tư Tr&ecirc;n Internet.</span></p>

                    <p>&nbsp;</p>

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

export default PolicyPage03;