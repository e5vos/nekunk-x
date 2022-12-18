const express = require("express");
const router = express.Router();
const signale = require("signale");
require("dotenv/config");
const { ClerkExpressRequireAuth } = require("@clerk/clerk-sdk-node");

const Program = require("../models/programSchema");
const Galeria = require("../models/galeriaSchema");

router.use(ClerkExpressRequireAuth());

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
    signale.success("Program adatok mentése sikeres.");
    res.status(200).send("Sikeres mentés!");
  } catch (err) {
    signale.error("Program adatok mentése sikertelen.", err);
  }
});

router.post("/modifyProgram", async (req, res) => {
  // programID, type, image, title, description, contactName, contactEmail, contactPhone, registerLink
  try {
    const {
      programID,
      type,
      image,
      title,
      description,
      contactName,
      contactEmail,
      contactPhone,
      registerLink,
    } = req.body;
    await Program.updateOne(
      { _id: programID },
      {
        type: type,
        image: image,
        title: title,
        description: description,
        contactName: contactName,
        contactEmail: contactEmail,
        contactPhone: contactPhone,
        registerLink: registerLink,
      }
    );
    signale.success("Program adatok módosítása sikeres.");
    res.status(200).send("Sikeres módosítás!");
  } catch (err) {
    signale.error("Program adatok módosítása sikertelen.", err);
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

router.use((err, req, res, next) => {
  signale.fatal("Jogosulatlan próbálkozás", err.stack);
  res.status(401).send("Unauthenticated!");
});

module.exports = router;
