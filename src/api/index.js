import users from "./routes/users";
import sessions from "./routes/sessions";
import questions from "./routes/questions";
import answers from "./routes/answers";
import institutions from "./routes/institutions"
import channels from "./routes/channels";
import messages from "./routes/messages";

export default () => ({
  users: users(),
  sessions: sessions(),
  questions: questions(),
  answers: answers(),
  institutions: institutions(),
  channels: channels(),
  messages: messages(),
});
