const PersonService = require("../services/person-service");

class PersonController {
  async getPerson(req, res, next) {
    try {
      const { id } = req.params;
      const person = await PersonService.getPerson(id);
      return res.json(person);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new PersonController();
