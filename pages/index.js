import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import products from "../products.json";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favic on.ico' />
      </Head>
      {products.map((product) => (
        <div key={product.name} className={styles.product}>
          <div className={styles.productRow}>
            <div className={styles.productColImg}>
              <img src='' />
            </div>
            <div className={styles.productCol}>
              {product.name} {product.price}
              yea man
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
