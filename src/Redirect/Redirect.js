import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { redirectToAppOrStore } from "../redirect";

export default function Redirect() {
  const { link, id } = useParams();

  useEffect(() => {
    if (link) {
      redirectToAppOrStore(link + (id ? '/' + id : ''));
    }
  }, []);

  return (
    <main className="main">
      <img
        className="logo"
        src={"/logo.png"}
        alt="Eatly"
        height="120"
      />
    </main>
  );
}