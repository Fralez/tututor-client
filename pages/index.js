import Head from 'next/head'
import App from './App'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create a question</title>
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
      </Head>
      <App />
    </div>
  );
}
