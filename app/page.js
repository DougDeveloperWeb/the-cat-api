'use server';

import SomeCatsHome from '@/components/SomeCatsHome';
import { getLimitedCats } from '../services/api';

export default async function Home() {
	const api = await getLimitedCats('small', 'png', true, 1, 10);

	return (
		<div className="min-h-screen w-full relative overflow-hidden bg-indigo-950">
			<div className="absolute inset-0">
				<div className="absolute top-1/4 left-0 right-0 h-32 bg-gradient-to-r from-purple-600/40 via-fuchsia-500/40 to-purple-600/40 blur-3xl transform -skew-y-12 animate-pulse"></div>
				<div className="absolute top-1/2 left-0 right-0 h-32 bg-gradient-to-r from-fuchsia-500/40 via-purple-600/40 to-fuchsia-500/40 blur-3xl transform skew-y-12 animate-pulse delay-75"></div>
				<div className="absolute top-3/4 left-0 right-0 h-32 bg-gradient-to-r from-purple-600/40 via-fuchsia-500/40 to-purple-600/40 blur-3xl transform -skew-y-12 animate-pulse delay-150"></div>
			</div>
			<div className="relative z-10 w-full h-screen">
				<SomeCatsHome api={api} />
			</div>
		</div>
	);
}
