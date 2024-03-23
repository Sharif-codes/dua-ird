'use client'
import { useContext, useEffect, useState } from "react";
import { toggleCategoryContext } from "../Categories/Category";
import axios from "axios";
import RightContent from "@/components/Contents/RightContent";
import { useSelector } from "react-redux";


const DuaCard = () => {
    const category= useSelector((state)=> state.CategoryNo)
    const [categoriNo,setCategoriNo]= useState(null)
    const [dua,setDua]= useState([])
    useEffect(() => {
        setCategoriNo(category);
        axios.get(`http://localhost:4000/dua/${categoriNo}`)
        .then(res => {
            setDua(res.data);
        })
        .catch(err => {
            console.error("Error fetching dua data:", err);
            // Optionally, set dua state to an empty array or handle the error in a different way
        });
    }, [categoriNo, category]);
  console.log(dua);
    return (
            <div>
               {dua.length > 0 && dua.map(item => (
                <p key={item.id}>{item?.dua_name_en}</p>
            ))}
                
            </div>
      
        
    );
};

export default DuaCard;



