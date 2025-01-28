"use client";

import DishTile from "@/components/dish-tile";
import { useEffect, useState } from "react";
import { getAllRecipes } from "@/functions/get-recipes";

export default function Home() {
	const [allRecipes, setAllRecipes] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const recipes = await getAllRecipes();
			setAllRecipes(recipes);
		}
		fetchData();
		console.log(allRecipes);
	}, []);

	return (
		<div>
			{allRecipes.map((dish) => (
				<div key={dish.name}>
					<DishTile name={dish.name} ingredients={dish.ingredients} />
				</div>
			))}
		</div>
	);
}
