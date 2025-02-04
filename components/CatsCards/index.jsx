import Image from 'next/image';

export default function CatsCards({ cat }) {
	return (
		<div
			className="group relative p-4 bg-purple-400/30 rounded-xl border-b-4 border-b-purple-300 
      transition-all duration-500 ease-out
      hover:-translate-y-2 hover:scale-[1.02]
      hover:bg-purple-400/40 hover:shadow-xl hover:shadow-purple-500/20
      active:scale-95 active:shadow-sm"
		>
			<div className="flex flex-col gap-2">
				<div className="relative w-full h-[170px] grid grid-cols-5 overflow-hidden rounded-lg">
					<Image
						src={cat.url}
						fill
						alt="Image of the Cat"
						className="absolute object-cover object-center rounded-lg 
              transition-transform duration-500 ease-out
              group-hover:scale-110"
						quality={100}
					/>
					<div
						className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent 
            opacity-0 group-hover:opacity-100 transition-opacity duration-500"
					/>
				</div>
				{cat.breeds.map((breed, index) => (
					<div
						key={index}
						className="grid grid-cols-2 justify-between transform transition-all duration-500
              translate-y-0 group-hover:translate-y-1"
					>
						<div className="text-[15px] text-white">
							<p className="font-semibold opacity-90 group-hover:opacity-100">
								Origin:{' '}
							</p>
							<span className="transition-colors duration-500 group-hover:text-purple-100">
								{breed.origin}
							</span>
						</div>
						<div className="text-[15px] text-white">
							<p className="font-semibold opacity-90 group-hover:opacity-100">
								Expected life:
							</p>
							<span className="transition-colors duration-500 group-hover:text-purple-100">
								{breed.life_span}
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
