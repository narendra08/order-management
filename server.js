const express = require('express');
const mongoose = require('mongoose');
const orderController = require('./src/controllers/orderController');

mongoose.connect('mongodb://localhost:27017/orderManagement', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
const port = 3000;

app.use(express.json());

// Define routes
app.post('/orders', orderController.createOrder);
app.put('/orders/:orderId', orderController.updateOrder);
app.delete('/orders/:orderId', orderController.deleteOrder);
app.get('/orders/:orderId', orderController.getOrderById);
app.get('/orders', orderController.getAllOrders);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
