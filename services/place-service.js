const PlaceModel = require("../models/place-model");

class PlaceService {
  async getPlace(id) {
    const place = await PlaceModel.findOne({ id });
    return place;
  }
}

module.exports = new PlaceService();
