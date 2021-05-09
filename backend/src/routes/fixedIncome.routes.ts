import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import FixedIncomeRepository from '../repositories/FixedIncomeRepository';
import FixedIncomeService from '../services/FixedIncomeService';

const fixedIncomeRouter = Router();

fixedIncomeRouter.get('/', async (request, response) =>{
    const fixedIncomeRepository = getCustomRepository(FixedIncomeRepository);

    const getFixedIncome = await fixedIncomeRepository.find();
    const getBalance = await fixedIncomeRepository.getBalance();

    return response.json({getFixedIncome, getBalance});
});

fixedIncomeRouter.post('/', (request, response) =>{
    const {quantity, name, value} = request.body;
    
    const moveFixedIncome = new FixedIncomeService();

    const movimentation = moveFixedIncome.execute({
        quantity,
        name,
        value
    });

    return response.json(movimentation);
});

fixedIncomeRouter.delete('/', (request, response) => {
    const {id} = request.headers;

    const moveFixedIncome = new FixedIncomeService();

    const movimentation = moveFixedIncome.remove({id});

    return response.json(movimentation);

});

export default fixedIncomeRouter;