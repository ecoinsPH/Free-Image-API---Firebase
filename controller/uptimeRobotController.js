const uptimeRobot = (req, res, next) => {
  console.log("I am awake!");
  res.status(200).end();
};

export default uptimeRobot;
