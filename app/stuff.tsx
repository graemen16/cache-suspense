import 'server-only';
import { getStuff, getStuffFromCache } from '@/server-actions/stuff-to-wait-on';
import { MoreStuff } from './more-stuff';
import { Suspense } from 'react';

const Stuff = async () => {
	console.log('Stuff');
	const stuff = await getStuffFromCache();
	//const stuff = await getStuff();

	return (
		<div>
			<h1>{stuff}</h1>
			<Suspense fallback={<div>Waiting on more stuff...</div>}>
				<MoreStuff />
			</Suspense>
		</div>
	);
};
export default Stuff;
