import React from 'react';
import profile from '@/assets/profile.svg'
import Image from 'next/image';
import language from '@/assets/language.svg'
import alldua from '@/assets/alldua.svg'
import general from '@/assets/general.svg'
const RightSideBar = () => {
    return (
        <div className='flex flex-col h-full'>
            <div className='flex justify-end border items-center h-16'>
                <Image
                    src={profile}
                    width={36}
                    height={36}
                    alt='profile'
                ></Image>
                <svg class="ml-2 mr-2" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.79241 5.97063C5.3921 6.49064 4.6079 6.49064 4.20759 5.97063L1.04322 1.85999C0.537025 1.20243 1.00579 0.25 1.83563 0.25L8.16437 0.250001C8.99421 0.250001 9.46298 1.20243 8.95678 1.86L5.79241 5.97063Z" fill="#868686"></path></svg>
            </div>
            <div className='bg-white rounded-l-2xl px-3 h-[490px]'>
                <div className='text-center py-8 flex items-center justify-center '>
                    <p>Setting</p>
                </div>
                <div className='border rounded-lg'>
                    <div className='flex items-center justify-between bg-gray-100 p-2 border-l-4  rounded border-green-600'>
                        <div className='bg-slate-200 p-2 rounded-full'>
                            <Image
                                src={language}
                                width={16}
                                height={16}
                                alt='dua-logo'
                            ></Image>
                        </div>
                        <div className='text-green-600 text-[11px] pr-3'>
                            <p >Language Setting</p>
                        </div>
                    </div>
                    <div className='flex gap-4 justify-center py-4'>
                        <button className='bg-green-600 text-white text-[10px] py-2 w-16 rounded'>English</button>
                        <button className='text-[10px] rounded py-2 w-16 border'>বাংলা</button>
                    </div>
                </div>
                <div className='space-y-3 mt-3'>
                    <div className='flex gap-4 items-center p-2 bg-gray-100 rounded-md hover:cursor-pointer'>
                        <div className='bg-slate-200 p-2 rounded-full'>
                            <Image
                                src={general}
                                width={16}
                                height={16}
                                alt='dua-logo'
                            ></Image>
                        </div>
                        <div className=''>
                            <p className='text-[11px] text-gray-600'>General Setting</p>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center p-2 bg-gray-100 rounded-md hover:cursor-pointer'>
                        <div className='bg-slate-200 p-2 rounded-full'>
                            <Image
                                src={alldua}
                                width={16}
                                height={16}
                                alt='dua-logo'
                            ></Image>
                        </div>
                        <div className=''>
                            <p className='text-[11px] text-gray-600'>Font Setting</p>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center p-2 bg-gray-100 rounded-md hover:cursor-pointer'>
                        <div className='bg-slate-200 p-2 rounded-full'>
                            <Image
                                src={alldua}
                                width={16}
                                height={16}
                                alt='dua-logo'
                            ></Image>
                        </div>
                        <div className=''>
                            <p className='text-[11px] text-gray-600'>Appearance Setting</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RightSideBar;