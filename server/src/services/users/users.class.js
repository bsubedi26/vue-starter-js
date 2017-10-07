const BaseService = require('feathers-mongoose').Service

class Service extends BaseService {

    another() {
      return 'another'
    }
}

exports.Service = Service