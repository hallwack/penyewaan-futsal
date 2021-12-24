import Transaction from "../models/Transaction.js";

const reportDay = async (req, res) => {
  try {
    res.json(
      await Transaction.aggregate([
        {
          $group: {
            _id: {
              year: { $year: "$booking_date" },
              month: { $month: "$booking_date" },
              dayOfMonth: { $dayOfMonth: "$booking_date" },
            },
            value: { $sum: "$total_price" },
            count: { $sum: 1 },
          },
        },
      ])
    );
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const reportWeek = async (req, res) => {
  try {
    res.json(
      await Transaction.aggregate([
        {
          $group: {
            _id: {
              week: { $week: "$booking_date" },
            },
            value: { $sum: "$total_price" },
            count: { $sum: 1 },
          },
        },
      ])
    );
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const reportMonth = async (req, res) => {
  try {
    res.status(201).json(
      await Transaction.aggregate([
        {
          $group: {
            _id: {
              month: { $month: "$booking_date" },
            },
            value: { $sum: "$total_price" },
            count: { $sum: 1 },
          },
        },
      ])
    );
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const reportYear = async (req, res) => {
  try {
    res.status(201).json(
      await Transaction.aggregate([
        {
          $group: {
            _id: {
              year: { $year: "$booking_date" },
            },
            value: { $sum: "$total_price" },
            count: { $sum: 1 },
          },
        },
      ])
    );
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export { reportDay, reportMonth, reportWeek, reportYear };
