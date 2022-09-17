import Image from 'next/image';


export default function Footer() {
    return (
        <div className='flex bottom-0 bg-slate-900 p-3 w-full items-center'>
            <p className='text-xs text-white'>Built with Next.js and Tailwind CSS</p>
            <div className='inline-flex text-xs ml-auto'>               
                <a href = 'https://twitter.com/Savageecabbage' target="_blank" rel="noopener noreferrer" className='p-1 hover:bg-neutral-700 rounded-full items-center'>
                    <Image
                        src = '/twt_white.svg'
                        height = {16}
                        width = {16}
                    />
                </a>
                <a href = 'https://github.com/SavageCabbagee' target="_blank" rel="noopener noreferrer" className='p-1 hover:bg-neutral-700 rounded-full items-center'>
                    <Image
                        src = '/gh_light.png'
                        height = {16}
                        width = {16}
                    />
                </a>
            </div>
        </div>
    )
}
