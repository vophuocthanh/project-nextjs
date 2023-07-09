import { IconBed, IconCross, IconLocation } from '@/components/icons';
import Image from 'next/image';
import React from 'react';
interface PropertyItemProps {
  children?: React.ReactNode;
}
const PropertyItem = ({ children }: PropertyItemProps) => {
  return (
    <div className='flex gap-x-3'>
      <Image
        src='https://images.unsplash.com/photo-1682687218608-5e2522b04673?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80'
        alt='image'
        height={150}
        width={200}
        className='flex-shrink-0 object-cover rounded-xl h-[130px]'
      ></Image>
      <div className='flex-1'>
        <span className='inline-block px-[10px] py-2 text-xs font-semibold leading-normal rounded-[5px] bg-secondary text-primary mb-3'>
          $7400
        </span>
        <h3 className='mb-2 text-base font-semibold leading-normal text-primaryText'>
          Metro Jayakarta Hotel & Spa
        </h3>
        <div className='flex items-center gap-1 mb-3 text-gray80 '>
          <IconLocation></IconLocation>
          <span className=''>North Carolina, USA</span>
        </div>
        <div className='flex items-center gap-2'>
          <div className='flex items-center gap-1'>
            <IconBed></IconBed>
            <span className='text-xs font-medium'>4 Beds</span>
          </div>
          <div className='flex items-center gap-1'>
            <IconCross></IconCross>
            <span className='text-xs font-medium'>28M</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyItem;
