'use client';
import { useEffect, useState } from 'react';
import { canRedirect, redirectToAppOrStore } from '../../../utils/redirect';
import Image from 'next/image';

type RedirectParams = {
  route: string;
  id?: string;
}

const Redirect = ({ route, id }: RedirectParams) => {
  const [error, setError] = useState<string>();

  useEffect(() => {
    if (canRedirect()) {
      const link = route + (id ? '/' + id : '');
      redirectToAppOrStore(link);
    } else {
      setError("Öppna denna länk i en vanlig webbläsare.")
    }
  }, [route, id]);

  return (
    <main className="main">
      {!error ? (
        <Image className="logo" width={150} height={110} src={"/logo.png"} alt="Eatly" priority={true}/>
      ) : (
        <p className="text">{error}</p>
      )}
    </main>
  )
}

export default Redirect;