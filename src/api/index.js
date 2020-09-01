import users from "./routes/users";
import sessions from "./routes/sessions";
import questions from "./routes/questions";
import answers from "./routes/answers";
import institutions from "./routes/institutions"

export default () => ({
  users: users(),
  sessions: sessions(),
  questions: questions(),
  answers: answers(),
  institutions: institutions(),
});
