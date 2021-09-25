//import { products } from '@chec/commerce.js/features/products';
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import getCommerce from "../utils/commerce";

export default function Home(props) {
  const { products } = props;
  return (
    <div className={styles.container}>
      <Head>
        <title>Saro Art Gallery</title>
        <meta
          name="description"
          content="Online Art Gallery. Developed by Fiorella Saro"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <img src={product.media.source} alt={product.name} height="80" />
              <h2>jejeje {product.name}</h2>
              <p>{product.price.formatted_with_symbol}</p>
            </div>
          );
        })}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const commerce = getCommerce();
  const { data: products } = await commerce.products.list();
  return {
    props: {
      products,
    },
  };
}
