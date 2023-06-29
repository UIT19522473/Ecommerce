const { default: mongoose } = require("mongoose");

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.URL_MONGO);
    console.log("connect successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnect;
