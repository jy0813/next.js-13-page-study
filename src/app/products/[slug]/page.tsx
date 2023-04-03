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