import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Redirect from './redirect';

const apiUrl = "https://app-eatly-prod.azurewebsites.net/recipe/get";

interface Props {
  data: any;
  link: string;
  id: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { route, id } = context.params!;
  console.log(route, id);

  let data = {
    title: "Eatly App",
    imageUrl: "/logo.png",
  };

  if (id) {
    const res = await fetch(`${apiUrl}/${id}`);
    data = await res.json();
  }

  return {
    props: {
      data,
      id: id,
      link: route
    },
  };
};

export default function Page ({ data, link, id }: Props) {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <link rel="icon" href="/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta property="og:title" content={data.title} />
        <meta property="og:image" content={data.imageUrl} />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="1024" />
        <meta property="og:description" content={data.cookingTimeInMinutes + 'minuter att laga mat med Eatly'} />
      </Head>
      <Redirect route={link} id={id} />
    </>
  );
};