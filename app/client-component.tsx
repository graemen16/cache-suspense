'use client';
// client component with children
export default function ClientComponent({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<h1>Client Component</h1>
			{children}
			<p>then more Client Component content</p>
		</div>
	);
}
