import Image from "next/image";

export default function DishTile({ name, ingredients, image }) {
	const imageSrc = "/images/" + name.replace(/ /g, "_") + ".png";
	console.log(imageSrc);
	return (
		<button className="border border-black rounded-lg p-2 shadow-md w-full h-full hover:border-blue-600">
			<div className="flex flex-row">
				<Image
					src={imageSrc}
					width={48}
					height={48}
					alt="food image"
					className="w-12 h-12"
				/>
				<div>
					<p>Name: {name}</p>
					{Object.entries(ingredients).map(([ingredient, quantity]) => (
						<p key={ingredient}>
							{ingredient}: {quantity}
						</p>
					))}
				</div>
			</div>
		</button>
	);
}
