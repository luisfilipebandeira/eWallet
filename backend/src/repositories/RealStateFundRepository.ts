import { EntityRepository, Repository } from 'typeorm'

import {RealStateFund} from '../models/RealStateFund'

@EntityRepository(RealStateFund)
class RealStateFundRepository extends Repository<RealStateFund>{
    public async getBalance(){
        const getRealStateFund = await this.find()

        const total = getRealStateFund.reduce((accumulator, realStateFund) => {
            const balance = realStateFund.value * realStateFund.quantity

            return accumulator + balance
        }, 0)

        return total
    }
}   

export default RealStateFundRepository