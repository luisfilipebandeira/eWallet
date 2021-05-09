import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import RealStateFundRepository from '../repositories/RealStateFundRepository';
import RealStateFundService from '../services/RealStateFundService';

const realStateFundRouter = Router();

realStateFundRouter.get('/', async (request, response) =>{
    const realStateFundRepository = getCustomRepository(RealStateFundRepository);

    const getRealStateFund = await realStateFundRepository.find();
    const getBalance = await realStateFundRepository.getBalance();

    return response.json({getRealStateFund, getBalance});
});

realStateFundRouter.post('/', (request, response) =>{
    const {quantity, name, value} = request.body;
    
    const moveRealStateFund = new RealStateFundService();

    const movimentation = moveRealStateFund.execute({
        quantity,
        name,
        value
    });

    return response.json(movimentation);
});

realStateFundRouter.delete('/', (request, response) => {
    const {id} = request.headers;

    const moveRealStateFund = new RealStateFundService();

    const movimentation = moveRealStateFund.remove({id});

    return response.json(movimentation);

});

export default realStateFundRouter;