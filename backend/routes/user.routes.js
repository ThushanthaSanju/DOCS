const { registerUser, getAllUsers, loginUser } = require("../api/users.api");
const Router = require("@koa/router");

const router = new Router({
  prefix: "/users",
});

router.post("/", async (ctx) => {
  let user = ctx.request.body;
  user = await registerUser(user);
  ctx.response.status = 200;
  ctx.body = user;
});

router.get("/", async (ctx) => {
  ctx.body = await getAllUsers();
});

router.post("/login", async (ctx) => {
  let email = ctx.request.body.email;
  let password = ctx.request.body.password;
  userNew = await loginUser(email, password);
  ctx.response.status = 200;
  ctx.body = userNew;
});

module.exports = router;
