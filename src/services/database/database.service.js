const knex = require('knex');
const dotenv = require('dotenv');

dotenv.config();

class DatabaseService {
  constructor() {
    this.knexInstance = null;
  }

  createKnexInstance() {
    if (!this.knexInstance) {
      // Create a knex instance here
      this.knexInstance = knex({
        // Your knex configuration options here
        client: 'pg',
        connection: {
          host: process.env.DB_HOST,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
        },
      });
    }
  }

  getKnexInstance() {
    if (this.knexInstance === null) {
      throw new Error('Knex instance not found');
    }
    return this.knexInstance;
  }
}

module.exports = new DatabaseService();
