import Head from 'next/head';

import { firestore } from '@/lib/firebase';
import { useAuth } from '@/lib/useAuth';
import { useCollection } from 'react-firebase-hooks/firestore';

export default function Home() {
  const auth = useAuth();
  const [messages, loading, error] = useCollection(
    firestore.collection('messages').orderBy('createdAt')
  );

  return (
    <>
      <Head>
        <title>Next Firebase Tailwind Boilerplate</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="h-screen p-12 bg-hero-topography">
        <div className="container mx-auto prose text-center">
          <h1 className="font-header">Next Firebase Tailwind Boilerplate</h1>
          <br />
          <p className="text-xl font-paragraph">
            A basic Next app, loaded with ready-to-use Tailwind & plugins,
            Firebase, <code>react-firebase-hooks</code> and two cool fonts.
          </p>
        </div>
        <hr className="my-16" />
        <div className="mx-auto mt-8 prose">
          <h2 className="text-center ">What's in it ?</h2>
          <ul>
            <li>
              <b>Tailwind CSS</b>
              <span>
                <br />
                Loaded with cool plugins like{' '}
                <a href="https://github.com/tailwindlabs/tailwindcss-typography">
                  typography
                </a>
                ,{' '}
                <a href="https://github.com/AndreaMinato/tailwind-heropatterns">
                  tailwind-heropatterns
                </a>
                , <a href="https://daisy.js.org/core/colors">daisyUI</a>
              </span>
            </li>

            <li>
              <b>Firebase</b>
              <span>
                <br />
                Custom <code>useAuth</code> hook with{' '}
                <code>signInwithGoogle</code> and <code>signOut</code>
              </span>
            </li>
            <li>
              <b>Fonts</b>
              <span>
                <br />
                <span className="text-xl font-headers">
                  PT-sans (headers)
                </span>,{' '}
                <span className="text-xl font-paragraph">
                  Lato (paragraphs)
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
