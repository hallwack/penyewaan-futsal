import TransactionDetail from "../models/TransactionDetail.js";

const getTransactionDetail = async (req, res) => {
  try {
    res.json(await TransactionDetail.find().populate("field"));
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getTransactionDetailById = async (req, res) => {
  try {
    res.json(await TransactionDetail.findById(req.params.id).populate("field"));
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const addTransactionDetail = async (req, res) => {
  try {
    res.status(201).json(
      // req.body.duration
      await TransactionDetail({
        start: req.body.start,
        duration: req.body.duration,
        subtotal_price: req.body.subtotal_price,
        field: req.body.field,
      }).save()
    );
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export { getTransactionDetail, getTransactionDetailById, addTransactionDetail };
