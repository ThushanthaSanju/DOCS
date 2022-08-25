const Router = require("@koa/router");

const {
  CreateProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
} = require("../api/products.api");

const router = new Router({
  prefix: "/products",
});

router.post("/", async (ctx) => {
  let product = ctx.request.body;
  product = await CreateProduct(product);
  ctx.response.status = 200;
  ctx.body = product;
});

router.get("/", async (ctx) => {
  ctx.body = await getProducts();
});

router.get("/:id", async (ctx) => {
  let productId = ctx.params.id;
  ctx.body = await getProduct(productId);
});

router.put("/:id", async (ctx) => {
  const id = ctx.params.id;
  let product = ctx.request.body;

  product = await updateProduct(id, product);
  ctx.response.status = 200;
  ctx.body = product;
});

router.delete("/:id", async (ctx) => {
  const id = ctx.params.id;
  await deleteProduct(id);
  ctx.response.status = 201;
});

module.exports = router;
