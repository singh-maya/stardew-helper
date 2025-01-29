export default function DishTile({ name, ingredients }) {
	return (
		<div className="border border-black rounded-lg m-2 p-2">
			<p>Name: {name}</p>
			{Object.entries(ingredients).map(([ingredient, quantity]) => (
				<li key={ingredient}>
					{ingredient}: {quantity}
				</li>
			))}
		</div>
	);
}
