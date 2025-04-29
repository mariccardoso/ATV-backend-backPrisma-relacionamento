import express from 'express';

// Importar todas as routas
import authRouter from './auth.routes.js';
import animesRouter from './animeRoutes.js';
import personagensRouter from './personagemRoutes.js';
import collectionRouter from './collectionRoutes.js';
import cardRouter from './cardRoutes.js';

import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Rotas públicas
router.use('/auth', authRouter);

// Rotas privadas (protegidas por autenticação)
router.use(authMiddleware); // Middleware de autenticação

router.use('/animes', animesRouter);
router.use('/personagens', personagensRouter);
router.use('/colecoes', collectionRouter);
router.use('/cards', cardRouter);

export default router;