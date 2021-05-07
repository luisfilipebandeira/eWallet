import { EntityRepository, Repository } from 'typeorm'

import {Stocks} from '../models/Stocks'

@EntityRepository(Stocks)
class MoveRepository extends Repository<Stocks>{
    public async getBalance(){
        const getStocks = await this.find()

        const total = getStocks.reduce((accumulator, stocks) => {
            const balance = stocks.value * stocks.quantity

            return accumulator + balance
        }, 0)

        return total
    }
}   

export default MoveRepository