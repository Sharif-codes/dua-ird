import React from 'react';
import duaPic from '@/assets/dua-logo.svg'
import homePic from '@/assets/home.svg';
import Image from 'next/image';
import alldua from '@/assets/alldua.svg'
import memorize from '@/assets/memorize.svg'
import bookmark from '@/assets/bookmark.svg'
import ruqyah from '@/assets/ruqyah.svg'
import duainfo from '@/assets/duainfo.svg'
import books from '@/assets/books.svg'
import { FaHandHoldingHeart } from "react-icons/fa";

const LeftSideBar = () => {
    return (
        <div className='flex flex-col justify-between items-center py-7 mr-7 bg-white rounded-l-3xl  overflow-y-scroll h-[560px]'>
            <div className=''>
                <Image
                    src={duaPic}
                    width={40}
                    height={40}
                    alt='dua-logo'
                ></Image>
            </div>
            <div className='flex flex-col items-center space-y-4'>
                <div className='bg-slate-200 p-2 rounded-full'>
                    <Image
                        src={homePic}
                        width={16}
                        height={16}
                        alt='dua-logo'
                    ></Image>
                </div>
                <div className='bg-slate-200 p-2 rounded-full'>
                    <Image
                        src={alldua}
                        width={16}
                        height={16}
                        alt='dua-logo'
                    ></Image>
                </div>
                <div className='bg-slate-200 p-2 rounded-full'>
                    <Image
                        src={memorize}
                        width={16}
                        height={16}
                        alt='dua-logo'
                    ></Image>
                </div>
                <div className='bg-slate-200 p-2 rounded-full'>
                    <Image
                        src={bookmark}
                        width={16}
                        height={16}
                        alt='dua-logo'
                    ></Image>
                </div>
                <div className='bg-slate-200 p-2 rounded-full'>
                    <Image
                        src={ruqyah}
                        width={16}
                        height={16}
                        alt='dua-logo'
                    ></Image>
                </div>
                <div className='bg-slate-200 p-2 rounded-full'>
                    <Image
                        src={duainfo}
                        width={16}
                        height={16}
                        alt='dua-logo'
                    ></Image>
                </div>
                <div className='bg-slate-200 p-2 rounded-full'>
                    <Image
                        src={books}
                        width={16}
                        height={16}
                        alt='dua-logo'
                    ></Image>
                </div>
            </div>
            <div className='p-3 rounded-lg bg-green-600'>
                <FaHandHoldingHeart className='text-white'></FaHandHoldingHeart>
            </div>
        </div>
    );
};

export default LeftSideBar;