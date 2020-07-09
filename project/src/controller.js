import Question from "./models/question"
import Comment from "./models/comment"

export const home = (req, res) => {
    res.render("home");
};

export const login = (req, res) => {
    res.render('login');
}

export const prototype = async (req, res) => {
    try {
        const questions = await Question.find({}).sort({time : 1});
        const comments = await Comment.find({});
        res.render("prototype", {questions, comments});
    } catch (error) {
        res.render("prototype", {questions : [], comments : []});
    }
};

export const question = async (req, res) => {
    const {
        body: { minute, second, title, content }
    } = req;
    var author = "테스트 계정";
    var time = parseInt(minute*60)+parseInt(second);

    const newQuestion = await Question.create({
        time:time,
        title,
        content,
        author:author
    });
    res.redirect("/prototype");
};

export const comment = async (req, res) => {
    const {
        body: { questionId, text }
    } = req;
    var author = "테스트 계정";

    const newComment = await Comment.create({
        question: questionId,
        text,
        author:author
    });

    res.redirect("/prototype");
};