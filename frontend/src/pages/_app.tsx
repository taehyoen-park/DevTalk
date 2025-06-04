import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "@/layout/Layout";



export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      {/* <Header />   */}
      {/* <div className="flex flex-row items-center justify-start min-h-screen pt-16"></div> */}
        <Layout>   
          <Component {...pageProps}/>
        </Layout>
      
      {/* <Footer/> */}
    </div>
  );
}
