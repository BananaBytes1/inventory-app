const sequelize = require("./server/db");
const app = require("./server/app");
const seed = require("./server/seed")

const PORT = process.env.PORT || 4000;

const init = async () => {
  try {
    await sequelize.sync();

    app.listen(PORT, () => {
      console.log(`Server listening at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error)
  }
};



init();
