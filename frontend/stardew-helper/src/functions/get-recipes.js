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
