import {Form, Input} from "antd";
import Loading from "../components/Loading";
import {AiFillFacebook, AiFillGithub, AiOutlineGoogle} from "react-icons/ai";
import {Link} from "react-scroll";
import {useState} from "react";
import {useForm} from "antd/es/form/Form";
import {register} from "../apis/api";
import {toast} from "react-toastify";
import {setUserData} from "../utils/auth";

function RegisterPage() {
    const [form] = useForm()
    const [loading, setLoading] = useState(false)

    const handleInput = (e) => {
        // Loại bỏ tất cả các ký tự không phải số từ giá trị nhập vào
        const numericValue = e.target.value.replace(/[^0-9]/g, '');

        // Cập nhật giá trị của input
        e.target.value = numericValue;
    };


    const onLogin = (values) => {
        setLoading(true)
        if (loading) return
        register(values).then((res) => {
            if (!res.success) return toast.error(res.message)
            setLoading(false)
            toast.success(res.message)
        }).catch((err) => {
            console.log(err)
            setLoading(false)
        })
    }

  return (
      <div className='container mx-auto max-w-7xl mx-auto'>
          <div className='grid grid-cols-12 py-5 min-w-fit w-[400px] m-auto mt-3 bg-white rounded'>
              <div className='col-span-0 sm:col-span-2 lg:col-span-4' />
              <div className='col-span-12 px-4  flex flex-col items-center justify-start gap-3'>
                  <h1 className='text-xl pt-5 pb-2 font-semibold text-secondary'>Đăng ký</h1>
                  <Form
                      layout='vertical'
                      style={{ width: '100%' }}
                      name='form-login'
                      form={form}
                      requiredMark={false}
                      initialValues={{
                          username: '',
                          password: '',
                          email: '',
                          phoneNumber: ''
                      }}
                      onFinish={onLogin}
                  >
                      <Form.Item
                          rules={[{ required: true, message: 'Hãy cung cấp username' }]}
                          label={
                              <p style={{ fontWeight: 500}}>Username
                                  <span style={{ color: 'red' }}>*</span>
                              </p>
                          }
                          name='username'
                          style={{ marginBottom: '15px' }} labelCol={{ span: 24, style: { paddingBottom: 0, fontWeight: 500 } }}
                      >
                          <Input placeholder='username' style={{ border: '2px solid black', borderRadius: '0' }} />
                      </Form.Item>
                      <Form.Item
                          rules={[{ required: true, message: 'Hãy cung cấp mật khẩu' }]}
                          label={
                              <p style={{ fontWeight: 500}}>Password
                                  <span style={{ color: 'red' }}>*</span>
                              </p>
                          }
                          name='password'
                          labelCol={{ span: 24, style: { paddingBottom: 0, fontWeight: 500 } }}
                      >
                          <Input.Password placeholder='correct horse battery staple' style={{ border: '2px solid black', borderRadius: '0' }} />
                      </Form.Item>
                      <Form.Item
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
                          label={
                              <p style={{ fontWeight: 500 }}>Email
                                  <span style={{ color: 'red' }}>*</span>
                              </p>}
                           name='email'
                          labelCol={{ span: 24, style: { paddingBottom: 0, fontWeight: 500 } }}
                      >
                          <Input placeholder='email@gmail.com' style={{ border: '2px solid black', borderRadius: '0' }} />
                      </Form.Item>
                      <Form.Item
                          rules={[{ required: true, message: 'Hãy cũng cấp số điện thoại của bạn' }]}
                          label={
                              <p style={{ fontWeight: 500}}>Số điện thoại
                                  <span style={{ color: 'red' }}>*</span>
                              </p>
                          }
                          name='phoneNumber'
                          onInput={handleInput}
                          labelCol={{ span: 24, style: { paddingBottom: 0, fontWeight: 500 } }}
                      >
                          <Input placeholder='xxx xxx xxx' style={{ border: '2px solid black', borderRadius: '0' }} />
                      </Form.Item>
                      <Form.Item>
                          <button htmltype='submit' className="className='bg-primary w-full py-2 border-2 border-black text-black font-semibold active:outline-dashed'">
                              <span className='text-base'>
                                {loading ? <Loading /> : 'Đăng ký'}
                              </span>
                          </button>
                      </Form.Item>
                  </Form>

                  <div className='w-full flex items-center pb-5 justify-between'>
                      <div className='border-t border-black h-0 w-[40%]' />
                      <span className='col-span-2 text-base font-semibold'>
                        HOẶC
                      </span>
                      <div className='border-t border-black h-0 w-[40%]' />
                  </div>

                  <div className='w-full h-[40px] mb-5 flex gap-5'>
                      <div className='flex items-center w-[50%] border-2 border-black justify-center gap-2 hover:cursor-pointer active:outline-dashed'>
                          <AiFillFacebook className='w-[30px] h-[30px]' />
                          <span className='text-sm'>Facebook</span>
                      </div>

                      <div className='flex items-center w-[50%] border-2 border-black justify-center gap-2 hover:cursor-pointer active:outline-dashed'>
                          <AiOutlineGoogle className='w-[30px] h-[30px]' />
                          <span className='text-sm'>Google</span>
                      </div>
                  </div>

                  <div className='flex gap-1'>
                      <span className='text-base font-semibold'>Bạn chưa có tài khoản?</span>
                      <Link to='/register' title='register' className='text-base font-semibold text-secondary hover:underline'>Đăng ký</Link>
                  </div>
                  <div className='flex gap-1'>
                      <Link to='/password-reset' className='text-sm underline italic hover:underline'>Quên mật khẩu?</Link>
                  </div>

              </div>
              <div className='col-span-0 sm:col-span-2 lg:col-span-4' />
          </div>
      </div>
  );
}

export default RegisterPage;