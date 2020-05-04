const routes = (module.exports = require("next-routes")());

routes
  .add({
    name: "login",
    pattern: "/login",
    page: "/site/login",
  })
  .add({
    name: "register",
    pattern: "/register",
    page: "/site/register",
  });
