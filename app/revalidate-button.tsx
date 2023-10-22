'use client';

import { revalidatePlease } from '@/server-actions/stuff-to-wait-on';
// calling revalidatePath from a client component results in an error - so call a server action to do it
const RevalidateButton = () => {
	return <button onClick={() => revalidatePlease()}>Revalidate</button>;
};
export default RevalidateButton;
