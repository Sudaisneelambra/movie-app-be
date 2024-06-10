const cards = require("../models/card");
const ratings = require("../models/rating");

const getallCards = async (req, res) => {
  try {
    const card = await cards.find({});
    if (card) {
      res.json({
        success: true,
        message: "datagetted succesfully",
        data: card,
      });
    } else {
      res.json({
        success: false,
        message: "no data found",
        data: null,
      });
    }
  } catch (err) {
    res.json({
      success: false,
      message: "something went wrong",
      data: null,
    });
  }
};

const getsingleCard = async (req, res) => {
  try {
    const { id } = req.body;
    const card = await cards.findById(id);
    if (card) {
      res.json({
        success: true,
        message: "datagetted succesfully",
        data: card,
      });
    } else {
      res.json({
        success: false,
        message: "no data found",
        data: null,
      });
    }
  } catch (err) {
    res.json({
      success: false,
      message: "something went wrong",
      data: null,
    });
  }
};

const addrating = async (req, res) => {
  try {
    const userId = req.tokens.id;
    const { rating,id } = req.body;

    const rate = await ratings.findOne({userId,movieId:id});
    if (rate) {
      return res.json({
        success: false,
        message: "you already rated this card",
      });
    }

    const rated = new ratings({
      userId,
      movieId:id,
      rating,
    });

    const saved = rated.save();

    if (saved) {
      res.json({
        success: true,
        message: "rating saved successfully",
      });
    }
  } catch (err) {
    res.json({
        success: false,
        message: "something went wrong",
    })
  }
};

module.exports = { getallCards, getsingleCard, addrating };
