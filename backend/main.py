from fastapi import FastAPI
from pydantic import BaseModel
import json


class RecipeList(BaseModel):
    recipe_list: list


app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/recipes/list")
async def root():
    file_path = "./info/recipes.json"
    with open(file_path, "r") as file:
        data = json.load(file)
    return data


@app.post("/recipes/get-total-ingredients")
async def root(request: RecipeList):
    file_path = "./info/recipes.json"
    with open(file_path, "r") as file:
        data = json.load(file)
        total_ingredients = {}
        for dish in request.recipe_list:
            ingredients = data.get(dish, "").get("ingredients", {})
            for ingredient, amount in ingredients.items():
                total_ingredients[ingredient] = (
                    total_ingredients.get(ingredient, 0) + amount
                )
        print("Total ingredients needed:")
        for ingredient, amount in total_ingredients.items():
            print(f"{ingredient}: {amount}")
    return total_ingredients
