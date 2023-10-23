'use client';

import React from 'react';

// client component with children and props
export default function ClientComponentWithProp({
	someComponent,
	children,
}: {
	someComponent: Promise<React.ReactNode>;
	children: React.ReactNode;
}) {
	const [component, setComponent] = React.useState<React.ReactNode>(null);
	React.useEffect(() => {
		someComponent.then((component) => {
			setComponent(component);
		});
	}, [someComponent]);
	return (
		<div>
			<h1>Client Component</h1>
			{component ? component : <>...waiting...</>}
			<p>then more Client Component content</p>
			{children}
			<p>that's it</p>
		</div>
	);
}
