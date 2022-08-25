const {
  save,
  getAll,
  getById,
  update,
  removeByID,
} = require("../dal/products.dao");

const CreateProduct = async ({ name, description, qty, price }) => {
  const product = {
    name,
    description,
    qty,
    price,
  };

  return await save(product);
};

const getProducts = async () => {
  return await getAll();
};

const getProduct = async (id) => {
  return await getById(id);
};

const deleteProduct = async (id) => {
  return await removeByID(id);
};

const updateProduct = async (id, { name, description, qty, price }) => {
  return await update(id, { name, description, qty, price });
};

module.exports = {
  CreateProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
};
