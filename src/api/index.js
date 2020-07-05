import users from "./routes/users";
import sessions from "./routes/sessions";
import questions from "./routes/questions";

export default () => ({
  users: users(),
  sessions: sessions(),
  questions: questions(),
});
