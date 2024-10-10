const { Router } = require("express");
const router = Router();

const webs_json = require("../data/webrep-webs.json");

router.get("/", (req, res) => {
  res.json(webs_json);
});

module.exports = router;
