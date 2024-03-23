"use client"
import React from 'react';
import DuaCard from '../ui/DuaCard/DuaCard';
import { useSelector } from 'react-redux';


const RightContent = () => {
    const item= useSelector((state)=> state.CategoryNo)
    return (
        <div className='h-[530px] overflow-hidden rounded-xl px-5'>
            <DuaCard></DuaCard>
        </div>
    );
};

export default RightContent;