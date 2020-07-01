import express from "express";
import { home, intro, functions, prototype, result, credit } from "./controller";

export const router = express.Router();

router.get('/', home);

router.get('/intro', intro);

router.get('/functions', functions);

router.get('/prototype', prototype);

router.get('/result', result);

router.get("/credit", credit);