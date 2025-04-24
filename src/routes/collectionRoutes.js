import express from "express";
import CollectionController from "../controllers/collectionController.js";

const collectionRouter = express.Router();

// Rotas de Coleções
// GET /colecoes - Listar todas as Coleções
collectionRouter.get("/", CollectionController.getAllCollections);

// GET /colecoes/:id - Obter uma Coleção pelo ID
collectionRouter.get("/:id", CollectionController.getCollectionsById);

// POST /colecoes - Criar um nova Coleção
collectionRouter.post("/", CollectionController.createCollection);

// PUT /colecoes/:id - Atualizar uma Coleção
// collectionRouter.put("/:id", CollectionController.updatePersonagem);

// DELETE /colecoes/:id - Remover uma Coleção
// collectionRouter.delete("/:id", CollectionController.deletePersonagem);

export default collectionRouter;
