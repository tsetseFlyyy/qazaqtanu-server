const placeService = require("../services/place-service");

class PlaceController {
  async getPlace(req, res, next) {
    try {
      const { id } = req.params;
      const place = await placeService.getPlace(id);
      return res.json(place);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new PlaceController();
