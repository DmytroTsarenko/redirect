import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Redirect from './redirect';

const apiUrl = "https://app-eatly-prod.azurewebsites.net";

interface Props {
  data: any;
  link: string;
  id: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { route, id } = context.params!;

  let data: any = {
    title: "Eatly App",
    imageUrl: "/logo.png",
    description: "Vad blir det till middag?"
  };

  if (id && route == "recipes") {
    const res = await fetch(`${apiUrl}/recipe/get/${id}`);
    data = await res.json();
    data.description = `${data.cookingTimeInMinutes} minuter att laga mat med Eatly`;
  }

  if (route == "invite") {
    data.title = "Lägg till Eatly vän";
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
        <meta name="twitter:title" content={data.title} />
        <meta name="twitter:image" content={data.imageUrl}/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="og:description" content={data.description} />
      </Head>
      <Redirect route={link} id={id} />
    </>
  );
};