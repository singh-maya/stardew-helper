"use server";

export async function getAllRecipes() {
	const resp = await fetch("http://127.0.0.1:8000/recipes/list");
	if (resp) {
		const data = await resp.json();
		return data;
	} else {
		console.error("Unable to get dishes");
	}
}

export async function getNeededIngredients(dish_list) {
	const requestBody = {
		recipe_list: dish_list,
	};

	const resp = await fetch(
		"http://127.0.0.1:8000/recipes/get-total-ingredients",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(requestBody),
		}
	);
	if (resp) {
		const data = await resp.json();
		console.log(data);
		return data;
	} else {
		console.error("Unable to get dishes");
	}
}
