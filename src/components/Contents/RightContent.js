"use client"
import React from 'react';
import DuaCard from '../ui/DuaCard/DuaCard';
import { useSelector } from 'react-redux';


const RightContent = () => {
    const item= useSelector((state)=> state.CategoryNo)
    return (
        <div>
            <p>category No: {item}</p>
            <DuaCard></DuaCard>
        </div>
    );
};

export default RightContent;