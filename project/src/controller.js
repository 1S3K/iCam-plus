import Question from "./models/question"
import Comment from "./models/comment"

export const home = (req, res) => {
    res.render("home");
};

export const prototype = async (req, res) => {
    try {
        const questions = await Question.find({}).sort({time : 1});
        res.render("prototype", {questions});
    } catch (error) {
        res.render("prototype", {questions : []});
    }
};

export const question = async (req, res) => {
    const {
        body: { time, title, content }
      } = req;
      
      const newQuestion = await Question.create({
          time,
          title,
          content
      });
      res.redirect("/prototype");
};

export const comment = (req, res) => {
    res.render("home")
};