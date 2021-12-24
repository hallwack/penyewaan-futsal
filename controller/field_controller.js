import Field from "../models/Field.js";

const getField = async (req, res) => {
  try {
    res.json(await Field.find());
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getFieldById = async (req, res) => {
  try {
    res.json(await Field.findById(req.params.id));
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const addField = async (req, res) => {
  try {
    res.status(201).json(await Field(req.body).save());
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateField = async (req, res) => {
  try {
    if (!(await Field.findById(req.params.id)))
      return res.status(401).json({ message: "Field not found" });
    res
      .status(200)
      .json(await Field.updateOne({ _id: req.params.id }, { $set: req.body }));
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteField = async (req, res) => {
  try {
    const get = req.params.id;
    if (!(await Field.findById(req.params.id)))
      return res.status(401).json({ message: "Field not found" });
    res.status(200).json(await Field.deleteOne({ _id: req.params.id }));
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export { getField, getFieldById, addField, updateField, deleteField };
