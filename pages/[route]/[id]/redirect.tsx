'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { redirectToAppOrStore } from '../../../utils/redirect';

type RedirectParams = {
  route: string;
  id?: string;
}

const Redirect = ({ route, id }: RedirectParams) => {
  useEffect(() => {
    const link = route + (id ? '/' + id : '');
    redirectToAppOrStore(link);
  }, [route, id]);

  return (
    <main className="main">
      <Image className="logo" width={150} height={110} src={"/logo.png"} alt="Eatly" priority={true}/>
    </main>
  )
}

export default Redirect;