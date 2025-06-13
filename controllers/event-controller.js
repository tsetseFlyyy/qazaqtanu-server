const EventService = require("../services/event-service");

class EventController {
  async getEvent(req, res, next) {
    try {
      const { id } = req.params;
      const event = await EventService.getEvent(id);
      return res.json(event);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new EventController();
