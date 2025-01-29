"use client";

import DishTile from "./dish-tile";
import { useEffect, useState } from "react";
import { getAllRecipes } from "@/functions/get-recipes";

export default function DishContainer() {
	const [allRecipes, setAllRecipes] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const recipes = await getAllRecipes();
			setAllRecipes(recipes);
		}
		fetchData();
	}, []);

	return (
		<div className="grid grid-cols-4 gap-2">
			{allRecipes.map((dish) => (
				<div key={dish.name}>
					<DishTile
						name={dish.name}
						ingredients={dish.ingredients}
						image={dish.image}
					/>
				</div>
			))}
		</div>
	);
}
