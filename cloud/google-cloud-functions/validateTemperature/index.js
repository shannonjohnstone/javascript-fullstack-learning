exports.validateTemperature = async (req, res) => {
  try {
    if (req.body.temp < 100) {
      res.status(200).send("Temperature OK");
    } else {
      res.status(200).send("Too hot!")
    }
  } catch (error) {
    console.log("Got error: ", error);
    res.status(500).send(err)
  }
}