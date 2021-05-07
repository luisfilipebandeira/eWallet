import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import MoveRepository from '../repositories/MoveRepository';
import AddMoveService from '../services/AddMoveService';

const stocksRouter = Router();

stocksRouter.get('/', async (request, response) =>{
    const moveRepository = getCustomRepository(MoveRepository);

    const getStocks = await moveRepository.find();
    const getBalance = await moveRepository.getBalance();

    return response.json({getStocks, getBalance});
});

stocksRouter.post('/', (request, response) =>{
    const {quantity, name, value} = request.body;
    
    const addMove = new AddMoveService();

    const movimentation = addMove.execute({
        quantity,
        name,
        value
    });

    return response.json(movimentation);
});

stocksRouter.delete('/', (request, response) => {
    const {id} = request.headers;

    const addMove = new AddMoveService();

    const movimentation = addMove.remove({id});

    return response.json(movimentation);

});

export default stocksRouter;