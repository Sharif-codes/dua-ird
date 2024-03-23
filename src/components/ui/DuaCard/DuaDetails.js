import Image from 'next/image';
import React from 'react';
import duacard from "@/assets/duacard.svg"
import copy from "@/assets/copy.svg"
import bookmark from "@/assets/bookmark.svg"
import memorize from "@/assets/memorize.svg"
import share from "@/assets/share.svg"
import report from "@/assets/report.svg"
import AudioPlay from './AudioPlay';

const DuaDetails = ({ dua_name, si, topDua, reference, dua_arabic, transliteration_en, translation_en,audioUrl }) => {
    console.log(audioUrl);
    return (
        <div className=" bg-white p-5 rounded-lg space-y-5">
            <div className='flex items-center gap-2'>
                <Image
                    src={duacard}
                    width={20}
                    height={20}
                    alt="dua card"
                ></Image>
                <div className='text-xs font-medium flex gap-1 text-green-600 justify-evenly'>
                    <p>{si}.</p>
                    <p>{dua_name}</p>
                </div>

            </div>

            <div className='text-[13px] text-gray-800 text-justify font-medium leading-5'>
                <p className=''>{topDua}</p>

            </div>
            <div className='text-right text-2xl'>
                <p >{dua_arabic}</p>
            </div>
            <div>
                {transliteration_en ? <p className='text-sm font-medium italic text-gray-700 text-justify'><span className='font-semibold'>Transliteration:</span> {transliteration_en}</p> : ""}
            </div>
            <div>
                {transliteration_en ? <p className='text-sm font-medium  text-gray-700 text-justify'><span className='font-semibold'>Translation: </span>{translation_en}</p> : ""}
            </div>

            <div className='text-sm font-medium'>
                <p className='text-green-600 '>Reference:</p>
                <p className='text-gray-700'>{reference}</p>
            </div>
            <div className='flex justify-between'>
                {audioUrl?<div>
                    <AudioPlay audioUrl={audioUrl}></AudioPlay>
                </div>:<div className="invisible">
                    <AudioPlay audioUrl={audioUrl}></AudioPlay>
                </div>}
                <div className='flex gap-5'>
                    <Image
                        src={copy}
                        width={20}
                        height={20}
                        alt='cpy'
                    
                    className='cursor-pointer'>
                    </Image>
                    <Image
                        src={bookmark}
                        width={16}
                        height={15}
                        alt='cpy'
                        className='cursor-pointer'
                    >
                    </Image>
                    <Image
                        src={memorize}
                        width={20}
                        height={15}
                        alt='cpy'
                        className='cursor-pointer'
                    >
                    </Image>
                    <Image
                        src={share}
                        width={20}
                        height={15}
                        alt='cpy'
                        className='cursor-pointer'
                    >
                    </Image>
                    <Image
                        src={report}
                        width={20}
                        height={15}
                        alt='cpy'
                        className='cursor-pointer'
                    >
                    </Image>
                </div>
            </div>
        </div>
    );
};

export default DuaDetails;