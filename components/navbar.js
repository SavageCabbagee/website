import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
    const [active, setActive] = useState(false);

    function handleClick() {
        setActive(!active);
    }

    return (
        <div>
            <nav className='flex flex-wrap items-center bg-black p-3'>
                <Link href = '/'>
                    <a className='inline-flex'> 
                        <Image 
                            src = '/pfp.jpg'
                            height = {32}
                            width = {32}
                            className='rounded-full'/>
                        <p className='text-white text-xl font-bold ml-2'> 
                            Cabbage</p>
                    </a>
                </Link>
                <button className='flex flex-col lg:hidden text-white ml-auto hover:bg-neutral-700 rounded' onClick={handleClick}>
                    <svg
                        className='w-6 h-6'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                        <path
                            strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M4 6h16M4 12h16M4 18h16'
                            />
                    </svg>
                </button>
                
                <div className={`${active ? '' : 'hidden'} 
                    flex flex-col lg:flex-row w-full lg:ml-auto lg:inline-flex lg:w-auto`}>
                    <Link href = '/'>
                        <a className='text-white text-m font-bold mx-2 my-1 p-1 hover:bg-neutral-700 rounded'>Home</a>
                    </Link>
                    <Link href = '/'>
                        <a className='text-white text-m font-bold mx-2 my-1 p-1 hover:bg-neutral-700 rounded'>Projects</a>
                    </Link>
                </div>
            </nav>
        </div>
    )
}