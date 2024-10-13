const { Router } = require("express");
const router = Router();

const webs_json = require("../data/webrep-webs.json");
const { validateWeb } = require("../utils/schemas");

// get all webs
router.get("/", (req, res) => {
  const { country } = req.query;
  if (country) {
    const country_filter = webs_json.filter(
      (web) => web.country.toLowerCase() === country.toLowerCase()
    );

    return res.json(country_filter);
  }
  res.json(webs_json);
});

//get web by id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const web = webs_json.find((web) => web.id === id);

  if (web) return res.json(web);

  res.status(404).json({ message: "Web not found" });
});

//post new web
router.post("/", (req, res) => {
  const result = validateWeb(req.body);

  console.log(result);

  if (result.error) {
    return res.status(400).json({ error: result.error.message });
  }

  const newWeb = {
    id: webs_json.length + 1,
    ...result.data,
  };

  webs_json.push(newWeb);
  res.status(201).json(newWeb); //201 Created
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const web = webs_json.find((web) => web.id === id);
  const result = validateWeb(req.body);

  if (result.error) {
    return res.status(400).json({ error: result.error.message });
  }

  if (web) {
    const updatedWeb = {
      ...web,
      ...result.data,
    };

    webs_json[id - 1] = updatedWeb;
    res.status(200).json(updatedWeb);
  } else {
    res.status(404).json({ message: "Web not found" });
  }
});

module.exports = router;
