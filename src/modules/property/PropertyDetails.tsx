import HeadContent from '@/components/HeadContent';
import { Spinner } from '@/components/loading';
import { getProperty } from '@/store/properties.service';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React from 'react';

const PropertyDetails = () => {
  const router = useRouter();
  console.log('PropertyDetailsPage ~ router:', router);
  const id = parseInt(router.query.id as string);
  const { data, isLoading, error } = useQuery({
    queryKey: ['properties', id],
    queryFn: () => getProperty(id),
    staleTime: 1000 * 60 * 1, // 1 mins
    enabled: !!id, // !! convert sang boolean (true or false) true thì chạy, còn false thì nó sẽ không chạy
  });
  if (!data || error) return null;
  if (isLoading) return <Spinner></Spinner>;
  return (
    <div>
      <HeadContent
        title={data.title}
        image={data.image && data.image[0]}
      ></HeadContent>
    </div>
  );
};

export default PropertyDetails;