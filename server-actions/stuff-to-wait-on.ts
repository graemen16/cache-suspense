'use server';

import { revalidatePath } from 'next/cache';
import { cache } from 'react';
require('console-stamp')(console);

export const getStuffFromCache = cache(async () => {
	console.log('getStuffFromCache');
	const stuff = await getStuff();
	console.log('gotStuffFromCache', stuff);
	return stuff;
});

export async function getStuff(): Promise<string> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('getStuff');
			resolve('Stuff - eventually');
		}, 3000);
	});
}

// note revalidate does not cause full re-render, but does update cache
// revalidatePath doesn't work on client component.
export async function revalidatePlease() {
	return revalidatePath('/');
}
