import { getCustomRepository } from "typeorm";
import { FixedIncome } from "../models/FixedIncome";
import FixedIncomeRepository from "../repositories/FixedIncomeRepository";


interface Request{
    quantity: number;
    name: string;
    value: number;
}

interface Delete{
    id: string;
}

class AddMoveService {
    public async execute({quantity, name, value}: Request): Promise<FixedIncome>{
        const fixedIncomeRepository = getCustomRepository(FixedIncomeRepository);

        const acao = await fixedIncomeRepository.findOne({
            where: { name }
        });

        const movimentation = fixedIncomeRepository.create({
            quantity,
            name,
            value
        });

        await fixedIncomeRepository.save(movimentation);

        return (movimentation);
    }

    public async remove({id}: Delete){
        const fixedIncomeRepository = getCustomRepository(FixedIncomeRepository);
        
        const remove = await fixedIncomeRepository.delete({id: id});

        return remove;
    }
}

export default AddMoveService