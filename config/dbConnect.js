import { Sequelize } from 'sequelize';


export const connectToDatabase = async() => {
    const sequelize = new Sequelize('sequelize', 'root', 'Adwait@mysql123', {
        host: 'localhost',
        dialect: 'mysql' 
    });

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    return sequelize;
};

