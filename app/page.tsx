import 'server-only';
import Stuff from './stuff';
import { Suspense } from 'react';
import RevalidateButton from './revalidate-button';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Suspense fallback={<div>Waiting on stuff...</div>}>
				<Stuff />
			</Suspense>
			<RevalidateButton />
		</main>
	);
}
