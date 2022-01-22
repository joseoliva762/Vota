import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from "next-auth/react";

function MyApp({ 
  Component: App, 
  pageProps: { session, ...pageProps }
}: AppProps) {
  return (
    <>
      <SessionProvider session={session}>
        <div className='bg-js min-h-screen flex flex-col mx-auto items-center'>
          <App {...pageProps} />
        </div>
      </SessionProvider>
    </>
  );
}

export default MyApp
