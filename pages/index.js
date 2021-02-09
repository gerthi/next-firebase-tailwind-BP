import Head from 'next/head';

import { firestore } from '../lib/firebase';
import { useAuth } from '../lib/useAuth';
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
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<div className='h-screen p-12 bg-hero-topography'>
				<div className='container mx-auto prose text-center'>
					<h1 className='font-header'>Next Firebase Tailwind Boilerplate</h1>
					<p className='text-xl font-paragraph'>
						Lorem ipsum dolor sit amet, consectetur
					</p>
				</div>
			</div>
		</>
	);
}
