
function Logo({...props}) {
  return (
    <div className="logo" {...props}>
      <img src='/logo.png' alt="logo" className='w-full h-full scale-125' />
    </div>
  );
}

export default Logo;