import React from 'react';
import styles from './lauout.module.css'
import Link from "next/link";

const ProductLayout = ({children}: {
  children: React.ReactNode
}) => {
  return (
      <>
        <nav className={styles.nav}>
          <Link href="/products/man">여성옷</Link>
          <Link href="/products/women">남성옷</Link>
        </nav>
        <section className={styles.product}>
          {children}
        </section>
      </>
  );
};

export default ProductLayout;