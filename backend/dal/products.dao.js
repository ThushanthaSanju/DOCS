const products = require("./index").db("store").collection("products");

const ObjectID = require("mongodb").ObjectId;

//create product
const save = async ({ name, description, qty, price }) => {
  const result = await products.insertOne({ name, description, qty, price });

  return result;
};

//read all

const getAll = async () => {
  const product = await products.find();
  return product.toArray();
};

const getById = async (id) => {
  const product = await products.findOne({ _id: ObjectID(id) });
  return product;
};

const update = async (id, { name, description, qty, price }) => {
  const update = await products.replaceOne(
    { _id: ObjectID(id) },
    { name, description, qty, price }
  );

  return update;
};

const removeByID = async (id) => {
  const remove = await products.deleteOne({ _id: ObjectID(id) });
  return remove;
};

module.exports = { save, getAll, getById, update, removeByID };
