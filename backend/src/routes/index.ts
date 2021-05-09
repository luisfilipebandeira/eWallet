import { Router } from 'express';

import stocksRouter from './stocks.routes';
import fixedIncomeRouter from './fixedIncome.routes';
import realStateFundRouter from './realStateFund.routes';

const routes = Router();

routes.use('/stocks', stocksRouter);
routes.use('/income', fixedIncomeRouter);
routes.use('/realStateFund', realStateFundRouter);

export default routes;
