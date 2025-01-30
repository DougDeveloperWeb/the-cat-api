'use client';

import CatsCards from '../CatsCards';

export default function SomeCatsHome({ api }) {
	return (
		<div className="w-full h-[600px] p-4">
			{api.status === 200 ? (
				<div className="grid grid-cols-5 w-full h-full gap-4">
					{api.data.map(cat => (
						<CatsCards key={cat.id} cat={cat} />
					))}
				</div>
			) : (
				<div>Failed fetch</div>
			)}
		</div>
	);
}
