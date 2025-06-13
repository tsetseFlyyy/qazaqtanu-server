const tribeService = require("../services/tribe-service");

class TribeController {
  async getTribe(req, res, next) {
    try {
      const { id } = req.params;
      const tribe = await tribeService.getTribe(id);
      return res.json(tribe);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new TribeController();
