import Head from "next/head";
const PageHead = ({ page }) => {
  return (
    <Head>
         <link rel="icon" href="/img/hero/Chanthalogo.png" />
      <title>chantha | {page}</title>
    </Head>
  );
};

export default PageHead;
