import { BaseEntity } from "src/base-entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { User } from "./../user/user.entity";
import { Card } from "./../card/card.entity"

@Entity('vertical')
export class Vertical extends BaseEntity {
    @Column({ type:'varchar', length:100, nullable:true})
    name: string;

    @ManyToOne(() => User, (user) => user.verticals)
    user: User;

    @OneToMany(() => Card, (card) => card.vertical)
    cards: Card[];
}