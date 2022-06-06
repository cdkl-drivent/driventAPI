import { notFoundError } from '@/errors';
import orderRepository, { orderParams } from '@/repositories/order-repository';

type userId = {
  userId: number;
};

async function updatePayment({ userId }: userId) {
  await orderRepository.updatePayment(userId);

  return;
}

async function getByUserId(userId: number) {
  const order = await orderRepository.getByUserId(userId);

  if (!order) throw notFoundError();

  return order;
}

async function create(newOrder: orderParams) {
  const createdOrder = await orderRepository.create(newOrder);

  return createdOrder;
}
const ordersService = {
  getByUserId,
  create,
  updatePayment,
};

export default ordersService;