import "@/styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";


export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname!=="/404") {
      router.replace(`/${router.locale}${router.asPath}`);
    }
    
  }, []);




  return <Component {...pageProps} />;
}
