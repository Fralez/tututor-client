import users from "./routes/users";
import auth from "./routes/auth";

export default () => ({
  users: users(),
  auth: auth(),
});
