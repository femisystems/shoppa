const Schema = require('../db/schemas/user');
/**
 * @class
 * @classdesc user controller
 */
class User {

  constructor(schema, ctx) {
    super(schema, 'user');
  }

  /**
   * create() creates new user
   * 
   * @param {Object} req 
   * @param {Object} res 
   */
  create(req, res) {
    res.status(201).json({
      name: 'John Doe'
    });
  }

  /**
   * getAll() gets all users from db
   * 
   * @param {Object} req 
   * @param {Object} res 
   */
  getAll(req, res) {
    res.status(200).json({
      data: [
        { 
          name: 'Daniella Winter'
        },
        {
          name: 'Femi Alabi'
        },
        {
          name: 'Chisom Amaru'
        }
      ]
    });
  }

  /**
   * getOne() gets one user object from db
   * 
   * @param {Object} req 
   * @param {Object} res 
   */
  getOne(req, res) {
    res.status(200 ).json({
      data: {
        name: 'John Doe'
      }
    });
  }
}

module.exports = new User(Schema);
