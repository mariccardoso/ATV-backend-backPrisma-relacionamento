import express from "express";
import CardController from "../controllers/cardController.js";

const cardRouter = express.Router();

// Rotas de Coleções
// GET /colecoes - Listar todas as Coleções
cardRouter.get("/", CardController.getAllCards);

// GET /colecoes/:id - Obter uma Coleção pelo ID
cardRouter.get("/:id", CardController.getCardsById);

// POST /colecoes - Criar um nova Coleção
cardRouter.post("/", CardController.createCard);

// PUT /colecoes/:id - Atualizar uma Coleção
cardRouter.put("/:id", CardController.updateCard);

// DELETE /colecoes/:id - Remover uma Coleção
cardRouter.delete("/:id", CardController.deleteCard);

export default cardRouter;
