import { BaseEntity } from "src/base-entity";
import { Column, Entity, OneToMany } from "typeorm";
import { Vertical } from "./../vertical/vertical.entity";

@Entity('user')
export class User extends BaseEntity {
    @Column({ type:'varchar', length:100, nullable:true})
    name: string;

    @Column({ type:'varchar', length:100, nullable:true})
    email: string;

    @Column({ type:'varchar', length:100, nullable:true})
    password: string;

    @OneToMany(() => Vertical, (vertical) => vertical.user)
    verticals: Vertical[];


}