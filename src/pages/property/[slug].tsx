import HeadContent from '@/components/HeadContent';
import { LayoutMain } from '@/components/layout';
import { useRouter } from 'next/router';
import React from 'react';

const PropertySlugPage = () => {
  const router = useRouter();
  console.log('PropertySlugPage ~ router:', router);
  return (
    <LayoutMain>
      <HeadContent title='PropertySlugPage'></HeadContent>
    </LayoutMain>
  );
};

export default PropertySlugPage;
