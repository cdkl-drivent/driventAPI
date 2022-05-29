import { Router } from 'express';
import { getTicketTypes } from '@/controllers';
import { authenticateToken } from '@/middlewares';

const ticketsRouter = Router();

ticketsRouter.all('/*', authenticateToken).get('/', getTicketTypes);

export { ticketsRouter };