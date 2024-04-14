import mongoose from "mongoose";
const roomSchema = new mongoose.Schema(
  {
    hotelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hotel",
    },
    hotelTypes: {
      type: String,
      required: true,
    },
    roomNo: {
      type: Number,
      required: true,
    },
    PricePerNight: {
      type: Number,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    isBooked: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
const Room = mongoose.model("Room", roomSchema);
export { Room };
