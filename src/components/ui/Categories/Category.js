'use client'
import alldua from '@/assets/alldua.svg';
import Image from 'next/image';
import Timeline from '../Timeline';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Category = ({ name, subCategoryNo, duaNo, icon, cat_id, subCategory }) => {
    const [category, setCategory] = useState(0)
    const [selectedCategory, setSelectedCategory] = useState([])

    const handleCategory = (id) => {
        console.log("clicked category is :", id);
        setCategory(id);
        console.log(subCategory);
    };
    //filter subcategory
    useEffect(() => {
        const filteredSubCategory = subCategory.filter(item => parseInt(item.cat_id) === category);
        setSelectedCategory(filteredSubCategory);
    }, [category, subCategory]);

    return (
        <div>
            <div className='flex justify-between px-3  rounded-lg py-1 hover:bg-gray-200 hover:cursor-pointer mt-2' onClick={() => handleCategory(cat_id)}>
                <div className='flex gap-2 items-center'>
                    <div>
                        <Image
                            src={alldua}
                            width={28}
                            height={32}
                            alt={icon}
                        >
                        </Image>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-sm font-semibold'>{name}</p>
                        <p className='text-xs text-gray-400'>sub-Category: {subCategoryNo}</p>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='text-lg'>{duaNo}</p>
                    <p className='text-xs'>Dua</p>
                </div>
            </div>
            <div className='ml-3'>
             
                    <Timeline subCategories={selectedCategory} />
             
            </div>
        </div>
    );
};

export default Category;