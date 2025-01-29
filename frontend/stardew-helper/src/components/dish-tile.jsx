import Image from "next/image";

export default function DishTile({ name, ingredients, selected, onSelect }) {
	const imageSrc = "/images/" + name.replace(/ /g, "_") + ".png";
	return (
		<div>
			{selected ? (
				<button
					className="border border-blue-600 rounded-lg p-2 w-full h-full shadow-md hover:border-black-600"
					onClick={() => onSelect(name)}
				>
					<div className="flex flex-col place-items-center">
						<Image
							src={imageSrc}
							width={48}
							height={48}
							alt="food image"
							className="w-12 h-12"
						/>
						<div>
							<p>{name}</p>
							{/* {Object.entries(ingredients).map(([ingredient, quantity]) => (
						<p key={ingredient}>
							{ingredient}: {quantity}
						</p>
					))} */}
						</div>
					</div>
				</button>
			) : (
				<button
					className="border border-black-300 rounded-lg p-2 w-full h-full shadow-md hover:border-blue-600"
					onClick={() => onSelect(name)}
				>
					<div className="flex flex-col place-items-center">
						<Image
							src={imageSrc}
							width={48}
							height={48}
							alt="food image"
							className="w-12 h-12"
						/>
						<div>
							<p>{name}</p>
							{/* {Object.entries(ingredients).map(([ingredient, quantity]) => (
						<p key={ingredient}>
							{ingredient}: {quantity}
						</p>
					))} */}
						</div>
					</div>
				</button>
			)}
		</div>
	);
}
