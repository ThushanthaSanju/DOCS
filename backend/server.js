const koa = require("koa");
const color = require("colors");
const mongodb = require("./dal/index.js");
const productRoutes = require("./routes/products.routes.js");
const cors = require("@koa/cors");
const bodyParser = require("koa-bodyparser");
const userRoutes = require("./routes/user.routes.js");

const app = new koa();
app.use(cors());
app.use(bodyParser());

app.use(productRoutes.routes()).use(productRoutes.allowedMethods());
app.use(userRoutes.routes()).use(userRoutes.allowedMethods());
// app.use((ctx) => {
//   ctx.body = "Hello world";
// });

const PORT = 8070;

app.listen(PORT, () => {
  console.log(`SERVER IS UP AND RUNNING ON ${PORT}`.blue.bold);
});
