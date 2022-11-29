const express = require("express");
const signale = require("signale");
const router = express.Router();

const Program = require("../models/programSchema");
const Galeria = require("../models/galeriaSchema");

router.get("/all", async (req, res) => {
  try {
    const programs = await Program.find();
    res.status(200).json(programs);
    signale.success("Minden program adatok lekérése sikeres.");
  } catch (err) {
    signale.fatal("Minden program adatok lekérése sikertelen.", err);
    res.status(500).json({ message: err.message });
  }
});

router.get("/allando", async (req, res) => {
  try {
    const allandoData = await Program.find({ type: "allando" }).exec();
    res.status(200).json(allandoData);
    signale.success("Állandó adatok lekérése sikeres.");
  } catch (err) {
    signale.error("Állandó adatok lekérése sikertelen.", err);
  }
});

router.get("/idoszakos", async (req, res) => {
  try {
    const idoszakosData = await Program.find({ type: "idoszakos" }).exec();
    res.status(200).json(idoszakosData);
    signale.success("Időszakos adatok lekérése sikeres.");
  } catch (err) {
    signale.error("Időszakos adatok lekérése sikertelen.", err);
  }
});

router.get("/sajat", async (req, res) => {
  try {
    const sajatData = await Program.find({ type: "sajat" }).exec();
    res.status(200).json(sajatData);
    signale.success("Saját adatok lekérése sikeres.");
  } catch (err) {
    signale.error("Saját adatok lekérése sikertelen.", err);
  }
});

router.get("/galeria", async (req, res) => {
  try {
    const galeriaData = await Galeria.find({});
    res.status(200).json(galeriaData);
    signale.success("Képek lekérése sikeres.");
  } catch (err) {
    signale.error("Képek lekérése sikertelen.", err);
  }
});

module.exports = router;
