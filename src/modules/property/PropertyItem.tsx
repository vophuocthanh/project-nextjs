import { IconBeds, IconCross, IconLocation } from '@/components/icons';
import { PropertyItemData } from '@/types/property.types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
interface PropertyItemProps {
  // children?: React.ReactNode;
  item: PropertyItemData;
}
const PropertyItem = ({ item }: PropertyItemProps) => {
  if (!item) return null;
  return (
    <Link
      href={{
        pathname: '/property/[id]',
        query: { id: item.id },
      }}
      className='flex gap-x-3'
    >
      <Image
        src={item.image && item.image.length > 0 ? item.image[0] : ''}
        alt='image'
        height={150}
        width={200}
        className='object-cover rounded-xl'
        priority
      ></Image>
      <div className='flex-1'>
        <span className='inline-block px-[10px] py-2 text-xs font-semibold leading-normal rounded-[5px] bg-secondary text-primary mb-3'>
          ${item.price}
        </span>
        <h3 className='mb-2 text-base font-semibold leading-normal text-primaryText'>
          {item.title}
        </h3>
        <div className='flex items-center gap-1 mb-3 text-gray80 '>
          <IconLocation></IconLocation>
          <span className=''>{item.address}</span>
        </div>
        <div className='flex items-center gap-2'>
          <div className='flex items-center gap-1'>
            <IconBeds></IconBeds>
            <span className='text-xs font-medium'>{item.info?.beds}</span>
          </div>
          <div className='flex items-center gap-1'>
            <IconCross></IconCross>
            <span className='text-xs font-medium'>{item.info?.area}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyItem;
