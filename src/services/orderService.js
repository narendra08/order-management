const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/orderManagement');

const orderSchema = new mongoose.Schema({
  id: String,
  datetime: Date,
  totalfee: Number,
  services: [{ id: String }],
});

const Order = mongoose.model('Order', orderSchema);

const createOrder = async (orderData) => {
  const order = new Order(orderData);
  return await order.save();
};

const updateOrder = async (orderId, newData) => {
  return await Order.findOneAndUpdate({ id: orderId }, newData, { new: true });
};

const deleteOrder = async (orderId) => {
  return await Order.findOneAndDelete({ id: orderId });
};

const getOrderById = async (orderId) => {
  return await Order.findOne({ id: orderId });
};

const getAllOrders = async () => {
  return await Order.find();
};

module.exports = {
  createOrder,
  updateOrder,
  deleteOrder,
  getOrderById,
  getAllOrders,
};
