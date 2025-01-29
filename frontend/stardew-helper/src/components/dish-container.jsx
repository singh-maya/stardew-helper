"use client";

import DishTile from "./dish-tile";
import { useEffect, useState } from "react";
import { getAllRecipes, getNeededIngredients } from "@/functions/get-recipes";

export default function DishContainer() {
	const [allRecipes, setAllRecipes] = useState([]);
	const [selectedOptions, setSelectedOptions] = useState([]);
	const [ingredients, setIngredients] = useState([]);

	const handleSelect = async (value) => {
		const newSelectedValues = selectedOptions.includes(value)
			? selectedOptions.filter((v) => v !== value)
			: [...selectedOptions, value];
		setSelectedOptions(newSelectedValues);

		const needed_ingredients = await getNeededIngredients(newSelectedValues);
		setIngredients(needed_ingredients);
	};

	useEffect(() => {
		async function fetchData() {
			const recipes = await getAllRecipes();
			setAllRecipes(recipes);
		}
		fetchData();
	}, []);

	return (
		<div>
			<div className="border border-black-300 shadow-lg w-fit h-96 p-2 overflow-auto">
				<div className="grid grid-cols-4 gap-2">
					{allRecipes.map((dish) => (
						<div key={dish.name}>
							<DishTile
								name={dish.name}
								ingredients={dish.ingredients}
								selected={selectedOptions.includes(dish.name)}
								onSelect={handleSelect}
							/>
						</div>
					))}
				</div>
				<div></div>
			</div>
			<div>
				<p>Needed Ingredients:</p>
				{Object.entries(ingredients).map(([ingredient, quantity]) => (
					<p key={ingredient}>
						{ingredient}: {quantity}
					</p>
				))}
			</div>
		</div>
	);
}
