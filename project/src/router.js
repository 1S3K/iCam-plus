import express from "express";
import { home, prototype, question, comment } from "./controller";

export const router = express.Router();

router.get('/', home);

router.get('/prototype', prototype);

router.post('/question', question);

router.post('/comment', comment);