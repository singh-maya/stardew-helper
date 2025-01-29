from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
import json


class RecipeList(BaseModel):
    recipe_list: List[str]


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
        for dish in data:
            if dish["name"] in request.recipe_list:
                for ingredient, amount in dish["ingredients"].items():
                    total_ingredients[ingredient] = total_ingredients.get(ingredient, 0) + amount
        print("Total ingredients needed:")
        for ingredient, amount in total_ingredients.items():
            print(f"{ingredient}: {amount}")
    return total_ingredients
