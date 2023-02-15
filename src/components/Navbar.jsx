const Navbar = () => {
  return (
    <nav className='text-white bg-opacity-60 bg-black'>
        <div className="max-w-[1280px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:h-23">
            <h1 className='text-4xl font-semibold'>PhoneFixers</h1>
            <ul className='flex flex-col md:flex-row font-semibold'>
                <li className='p-4'>
                    <div className='text-center'>📧 Email Support</div>
                    <div className='text-center'>support@phonefixers.com</div>
                </li>
                <li className='p-4'>
                    <div className='text-center'>📞 Call Support</div>
                    <div className='text-center'>012-345-6789</div>
                </li>
                <li className='p-4'>
                    <div className='bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded'>
                        <a className='w-20 block mx-auto md:w-auto' href='/#about_us'>About Us</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar