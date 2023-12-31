import {Button, Form, Input, Select} from "antd";
import TextArea from "antd/es/input/TextArea";
import { MdKeyboardArrowRight } from "react-icons/md";
import {useEffect, useState} from "react";
import {createConsultationForm, getCourses} from "../apis/api";
import {toast} from "react-toastify";
import Loading from "./Loading";
import {toastConfig} from "../config/toastConfig";
import { Link, Element } from 'react-scroll';
import {getQueryVariable} from "../utils/getQuery";

function ConsultationForm() {
    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false)
    const [courses, setCourses] = useState(null)
    const { Option } = Select

    const handleInput = (e) => {
        // Loại bỏ tất cả các ký tự không phải số từ giá trị nhập vào
        const numericValue = e.target.value.replace(/[^0-9]/g, '');

        // Cập nhật giá trị của input
        e.target.value = numericValue;
    };

    useEffect(() => {
        setCourses(null)
        getCourses(null, getQueryVariable('category')).then((res) => {
            if (!res.success) return toast.error(res.message, toastConfig)
            setCourses(res.data)
        }).catch((err) => {
            setCourses([])
        })
    }, [])

    const handleSubmit = (values) => {
        if (loading) return
        setLoading(true)
        createConsultationForm(values).then((res) => {
            setLoading(false)
            if (!res.success) return toast.error(res.message, toastConfig)
            toast.success('Đăng ký thành công', toastConfig)
            form.resetFields()
        })
    }

  return (
      <Element name="contact" className="element">
        <div className='w-full border rounded-xl p-7'>
        <p className='md:text-3xl text-xl  text-center font-bold uppercase'> Liên hệ với chúng tôi </p>
        <Form
            form={form}
            layout='vertical'
            style={{ marginTop: '30px' }}
            requiredMark={false}
            onFinish={handleSubmit}
        >
            <Form.Item
                required tooltip="This is a required field"

                style={{ marginBottom: '0px'}}
               label={
                       <p style={{ fontWeight: 500, color: 'white' }}>Họ và tên                        <span style={{ color: 'red' }}>*</span>
                       </p>
               }
            >
                <Form.Item
                    name='firstName'
                    style={{ display: 'inline-block', width: 'calc(50% - 10px)', marginBottom: '20px' }}
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập họ của bạn!',
                        },
                    ]}
                >
                    <Input placeholder="Nguyen Van"  style={{ border: '1px solid black', borderRadius: '0', fontSize: '15px', padding: '7px' }} />
                </Form.Item>
                <Form.Item
                    name='lastName'
                    style={{ display: 'inline-block', width: 'calc(50% - 10px)', marginLeft: '20px', marginBottom: '20px' }}
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập tên của bạn!',
                        },
                    ]}
                >
                    <Input placeholder="A"  style={{ border: '1px solid black', borderRadius: '0', fontSize: '15px', padding: '7px' }} />
                </Form.Item>
            </Form.Item>

            <Form.Item
                name='email'
                rules={[
                    {
                        type: 'email',
                        message: 'E-mail không hợp lệ!',
                    },
                    {
                        required: true,
                        message: 'Vui lòng cung cấp E-mail!',
                    },
                ]}
                style={{ marginBottom: '20px'}}
                label={
                <p style={{ fontWeight: 500, color: 'white' }}>Email
                    <span style={{ color: 'red' }}>*</span>
                </p>}
            >
                <Input placeholder="abc@gmail.com"  style={{ border: '1px solid black', borderRadius: '0', fontSize: '15px', padding: '7px' }} />
            </Form.Item>

            <Form.Item
                rules={[{ required: true, message: 'Hãy để lại số điện thoại của bạn',
                }]}
                name='phoneNumber'
                onInput={handleInput}
                style={{ marginBottom: '20px'}}
                label={
                    <p style={{ fontWeight: 500, color: 'white' }}>Số điện thoại
                        <span style={{ color: 'red' }}>*</span>
                    </p>
                }>
                <Input placeholder="xxx xxx xxx"  style={{ border: '1px solid black', borderRadius: '0', fontSize: '15px', padding: '7px' }} />
            </Form.Item>

            <Form.Item
                rules={[{ required: true, message: 'Hãy để lại tên khóa học bạn quan tâm' }]}
                name='courseName'
                style={{ marginBottom: '20px', borderRadius: '0'}}
                label={
                    <p style={{ fontWeight: 500, color: 'white' }}>Khóa học quan tâm                         <span style={{ color: 'red' }}>*</span>
                    </p>
                }>
                <Select
                    loading={courses === null}
                    style={{ border: '1px solid black', borderRadius: '0', outline: 'none', fontWeight: 500, fontSize: '15px'}}
                >
                    {courses?.map((item, index) => (
                        <Option key={index}
                                style={{ fontWeight: 500, fontSize: '15px'}}
                                value={item.id}>{item.name}</Option>
                    ))}
                </Select>
            </Form.Item>

            <Form.Item
                name='message'
                style={{ marginBottom: '20px'}}
                label={
                    <p style={{ fontWeight: 500, color: 'white' }}>Lời nhắn</p>
                }>
                <TextArea rows={4} placeholder="Lời nhắn cho chúng tôi"  style={{ border: '1px solid black', borderRadius: '0', fontSize: '15px' }} />
            </Form.Item>

            <Form.Item style={{ marginBottom: '15px' }} >
                <div className='w-full outline flex justify-center cursor-pointer'>
                    <button htmltype='submit' className='text-white py-2 px-4 flex justify-center items-center rounded bg-gradient-to-r from-[#5E54F3] to-[#F74986]'>
                        {
                            loading ? <Loading /> :
                                <>
                                    <p className='text-xl font-medium'>Đăng ký ngay</p>
                                    <MdKeyboardArrowRight size={30} />
                                </>
                        }

                    </button>
                </div>
            </Form.Item>
        </Form>
    </div>
      </Element>
  );
}

export default ConsultationForm;