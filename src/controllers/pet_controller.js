const Pet = require("../models/pet_model.js");

const store = async (req, res) => {
  Pet.create(req.body);
  res.json();
};

const index = async (req, res) => {
  let content = Pet.find();
  res.json(content);
};

const show = async (req, res) => {
  let content = Pet.findById(req.params.id).exec();
  res.json(content);
};

const update = async (req, res) => {
  Pet.findByIdAndUpdate(req.params.id, req.body);
  res.json();
};

const destroy = async (req, res) => {
  Pet.findByIdAndDelete(req.params.id).exec();
  res.json();
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};
