import Question from "./models/question"
import Comment from "./models/comment"

export const home = (req, res) => {
    res.render("home");
};

export const prototype = (req, res) => {
    res.render("prototype")
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