const TribeModel = require("../models/tribe-model");

class TribeService {
  async getTribe(id) {
    const tribe = await TribeModel.findOne({ id });
    return tribe;
  }
}

module.exports = new TribeService();
