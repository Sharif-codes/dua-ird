// import alldua from '@/assets/alldua.svg';
// import Image from 'next/image';
// import Timeline from '../Timeline';
// import { createContext, useEffect, useState } from 'react';
// import DuaCard from '../DuaCard/DuaCard';

// export const toggleCategoryContext = createContext();

// const Category = ({ name, subCategoryNo, duaNo, icon, cat_id, subCategory }) => {
//     const [category, setCategory] = useState(null);
//     const [selectedCategory, setSelectedCategory] = useState([]);

//     const handleCategory = (id) => {
//         setCategory(prevCategory => prevCategory === id ? null : id); 
//         // setCategory(null)
//         // setCategory(id)
//     };

//     // Filter subcategory when category changes
//     useEffect(() => {
//         if (category === null) {
//             setSelectedCategory([]); // If no category is selected, clear the selected category
//         } else {
//             const filteredSubCategory = subCategory.filter(item => parseInt(item.cat_id) === category);
//             setSelectedCategory(filteredSubCategory);
//         }
//     }, [category, subCategory]);

//     return (
//         <div>
//             <div className='flex justify-between px-3 rounded-lg  hover:bg-gray-200 hover:cursor-pointer mt-2' onClick={() => handleCategory(cat_id)}>
//                 <div className='flex gap-2 items-center'>
//                     <div>
//                         <Image
//                             src={alldua}
//                             width={28}
//                             height={32}
//                             alt={icon}
//                         />
//                     </div>
//                     <div className='flex flex-col'>
//                         <p className='text-sm font-semibold'>{name}</p>
//                         <p className='text-xs text-gray-400'>sub-Category: {subCategoryNo}</p>
//                     </div>
//                 </div>
//                 <div className='flex flex-col items-center'>
//                     <p className='text-lg'>{duaNo}</p>
//                     <p className='text-xs'>Dua</p>
//                 </div>
//             </div>
//             <div className='ml-3'>
//                 {selectedCategory?.length > 0 && (
//                     <Timeline subCategories={selectedCategory} />
//                 )}
//                 {/* <Timeline cat_id={category}></Timeline> */}
//             </div>
//             <div className='hidden'>
//             <toggleCategoryContext.Provider value={category}>
//                 <DuaCard></DuaCard>
//             </toggleCategoryContext.Provider>
//             </div>
           
//         </div>
//     );
// };

// export default Category;

// Category component
'use client'
import alldua from '@/assets/alldua.svg';
import Image from 'next/image';
import Timeline from '../Timeline';
import { createContext, useEffect, useState } from 'react';
import DuaCard from '../DuaCard/DuaCard';
import RightContent from '@/components/Contents/RightContent';
import { useDispatch, useSelector } from 'react-redux';
import { selectedCategoryNo } from '@/Redux/Categoryslice';
import { removeCategoryNO } from '@/Redux/Categoryslice';

// export const toggleCategoryContext = createContext();

const Category = ({ name, subCategoryNo, duaNo, icon, cat_id, subCategory }) => {
    
    const [category, setCategory] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const dispatch= useDispatch()
    const item= useSelector((state)=> state.CategoryNo)
    const selected= item[0]
    const handleCategory = (id) => {
        setCategory(prevCategory => prevCategory === id ? null : id);
        dispatch(removeCategoryNO(id))
        dispatch(selectedCategoryNo(id))
        
    };

    useEffect(() => {
        if (selected === null) {
            setSelectedCategory([]); 
        } else {
            const filteredSubCategory = subCategory.filter(item => parseInt(item.cat_id) === selected);
            setSelectedCategory(filteredSubCategory);
        }
    }, [category, selected, subCategory]);

    return (
        <div>
            <div className='flex justify-between px-3 rounded-lg  hover:bg-gray-200 hover:cursor-pointer mt-2' onClick={() => handleCategory(cat_id)}>
                <div className='flex gap-2 items-center'>
                    <div>
                        <Image
                            src={alldua}
                            width={28}
                            height={32}
                            alt={icon}
                        />
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
            {cat_id == selected? <div className='ml-3'>
                {selectedCategory?.length > 0 && (
                    <Timeline subCategories={selectedCategory} />
                )}
            </div>: <div className='ml-3'>
               
            </div>}
           
            <div>
            </div>
        </div>
    );
};

export default Category;

