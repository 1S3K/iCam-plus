import express from "express";
import { home, login, prototype, question, comment } from "./controller";

export const router = express.Router();

router.get('/', home);

router.get('/login', login);

router.get('/prototype/1', prototype);
router.get('/prototype/2', prototype);

router.post('/question', question);

router.post('/comment', comment);