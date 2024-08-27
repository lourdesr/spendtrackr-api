const DatabaseService = require('./services/database/database.service');
const app = require('./app');

const PORT = process.env.PORT || 3000;

const setupDatabase = () => {
  try {
    DatabaseService.createKnexInstance();
    console.log('Database setup successfully');
  } catch (error) {
    console.error('Error setting up database:', error);
  }
};

const setupExpressServer = () => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
};

setupDatabase();
setupExpressServer();
