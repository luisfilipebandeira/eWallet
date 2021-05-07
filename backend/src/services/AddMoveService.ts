import { response } from "express";
import { getCustomRepository } from "typeorm";
import AppError from "../erros/AppError";
import { Stocks } from "../models/Stocks";
import MoveRepository from "../repositories/MoveRepository";


interface Request{
    quantity: number;
    name: string;
    value: number;
}

interface Delete{
    id: string;
}

class AddMoveService {
    public async execute({quantity, name, value}: Request): Promise<Stocks>{
        const moveRepository = getCustomRepository(MoveRepository);

        const acao = await moveRepository.findOne({
            where: { name }
        });

        const movimentation = moveRepository.create({
            quantity,
            name,
            value
        });

        await moveRepository.save(movimentation);

        return (movimentation);
    }

    public async remove({id}: Delete){
        const moveRepository = getCustomRepository(MoveRepository);
        
        const remove = await moveRepository.delete({id: id});

        return remove;
    }
}

export default AddMoveService