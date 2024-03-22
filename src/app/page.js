
import LeftContent from '@/components/Contents/LeftContent';
import RightContent from '@/components/Contents/RightContent';
import Header from '@/components/header/Header';
import Timeline from '@/components/ui/Timeline';
import React from 'react';

const HomePage = () => {
  return (
    <div className='flex-col'>
    <div className='h-12 border'>
      <Header></Header>
    </div>
    <div className='grid grid-cols-6'>
      <div className='col-span-2'>
        <LeftContent></LeftContent>
      </div>
      <div className='col-span-4'>
        <RightContent></RightContent>
      </div>
    </div>
  </div>
  

  );
};

export default HomePage;