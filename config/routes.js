const routes = (module.exports = require("next-routes")());

routes
  .add({
    name: "login",
    pattern: "/login",
    page: "/login",
  })
  .add({
    name: "register",
    pattern: "/register",
    page: "/register",
  })
  .add({
    name: "question",
    pattern: "/question",
    page: "/question",
});
