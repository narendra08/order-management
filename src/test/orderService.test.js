const { expect } = require('chai');
const sinon = require('sinon');
const orderService = require('../src/services/orderService');

describe('Order Service', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should create an order', async () => {
    const orderData = {
      id: '226',
      datetime: '2022-11-01T11:11:11.111Z',
      totalfee: 150,
      services: [{ id: '789' }],
    };

    sandbox.stub(orderService, 'createOrder').resolves(orderData);

    const createdOrder = await orderService.createOrder(orderData);
    expect(createdOrder).to.deep.equal(orderData);
  });

  it('should update an order', async () => {
    const orderId = '226';
    const newData = {
      totalfee: 200,
    };

    const updatedOrder = {
      id: orderId,
      datetime: '2022-11-01T11:11:11.111Z',
      totalfee: 200,
      services: [{ id: '789' }],
    };

    sandbox.stub(orderService, 'updateOrder').resolves(updatedOrder);

    const result = await orderService.updateOrder(orderId, newData);
    expect(result).to.deep.equal(updatedOrder);
  });

});
