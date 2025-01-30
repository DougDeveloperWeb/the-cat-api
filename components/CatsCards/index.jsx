import Image from 'next/image';

export default function CatsCards({ cat }) {
	return (
		<div className="p-4 bg-purple-400/30 rounded-xl border-b-4 border-b-purple-300 hover:-translate-y-1 transition duration-300">
			<div className="flex flex-col gap-2">
				<div className="relative w-full h-[170px] grid grid-cols-5">
					<Image
						src={cat.url}
						fill
						alt="Image of the Cat"
						className="absolute object-cover object-center rounded-lg"
						quality={100}
					/>
				</div>
				{cat.breeds.map((breed, index) => (
					<div key={index} className="grid grid-cols-2 justify-between">
						<div className="text-[15px] text-white">
							<p className="font-semibold">Origin: </p>
							{breed.origin}
						</div>
						<div className="text-[15px] text-white">
							<p className="font-semibold">Expected life:</p>
							{breed.life_span}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
