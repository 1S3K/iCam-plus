import express from "express";

export const router = express.Router();


router.get('/', (req, res) => {
    res.render("home");
});

router.get('/intro', (req, res) => {
    res.render("intro");
});

router.get('/function', (req, res) => {
    res.render("function");
});

router.get('/prototype', (req, res) => {
    res.render("prototype");
});

router.get('/result', (req, res) => {
    res.render("result");
});

router.get("/credit", (req, res) => {
    res.render("credit");
});