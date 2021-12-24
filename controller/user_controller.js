import Admin from "../models/Customer.js";

const getUser = async (req, res) => {
  try {
    res.json(await Admin.find());
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getUserById = async (req, res) => {
  try {
    res.json(await Admin.findById(req.params.id));
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const addUser = async (req, res) => {
  try {
    res.status(201).json(await Admin(req.body).save());
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateUser = async (req, res) => {
  try {
    if (!(await Admin.findById(req.params.id)))
      return res.status(401).json({ message: "User not found" });
    res
      .status(200)
      .json(await Admin.updateOne({ _id: req.params.id }, { $set: req.body }));
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteUser = async (req, res) => {
  try {
    if (!(await Admin.findById(req.params.id)))
      return res.status(401).json({ message: "User not Found" });
    res.status(200).json(await Admin.deleteOne({ _id: req.params.id }));
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export { getUser, getUserById, addUser, updateUser, deleteUser };
