import CardModel from "../models/collectionModel.js";

class CardController {
  // GET /cartas
  async getAllCards(req, res) {
    const pagina = req.query.page;
    console.log("pagina", pagina);

    const limite = req.query.limit;
    console.log("limite", limite);
    
    try {
      const cartas = await CardModel.findAll();
      res.json(cartas);
    } catch (error) {
      console.error("Erro ao buscar as cartas:", error);
      res.status(500).json({ error: "Erro ao buscar as cartas" });
    }
  }

  // GET /api/cartas/:id
  async getCardsById(req, res) {
    try {
      const { id } = req.params;

      const cartas = await CardModel.findById(id);

      if (!cartas) {
        return res.status(404).json({ error: "Carta não encontrada" });
      }

      res.json(cartas);
    } catch (error) {
      console.error("Erro ao buscar carta:", error);
      res.status(500).json({ error: "Erro ao buscar carta" });
    }
  }

  // POST /api/cartas
  async createCard(req, res) {
    try {
      // Validação básica
      const { 
        name,
        rarity,
        attackPoints,
        defensePoints,
        imageUrl,
        collectionId,
       } = req.body;

      // Verifica se todos os campos da carta foram fornecidos
      if (!name || !rarity || !attackPoints || !defensePoints || !collectionId) {
        return res
          .status(400)
          .json({ error: "Todos os campos são obrigatórios" });
      }

      // Criar o novo carta
      const newCard = await CardModel.create(
        name,
        rarity,
        attackPoints,
        defensePoints,
        imageUrl,
        collectionId,
      );

      if (!newCard) {
        return res.status(400).json({ error: "Erro ao criar carta" });
      }

      res.status(201).json({
        message: "Carta criada com sucesso",
        newCard,
      });
    } catch (error) {
      console.error("Erro ao criar carta:", error);
      res.status(500).json({ error: "Erro ao criar carta" });
    }
  }

  // PUT /api/cartas/:id
  async updateCard(req, res) {
    try {
      const { id } = req.params;
      const { 
        name,
        rarity,
        attackPoints,
        defensePoints,
        imageUrl,
        collectionId,
       } = req.body;

      // Atualizar o carta
      const updatedCard = await CardModel.update(
        id,
        name,
        rarity,
        attackPoints,
        defensePoints,
        imageUrl,
        collectionId,
      );

      if (!updatedCard) {
        return res.status(404).json({ error: "Carta não encontrada" });
      }

      res.json(updatedCard);
    } catch (error) {
      console.error("Erro ao atualizar carta:", error);
      res.status(500).json({ error: "Erro ao atualizar carta" });
    }
  }

  // DELETE /api/cartas/:id
  async deleteCard(req, res) {
    try {
      const { id } = req.params;

      // Remover o carta
      const result = await CardModel.delete(id);

      if (!result) {
        return res.status(404).json({ error: "Personagem não encontrado" });
      }

      res.status(204).json({ message: "Carta removida com sucesso" }); // Resposta sem conteúdo
    } catch (error) {
      console.error("Erro ao remover carta:", error);
      res.status(500).json({ error: "Erro ao remover carta" });
    }
  }
}

export default new CardController();
