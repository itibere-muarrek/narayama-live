import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Narayama Live - Índice N*</title>
        <meta name="description" content="Índice de Saúde Econômica Socioambiental" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
              'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
              sans-serif;
            background: #f5f5f5;
            color: #333;
          }
          
          html {
            scroll-behavior: smooth;
          }
        `}</style>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
