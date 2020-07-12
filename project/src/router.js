import express from "express";
import {
    home,
    login,
    prototype,
    question,
    comment,
    editQuestion,
    deleteQuestion,
    deleteComment
} from "./controller";

export const router = express.Router();

router.get('/', home);

router.get('/login', login);

router.get(`/prototype/:lectureId`, prototype);

router.post('/question', question);

router.post('/comment', comment);

router.post('/editQuestion', editQuestion);

router.post('/deleteQuestion', deleteQuestion)

router.post('/deleteComment', deleteComment)