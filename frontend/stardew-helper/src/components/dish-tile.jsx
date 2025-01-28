export default function DishTile({ name, ingredients }) {
	return (
		<div>
			<p>Name: {name}</p>
			{Object.entries(ingredients).map(([ingredient, quantity]) => (
				<li key={ingredient}>
					{ingredient}: {quantity}
				</li>
			))}
		</div>
	);
}
