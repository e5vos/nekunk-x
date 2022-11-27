const express = require("express");
const router = express.Router();
const signale = require("signale");

const Program = require("../models/programSchema");
const Galeria = require("../models/galeriaSchema");

router.post("/addProgram", async (req, res) => {
  // type, image, title, description, contactName, contactEmail, contactPhone, registerLink
  try {
    const {
      type,
      image,
      title,
      description,
      contactName,
      contactEmail,
      contactPhone,
      registerLink,
    } = req.body;
    const newProgram = new Program({
      type: type,
      image: image,
      title: title,
      description: description,
      contactName: contactName,
      contactEmail: contactEmail,
      contactPhone: contactPhone,
      registerLink: registerLink,
    });
    await newProgram.save();
    signale.success("Állandó adatok mentése sikeres.");
    res.status(200).send("Sikeres mentés!");
  } catch (err) {
    signale.error("Állandó adatok mentése sikertelen.", err);
  }
});

router.post("/galeria", async (req, res) => {
  // title, pictures
  try {
    const { title, pictures } = req.body;
    const newGaleria = new Galeria({
      title: title,
      pictures: pictures,
    });
    await newGaleria.save();
    signale.success("Új képek mentése sikeres!");
    res.status(200).send("Sikeres hozzáadás!");
  } catch (err) {
    res.status(500).send("Hiba történt a hozzáadás közben!");
    signale.fatal("Hiba a /modifyData/galeria fájlnál: ", err);
  }
});

router.post("/deleteProgram", async (req, res) => {
  // programID
  try {
    if (!req.body.programID) {
      res.status(400).send("Nincs megadva programID!");
      return;
    }
    await Program.deleteOne({ _id: req.body.programID });
    res.status(200).send("Sikeres program törlés");
    signale.success("Program törlése sikeres.");
  } catch (err) {
    signale.fatal("Program törlése sikertelen.", err);
  }
});

module.exports = router;
