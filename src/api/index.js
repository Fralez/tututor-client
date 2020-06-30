import users from "./routes/users";
import auth from "./routes/auth";
import questions from "./routes/questions";

export default () => ({
  users: users(),
  auth: auth(),
  questions: questions(),
});
