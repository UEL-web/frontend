import styled from '@emotion/styled'
import tw from 'twin.macro'
import {Link, useLocation} from "react-router-dom";
import Logo from "./Logo";
import {LABEL, PATH} from "../constants/paths";
import classnames from "classnames";
import Cart from "./Cart";

function Header() {
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

              <div className='col-span-2'>
                  <Cart />
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
    // bg-primary
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
            className={classnames({ active: href.replace(/\//g, '') === location.pathname.split('/')[1] })}
            {...otherProps}
        >
            {children}
        </MenuButton>
    )
}