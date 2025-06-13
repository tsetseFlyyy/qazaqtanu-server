const EventModel = require("../models/event-model");

class EventService {
  async getEvent(id) {
    const event = await EventModel.findOne({ id });
    return event;
  }
}

module.exports = new EventService();
