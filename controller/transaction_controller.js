import Transaction from "../models/Transaction.js";

const getTransaction = async (req, res) => {
  try {
    res.json(
      await Transaction.find().populate("transaction_detail").populate("admin")
    );
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getTransactionById = async (req, res) => {
  try {
    res.json(
      await Transaction.findById(req.params.id)
        .populate("admin")
        .populate("transaction_detail")
    );
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const addTransaction = async (req, res) => {
  try {
    res.status(201).json(
      await Transaction({
        booking_date: req.body.booking_date,
        customer: req.body.customer,
        total_price: req.body.total_price,
        transaction_detail: req.body.transaction_detail,
        admin: req.body.admin,
      }).save()
    );
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export { getTransaction, getTransactionById, addTransaction };
