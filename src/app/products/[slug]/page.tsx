import React from 'react';
import {notFound} from "next/navigation";

type Props = {
  params:{
    slug:string;
  }
}
const Page = ({params}:Props) => {
  if(params.slug === 'nothing') {
    notFound()
  }
  return (
      <div>
        <h1>{params.slug} Page!</h1>
      </div>
  );
};

export default Page;

export function generateStaticParams() {
  const products= ['pants', 'skirt'];
  return products.map(product => ({
    slug:product
  }))
}