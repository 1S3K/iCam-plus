import Question from "./models/question"
import Comment from "./models/comment"

export const home = (req, res) => {
    res.render("home");
};

export const login = (req, res) => {
    res.render('login');
}

export const prototype = async (req, res) => {
    const {
        params: { lectureId }
    } = req;

    try {
        const questions = await Question.find({available:1}).sort({time : 1});
        const comments = await Comment.find({available:1});
        res.render("prototype", {lectureId, questions, comments});
    } catch (error) {
        res.render("prototype", {lectureId, questions : [], comments : []});
    }
};

export const question = async (req, res) => {
    const {
        body: { lectureId, minute, second, title, content }
    } = req;
    var author = "test";
    var time = parseInt(minute*60)+parseInt(second);

    const newQuestion = await Question.create({
        lecture:lectureId,
        time:time,
        title,
        content,
        author:author,
        available:1
    });
    res.redirect(`prototype/${lectureId}`);
};

export const comment = async (req, res) => {
    const {
        body: { lectureId, questionId, text }
    } = req;
    var author = "test";

    const newComment = await Comment.create({
        question: questionId,
        text,
        author:author,
        available:1
    });

    res.redirect(`prototype/${lectureId}`);
};

export const deleteQuestion = async (req, res) => {
    const {
        body: { lectureId, questionId }
    } = req;

    const question = await Question.find({_id : questionId}).update({available:0});

    res.redirect(`prototype/${lectureId}`);
};

export const deleteComment = async (req, res) => {
    const {
        body: { lectureId, commentId }
    } = req;

    const comment = await Comment.find({_id : commentId}).update({available:0});

    res.redirect(`prototype/${lectureId}`);
};