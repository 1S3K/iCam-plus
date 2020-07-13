import Question from "./models/question"
import Comment from "./models/comment"
import Officehour from "./models/officehour"

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
        const officehour = await Officehour.find({lecture:lectureId})
        res.render("prototype", {lectureId, questions, comments, officehour});
    } catch (error) {
        res.render("prototype", {lectureId, questions : [], comments : [], officehour:[]});
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
        commentType:1,
        text,
        author:author,
        available:1
        
    });

    res.redirect(`prototype/${lectureId}`);
};

export const commentCam = async (req, res) => {
    const {
        body: { lectureId, text }
    } = req;
    var author = "test";

    const newComment = await Comment.create({
        commentType:2,
        text,
        author:author,
        available:1
    });

    res.redirect(`prototype/${lectureId}`);
};

export const editQuestion = async (req, res) => {
    const {
        body: { questionId, lectureId, minute, second, title, content }
    } = req;

    var time = parseInt(minute*60)+parseInt(second);

    await Question.findOneAndUpdate({ _id: questionId }, {
        time,
        title,
        content,
    });

    res.redirect(`prototype/${lectureId}`);
};

// export const editComment = async (req, res) => {
//     const {
//         body: { lectureId, questionId, text }
//     } = req;
//     var author = "test";

//     const newComment = await Comment.create({
//         question: questionId,
//         text,
//         author:author,
//         available:1
//     });

//     res.redirect(`prototype/${lectureId}`);
// };

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

export const officeHour = async (req, res) => {
    const {
        body: { lectureId, office_day, office_start_hour, office_end_hour }
    } = req;

    await Officehour.findOneAndUpdate({ lecture: lectureId }, {
        day:office_day,
        begin:office_start_hour,
        end:office_end_hour
    });

    res.redirect(`prototype/${lectureId}`);
}