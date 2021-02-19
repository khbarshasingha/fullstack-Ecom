import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },

        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Product"
        }
      }
    ],
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalcode: { type: Number, required: true },
      country: { type: String, required: true }
    },
    paymentMethod: { type: String, required: true },
    paymentResult: {
      id: { type: String, required: true },
      status: { type: String, required: true },
      updtae_time: { type: String, required: true },
      email: { type: String, required: true }
    },
    taxPrice: { type: Number, required: true, default: 0.0 },
    ship_price: { type: Number, required: true, default: 0.0 },
    total_price: { type: Number, required: true, default: 0.0 },
    is_paid: { type: Boolean, required: true, default: false },
    paid_at: { type: Date, required: true },
    is_delivered: { type: Boolean, required: true },
    delivered_at: { type: Date, required: true }
  },
  { timestamps: true }
);
const Order = mongoose.model("Order", orderSchema);
export default Order;
