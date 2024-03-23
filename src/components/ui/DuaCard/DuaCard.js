import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import Image from "next/image";
import DuaDetails from "./DuaDetails";

export async function generateStaticParams() {
    const res = await fetch("http://localhost:4000/dua")
    const duas = await res.json()
    const cat_id = duas.map(dua => {
        return {
            id: dua.cat_id
        }
    })
    return cat_id
}

const DuaCard = () => {
    const [subCategory, setSubCategory] = useState([])
    const category = useSelector((state) => state.CategoryNo)
    const [duas, setDuas] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:4000/dua/${category}`)
            .then(res => {
                setDuas(res.data);
            })
            .catch(err => {
                console.error("Error fetching dua data:", err);
            });
    }, [category]);

    console.log(duas);


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
    const findSubcategoryName=(subcatId)=>{
        const findSubCategory= subCategory.find((item)=>item.subcat_id==subcatId)
        return findSubCategory.subcat_name_en
    } 
  
    // Group duas by subcategory ID
    const groupedDuas = {};
    duas.forEach(dua => {
        if (!groupedDuas[dua.subcat_id]) {
            groupedDuas[dua.subcat_id] = [];
        }
        groupedDuas[dua.subcat_id].push(dua);
    });

    return (
        <div className="h-full overflow-y-auto">
            {Object.keys(groupedDuas).map(subcatId => (
                <div key={subcatId} className="space-y-4 mb-3">
                    <div className="bg-white p-3 rounded-lg flex gap-1 text-xs font-medium"><p className="text-green-500 ">section:</p><p>{findSubcategoryName(subcatId)}</p></div>
                    {groupedDuas[subcatId].map((dua, idx) => (
        
                           <DuaDetails key={idx} dua_name={dua.dua_name_en} reference={dua.refference_en} si={dua.id} topDua={dua.top_en} dua_arabic={dua.dua_arabic} transliteration_en={dua.transliteration_en} translation_en={dua.translation_en} audioUrl={dua.audio} ></DuaDetails>
                           
                    ))}
                </div>
            ))}
        </div>
    );
};

export default DuaCard;
