import { LayoutMain } from '@/components/layout';
import { API_URL } from '@/config';
import PropertyItem from '@/modules/property/PropertyItem';
import { getProperties } from '@/store/properties.service';
import { PropertyItemData } from '@/types/property.types';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PropertyPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['properties'],
    queryFn: () => getProperties(),
    refetchOnWindowFocus: false, // mặc định là true, cái này để fetch lại data
    cacheTime: 24 * 10 * 60 * 60 * 1000, // 1 day, cacheTime phải lâu hơn staleTime
    staleTime: 24 * 5 * 60 * 60 * 1000, // 1/2 day, staleTime là cái thời gian để fetching data
  });
  const properties = data;
  return (
    <LayoutMain>
      <div className='flex items-center justify-between mb-5'>
        <h1 className='font-bold text-[25px] text-primaryText'>
          Property List
        </h1>
        <button className='flex items-center justify-center px-5 py-3 text-sm text-white rounded-[10px] hover:bg-blue-400 bg-primary text-medium leading-normal'>
          + Add Property
        </button>
      </div>
      <div className='p-5 bg-white rounded-2xl'>
        <div className='' aria-label='filter'></div>
        <div
          className='grid grid-cols-2 gap-x-16 gap-y-6 mb-9'
          aria-label='list'
        >
          {properties &&
            properties.length > 0 &&
            properties.map((item: PropertyItemData, index: number) => (
              <PropertyItem item={item} key={item.id}></PropertyItem>
            ))}
        </div>
        <div
          className='flex items-center justify-between'
          aria-label='pagination'
        >
          <p className='text-gray80'>Showing 1 to 10 Propertys</p>
          <div className='flex items-center gap-[10px]'>
            <button className='flex items-center justify-center text-white rounded-lg w-9 h-9 bg-primary '>
              1
            </button>
            <button className='flex items-center justify-center rounded-lg w-9 h-9 text-gray80 '>
              2
            </button>
          </div>
        </div>
      </div>
    </LayoutMain>
  );
};

export default PropertyPage;
