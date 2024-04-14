import mongoose from "mongoose";
const ConnectDB = async () => {
  try {
    const response = await mongoose.connect(
      `${process.env.DATA_BASE_URI}/${process.env.DATA_BASE_NAME}`
    );
    console.log(`⁕ MongoDB Connected : ${response.connection.host}`);
  } catch (error) {
    console.log(`⁕ Mongo Connection failed `, error);
  }
};
export { ConnectDB };
