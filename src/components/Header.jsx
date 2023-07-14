import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Logo from "../../public/img/logo.png"

const Header = () => {
    const [navbar, setNavbar] = useState(false);

    return (
        <header className="w-full bg-blue-950 top-0 left-0 right-0 z-10">
            <div className="justify-between px-4 lg:px-0 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between md:block">
                        <div className='flex items-center justify-between md:py-5 gap-10'>
                            <Link href={"/"}> <Image src={Logo} width={100} alt='Logo' /> </Link>
                        </div>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}>
                                {navbar ? (
                                    <div className="bar text-white"> <i class="fa-solid fa-xmark"></i> </div>
                                ) : (
                                    <div className="close text-white"> <i class="fa-solid fa-bars"></i> </div>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                    <hr className='md:opacity-0 md:pt-3'></hr>
                <div>
                    <div className={`flex-1 justify-self-center md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'}`}>
                        <ul className=" md:h-auto items-center justify-center md:flex ">
                            <li className="text-xl text-white py-2 my-2 md:my-0 md:px-6 text-center md:border-b-0  hover:bg-blue-600 bg-blue-600 md:bg-transparent border-white  md:hover:text-blue-600 md:hover:bg-transparent">
                                <Link href="/" onClick={() => setNavbar(!navbar)} className='sm:px-52 md:px-0'> <i class="fa-solid fa-house"></i> Home</Link>
                            </li>

                            <li className="text-xl text-white py-2 my-2 md:my-0 px-6 text-center md:border-b-0  hover:bg-blue-600  bg-blue-600 md:bg-transparent border-white  md:hover:text-blue-600 md:hover:bg-transparent">
                                <Link href="about" onClick={() => setNavbar(!navbar)} className='sm:px-52 md:px-0'> <i class="fa-solid fa-book"></i> About</Link>
                            </li>

                            <li className="text-xl text-white py-2 my-2 md:my-0 px-6 text-center md:border-b-0  hover:bg-blue-600  bg-blue-600 md:bg-transparent border-white  md:hover:text-blue-600 md:hover:bg-transparent">
                                <Link href="contact" onClick={() => setNavbar(!navbar)} className='sm:px-48 md:px-0'> <i class="fa-solid fa-comment-dots"></i> Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header
