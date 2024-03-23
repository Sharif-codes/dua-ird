"use client"
import axios from "axios";
import { useEffect, useState } from "react";

const Timeline = ({ subCategories }) => {
  // const [timeline,setTimeline]= useState([])

  // useEffect(()=>{
  //   axios.get(`http://localhost:4000/SubCategory/${cat_id}`)
  //   .then(res=>{
  //     console.log(res.data)
  //     setTimeline(res.data)
  //   })
  // },[cat_id])


  // console.log(subCategories);
  return (
    // <div className='p-2'>
    //   <ol className="relative border-dotted border-l border-green-600 dark:border-gray-700">
        
    //       <li className="mb-2 ms-4">
    //         <div className="absolute w-2 h-2 bg-green-600 rounded-full mt-1.5 -start-1 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
    //         <button className="text-xs text-gray-500 dark:text-white text-start"></button>
    //       </li>
      
    //   </ol>
    // </div>
    <div className='p-2'>
      <ol className="relative border-dotted border-l border-green-600 dark:border-gray-700">
        {subCategories?.map((item) => (
          <li key={item.id} className="mb-2 ms-4">
            <div className="absolute w-2 h-2 bg-green-600 rounded-full mt-1.5 -start-1 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <button className="text-xs text-gray-500 dark:text-white text-start">{item.subcat_name_en}</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Timeline;
