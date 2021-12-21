import express from "express";
import User from "../models/User.js";

const getUser = async (req, res) => {
  try {
    res.json(await User.find());
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getUserById = async (req, res) => {
  try {
    const get = req.params.id;
    res.json(await User.findById(get));
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const addUser = async (req, res) => {
  try {
    res.status(201).json(await User(req.body).save());
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateUser = async (req, res) => {
  try {
    if (!(await User.findById(req.params.id)))
      return res.status(401).json({ message: "User not found" });
    res
      .status(200)
      .json(await User.updateOne({ _id: req.params.id }, { $set: req.body }));
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteUser = async (req, res) => {
  try {
    if (!(await User.findById(req.params.id)))
      return res.status(401).json({ message: "User not Found" });
    res.status(200).json(await User.deleteOne({ _id: req.params.id }));
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export { getUser, getUserById, addUser, updateUser, deleteUser };
