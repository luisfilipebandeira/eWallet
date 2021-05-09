import { EntityRepository, Repository } from 'typeorm'

import {FixedIncome} from '../models/FixedIncome'

@EntityRepository(FixedIncome)
class FixedIncomeRepository extends Repository<FixedIncome>{
    public async getBalance(){
        const getFixedIncome = await this.find()

        const total = getFixedIncome.reduce((accumulator, fixedIncome) => {
            const balance = fixedIncome.value * fixedIncome.quantity

            return accumulator + balance
        }, 0)

        return total
    }
}   

export default FixedIncomeRepository