"use client"
import axios from "axios";
import Category from "../ui/Categories/Category";
import { useEffect, useState } from "react";

const LeftContent = () => {
    const [category,setCategory]= useState([])
    const [subCategory, setSubCategory]= useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/category')
            .then(response => {
                console.log(response.data);
                setCategory(response.data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, []);

 useEffect(() => {
    axios.get('http://localhost:4000/SubCategory')
        .then(response => {
            console.log(response.data)
            setSubCategory(response?.data);
        })
        .catch(error => {
            console.error('Error fetching categories:', error);
        });
}, []);
console.log(subCategory);
    return (
        <div className=" w-full h-[530px] overflow-hidden rounded-xl">
            <div className="bg-green-600 text-sm text-white text-center py-3 ">
                <p>Categories</p>
            </div>
            <div className="bg-white  ">
                <div className="p-2">
                    <form className="max-w-md mx-auto">
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-3 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block outline-none w-full p-3 ps-10 text-xs text-gray-900 border-2 border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-600 focus:border-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Categories" required />
                        </div>
                    </form>
                </div>
                <div className="overflow-y-auto h-[450px]">
                <div className="p-2">
                        {category?.map((item,idx) => (
                            <Category key={idx} cat_id={item.cat_id} subcat_id={item.subcat_id}	dua_id={item.dua_id} name={item.cat_name_en}  subCategoryNo={item.no_of_subcat} duaNo={item.no_of_dua} icon={item.cat_icon} subCategory={subCategory} />
                        ))}
                    </div>
                </div>

            </div>

        </div>
    );
};

export default LeftContent;
