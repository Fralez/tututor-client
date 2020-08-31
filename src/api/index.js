import users from "./routes/users";
import sessions from "./routes/sessions";
import questions from "./routes/questions";
import answers from "./routes/answers";
import channels from "./routes/channels";
import messages from "./routes/messages";

export default () => ({
  users: users(),
  sessions: sessions(),
  questions: questions(),
  answers: answers(),
  channels: channels(),
  messages: messages(),
});
