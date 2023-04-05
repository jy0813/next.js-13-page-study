import React from 'react';
import Link from "next/link";

const products = ['shirt', 'pants', 'skirt', 'shoes'];

const Page = () => {
  return (
      <div>
        <h1>products Page!</h1>
        <ul>
          {products.map((product, index) => <li key={index}><Link href={`products/${product}`}>{product}</Link></li>)}
        </ul>
      </div>
  );
};

export default Page;