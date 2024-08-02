import Redirect from './redirect';

const apiUrl = "https://app-eatly-prod.azurewebsites.net/recipe/get";

export type PageParams = {
  params: {
    link: string[]
  }
}

type PageData = {
  title: string,
  imageUrl: string
}

export default async function Page({ params }: PageParams) {
  let [link, id]: string[] = [];

  let data: PageData = {
    title: "Eatly App",
    imageUrl: "/logo.png"
  };

  if (params.link) {
    [link, id] = params.link;
  }

  if (id) {
    const res = await fetch(`${apiUrl}/${id}`);
    data = await res.json();
  }

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta property="og:title" content={data.title} />
        <meta property="og:image" content={data.imageUrl} />
      </head>
      <body>
        <Redirect link={link} id={id}/>
      </body>
    </html>
  );
};