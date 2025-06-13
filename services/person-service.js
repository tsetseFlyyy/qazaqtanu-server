const PersonModel = require("../models/person-model");

class PersonService {
  async getPerson(id) {
    const person = await PersonModel.findOne({ id });
    return person;
  }
}

module.exports = new PersonService();
