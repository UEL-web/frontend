import styled from '@emotion/styled'
import tw from 'twin.macro'
import {Link, useLocation} from "react-router-dom";
import Logo from "./Logo";
import {LABEL, PATH} from "../constants/paths";
import classnames from "classnames";
import Cart from "./Cart";
import {useState, Fragment} from "react";
import {getUserData} from "../utils/auth";
import {PiUserCircleLight} from "react-icons/pi";
import {AiOutlineExport, AiOutlineSetting} from "react-icons/ai";
import {IoIosArrowDown, IoIosLogOut} from "react-icons/io";
import {Menu, Transition} from "@headlessui/react";

function Header() {
    const [user, setUser] = useState(getUserData())
  return (
    <HeaderSection>
      <div className='container mx-auto max-w-[1280px]'>
          <div className='grid grid-cols-12 gap-2'>
              <div className='col-span-2 flex'>
                  <Link
                      to={PATH.HOME}
                      aria-label='home'
                      className='hidden lg:inline-flex rounded active:outline-dashed'
                   >
                      <Logo className='text-gray-800 h-10 ' />
                  </Link>
              </div>

              <div className='col-span-8 outline'>
                  <nav className='outline h-full flex items-center justify-center'>
                      <NavButton href={PATH.HOME}>
                          {LABEL.HOME}
                      </NavButton>

                      <NavButton href={PATH.COURSE}>
                          {LABEL.COURSE}
                      </NavButton>

                      <NavButton href={PATH.DOCUMENT}>
                          {LABEL.DOCUMENT}
                      </NavButton>

                      <NavButton href={PATH.TEACHER}>
                          {LABEL.TEACHER}
                      </NavButton>

                      <NavButton href={PATH.BLOG}>
                          {LABEL.BLOG}
                      </NavButton>

                  </nav>
              </div>

              <div className='col-span-2 flex items-center justify-end gap-5'>
                  <Cart />
                  {
                        user ? (
                            <nav className='items-center w-fit'>
                                <div className='bg-secondary'>
                                    <NavButton href='/login/'>
                                        {LABEL.LOGIN}
                                    </NavButton>
                                </div>
                            </nav>
                        ) : (
                            <Menu as='div' className='relative inline-block text-left w-full text-white'>
                                <div className='w-full h-full flex items-center'>
                                    <Menu.Button className='w-full flex justify-center items-center'>
                                        <PiUserCircleLight className='w-7 h-7 mx-1' />
                                        <p className='max-w-[70%] mr-1 overflow-hidden text-base overflow-ellipsis h-full text-start flex items-center'>Bao Minh</p>
                                        <IoIosArrowDown className='w-4 h-4' />
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter='transition ease-out duration-100'
                                    enterFrom='transform opacity-0 scale-95'
                                    enterTo='transform opacity-100 scale-100'
                                    leave='transition ease-in duration-75'
                                    leaveFrom='transform opacity-100 scale-100'
                                    leaveTo='transform opacity-0 scale-95'
                                >
                                    <Menu.Items>
                                        <div className='absolute p-2 right-0 w-56 mt-1 origin-top-right bg-white divide-y divide-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        className={`${
                                                            active ? 'bg-gray-900' : 'text-gray-900'
                                                        } group flex items-center w-full px-3 py-2 text-sm`}
                                                    >
                                                        <IoIosLogOut className='w-5 h-5' />
                                                        <span className='ml-2'>Đăng xuất</span>
                                                    </button>
                                                )}
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        )
                  }
              </div>
          </div>
      </div>
    </HeaderSection>
  );
}

export default Header;

const HeaderSection = styled.div`
  ${tw`
    w-full
    p-2
    sticky
    bg-primary
  `}
`

const MenuButton = styled(Link)`
  color: #ffffff;
  ${tw`
    px-4
    py-1
    inline-flex
    rounded
    hover:underline
    text-base
  `}
  &.active {
    ${tw`
      font-semibold
      underline
      text-secondary
    `}
  }
`

const NavButton = ({ href, children, ...otherProps }) => {
    const location = useLocation()
    return (
        <MenuButton
            to={href}
            className={classnames({ active: href.replace(/\//g, '') === location.pathname.split('/')[1] && location.pathname.split('/')[1] !== 'login' })}
            {...otherProps}
        >
            {children}
        </MenuButton>
    )
}