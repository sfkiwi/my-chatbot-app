import Head from 'next/head';
import Chatbot from '../components/Chatbot';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Chatbot App</title>
      </Head>
      <main>
        <h1>Welcome to My Chatbot App</h1>
        <Chatbot />
      </main>
    </div>
  );
}
