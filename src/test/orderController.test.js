const { expect } = require('chai');
const sinon = require('sinon');
const orderController = require('../src/controllers/orderController');
const orderService = require('../src/services/orderService');

describe('Order Controller', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should create an order', async () => {
    const req = { body: { id: '227', datetime: '2022-11-01T11:11:11.111Z', totalfee: 120, services: [{ id: '123' }] } };
    const res = { json: sandbox.stub() };

    sandbox.stub(orderService, 'createOrder').resolves(req.body);

    await orderController.createOrder(req, res);
    expect(res.json.calledWith(req.body)).to.be.true;
  });

  it('should update an order', async () => {
    const req = { params: { orderId: '227' }, body: { totalfee: 150 } };
    const res = { json: sandbox.stub(), status: sandbox.stub().returnsThis() };

    sandbox.stub(orderService, 'updateOrder').resolves({ id: req.params.orderId, totalfee: req.body.totalfee });

    await orderController.updateOrder(req, res);
    expect(res.json.calledOnce).to.be.true;
  });

});
