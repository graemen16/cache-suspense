import 'server-only';
import Stuff from './stuff';
import { Suspense } from 'react';
import RevalidateButton from './revalidate-button';
import ClientComponent from './client-component';
import { MoreStuff } from './more-stuff';
import ClientComponentWithProp from './client-with-prop';
import { MoreStuffAgain } from './more-stuff-again';

export default async function Home() {
	//const otherComponent = await MoreStuff();
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Suspense fallback={<div>Waiting on stuff...</div>}>
				<Stuff />
			</Suspense>
			<ClientComponent>
				<Suspense fallback={<div>Waiting on stuff...</div>}>
					<Stuff />
				</Suspense>
			</ClientComponent>
			Now the extra bit
			<ClientComponentWithProp someComponent={MoreStuffAgain()}>
				Some page child content
			</ClientComponentWithProp>
			<RevalidateButton />
		</main>
	);
}
