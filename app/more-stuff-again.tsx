import 'server-only';
import { getStuff, getStuffFromCache } from '@/server-actions/stuff-to-wait-on';
import { revalidatePath } from 'next/cache';
import { Suspense } from 'react';

export const MoreStuffAgain = async () => {
	console.log('MoreStuffAgain');
	const stuff = await getStuffFromCache();
	//const stuff = await getStuff();
	return (
		<div>
			<h1>{stuff}</h1>
		</div>
	);
};
