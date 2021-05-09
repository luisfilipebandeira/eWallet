import { getCustomRepository } from "typeorm";
import { RealStateFund } from "../models/RealStateFund";
import RealStateFundRepository from "../repositories/RealStateFundRepository";


interface Request{
    quantity: number;
    name: string;
    value: number;
}

interface Delete{
    id: string;
}

class AddMoveService {
    public async execute({quantity, name, value}: Request): Promise<RealStateFund>{
        const realStateFundRepository = getCustomRepository(RealStateFundRepository);

        const acao = await realStateFundRepository.findOne({
            where: { name }
        });

        const movimentation = realStateFundRepository.create({
            quantity,
            name,
            value
        });

        await realStateFundRepository.save(movimentation);

        return (movimentation);
    }

    public async remove({id}: Delete){
        const realStateFundRepository = getCustomRepository(RealStateFundRepository);
        
        const remove = await realStateFundRepository.delete({id: id});

        return remove;
    }
}

export default AddMoveService