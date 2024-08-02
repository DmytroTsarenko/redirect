'use client';
import { useEffect } from 'react';
import { redirectToAppOrStore } from '../../../utils/redirect';
import Image from 'next/image';

type RedirectParams = {
  link: string;
  id?: string;
}

const Redirect = ({ link, id }: RedirectParams) => {
  useEffect(() => {
    const route = link + (id ? '/' + id : '');
    redirectToAppOrStore(route);
  }, [link, id]);

  return (
    <main className="main">
      <Image className="logo" width={150} height={110} src={"/logo.png"} alt="Eatly" priority={true}/>
    </main>
  )
}

export default Redirect;