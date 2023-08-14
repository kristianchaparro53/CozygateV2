const mongoose = require("mongoose");

//DB_MONGO = "mongodb+srv://kristianchaparro53:akali-7@cluster0.t8iwt3c.mongodb.net/Cozygate?retryWrites=true&w=majority";
DB_MONGO = "mongodb://localhost:27017/Cozygate";



const connectDb = async () => {
  try {
    await mongoose.connect(DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("base de datos conectada");
  } catch (error) {
    console.log(error);
    console.log("BackEnd detenido");
    process.exit(1);
  }
};

module.exports = connectDb;