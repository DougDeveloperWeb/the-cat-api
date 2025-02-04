'use client';

import { useState } from 'react';
import CatsCards from '../CatsCards';
import { Search, Filter, Loader } from 'lucide-react';
import { Input } from '../ui/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '../ui/select';

export default function SomeCatsHome({ api }) {
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedOrigin, setSelectedOrigin] = useState('');

	// Get unique origins for filter
	const origins =
		api.status === 200
			? [
					...new Set(
						api.data.flatMap(cat => cat.breeds.map(breed => breed.origin))
					)
				]
			: [];

	// Filter cats based on search and origin
	const filteredCats =
		api.status === 200
			? api.data.filter(cat => {
					const matchesSearch = cat.breeds.some(breed =>
						breed.origin.toLowerCase().includes(searchTerm.toLowerCase())
					);
					const matchesOrigin =
						!selectedOrigin ||
						cat.breeds.some(breed => breed.origin === selectedOrigin);
					return matchesSearch && matchesOrigin;
				})
			: [];

	return (
		<div className="w-full min-h-[600px] p-4 space-y-6">
			{/* Search and Filter Controls */}
			<div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-purple-900/20 p-4 rounded-xl backdrop-blur-sm">
				{/* Search */}
				<div className="relative w-full sm:w-64">
					<Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-300" />
					<Input
						type="text"
						placeholder="Search by origin"
						value={searchTerm}
						onChange={e => setSearchTerm(e.target.value)}
						className="pl-10"
					/>
				</div>

				{/* Origin Filter */}
				<div className="relative w-full sm:w-48">
					<Select value={selectedOrigin} onValueChange={setSelectedOrigin}>
						<SelectTrigger>
							<Filter className="mr-2 h-4 w-4 text-purple-300" />
							<SelectValue placeholder="All Origins" />
						</SelectTrigger>
						<SelectContent>
							{origins.map((origin, index) => (
								<SelectItem key={index} value={origin}>
									{origin}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
			</div>

			{/* Content */}
			{api.status === 200 ? (
				<>
					<div
						className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 
            animate-[fadeIn_0.5s_ease-out]"
					>
						{filteredCats.map(cat => (
							<CatsCards key={cat.id} cat={cat} />
						))}
					</div>

					{/* No results message */}
					{filteredCats.length === 0 && (
						<div className="text-center py-10">
							<p className="text-purple-300 text-lg">
								No cats found matching your criteria
							</p>
						</div>
					)}
				</>
			) : (
				<div className="flex items-center justify-center h-64 bg-purple-900/20 rounded-xl backdrop-blur-sm">
					<div className="text-center space-y-4">
						<Loader className="w-8 h-8 text-purple-400 animate-spin mx-auto" />
						<p className="text-purple-300">Failed to fetch cats data</p>
					</div>
				</div>
			)}
		</div>
	);
}
