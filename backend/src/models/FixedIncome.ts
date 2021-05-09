import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'

@Entity('fixedIncome')
export class FixedIncome{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string;

    @Column('decimal')
    value: number;

    @Column('decimal')
    quantity: number

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}