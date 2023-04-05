import React from 'react';

type Props = {
  params:{
    slug:string;
  }
}
const Page = ({params}:Props) => {
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