import 'server-only';
import { getStuff, getStuffFromCache } from '@/server-actions/stuff-to-wait-on';
import { Suspense } from 'react';
import { MoreStuffAgain } from './more-stuff-again';
import { revalidatePath } from 'next/cache';

export const MoreStuff = async () => {
	console.log('MoreStuff');
	//const stuff = await getStuffFromCache();
	revalidatePath('/'); // can't tell if this is working
	const stuff = await getStuff();
	return (
		<div>
			<h1>{stuff}</h1>
			<Suspense fallback={<div>Waiting on more stuff again...</div>}>
				<MoreStuffAgain />
			</Suspense>
		</div>
	);
};
