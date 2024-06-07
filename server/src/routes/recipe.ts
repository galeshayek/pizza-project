import { Router } from "express";
import { validateToken } from "../middleware/validate-token";
import { vaildateRecipe, vaildateUpdateRecipe } from "../middleware/joi";
import validateId from "../validations/validateId";
import { isSelfRecipe } from "../middleware/is-self-recipe";
import RecipeService from "../services/recipe-service";
import updatedRecipe from "../middleware/updated-recipe";
import { isRecipeOwnerOrAdmin } from "../middleware/is-admin-or-self-card";

const router = Router()

//create new recipe
router.post('/', validateToken, vaildateRecipe, async (req, res, next) => {
    try {
        const userId = req.payload._id;
        await RecipeService.checkIfUnique(req.body)
        const result = await RecipeService.createRecipe(req.body, userId);
        res.status(201).json(result);
    } catch (e) {
        next(e)
    }
});

//get all recipes
router.get('/', async (_, res, next) => {
    try {
        const recipes = await RecipeService.getAllRecipe();
        res.status(200).json(recipes)
    } catch (e) {
        next(e)
    }
})

//get all my recipes
router.get('/my-recipes', validateToken, async (req, res, next) => {
    try {
        const cards = await RecipeService.getAllMyrecipes(req.payload._id);
        res.status(200).json(cards)
    } catch (e) {
        next(e);
    }
})

//get recipe by id
router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const card = await RecipeService.getRecipeById(id);
        res.status(200).json(card);
    } catch (e) {
        next(e)
    }
})

//update Recipe
router.put('/:id', ...isSelfRecipe, updatedRecipe, vaildateUpdateRecipe, validateId, async (req, res, next) => {
    try {
        const id = req.params.id
        const newCard = req.body;
        const updated = await RecipeService.updateRecipe(newCard, id);
        res.status(202).json(updated);
    } catch (e) {
        next(e);
    }
})

//like/unlike recipe
router.patch('/:id', validateToken, async (req, res, next) => {
    try {
        const patch = await RecipeService.patchLike(req.params.id, req.payload._id);
        res.status(200).json(patch)
    } catch (e) {
        next(e);
    }
});


//delete recipe
router.delete('/:id', ...isRecipeOwnerOrAdmin, async (req, res, next) => {
    try {
        const result = await RecipeService.deleteRecipe(req.params.id);
        res.status(200).json(result)
    } catch (e) {
        next(e);
    }
})


export { router as RecipeRouter }