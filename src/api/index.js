import users from "./routes/users";
import sessions from "./routes/sessions";
import questions from "./routes/questions";
import answers from "./routes/answers";

export default () => ({
  users: users(),
  sessions: sessions(),
  questions: questions(),
  answers: answers(),
});
